import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';

const appDir = join(__dirname, '..', '..', 'app');

function rootStackScreenNames() {
  const layoutPath = join(appDir, '_layout.tsx');
  const sourceFile = ts.createSourceFile(
    layoutPath,
    readFileSync(layoutPath, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const names: string[] = [];

  function visit(node: ts.Node) {
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(sourceFile) === 'Stack.Screen') {
      const nameAttribute = node.attributes.properties.find(
        (property): property is ts.JsxAttribute =>
          ts.isJsxAttribute(property) && property.name.getText(sourceFile) === 'name',
      );
      const initializer = nameAttribute?.initializer;

      if (initializer && ts.isStringLiteral(initializer)) {
        names.push(initializer.text);
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return names;
}

function rootStackScreenOptions() {
  const layoutPath = join(appDir, '_layout.tsx');
  const sourceText = readFileSync(layoutPath, 'utf8');
  const sourceFile = ts.createSourceFile(
    layoutPath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const options = new Map<string, Record<string, string>>();

  function getStringAttribute(node: ts.JsxSelfClosingElement, attributeName: string) {
    const attribute = node.attributes.properties.find(
      (property): property is ts.JsxAttribute =>
        ts.isJsxAttribute(property) && property.name.getText(sourceFile) === attributeName,
    );
    const initializer = attribute?.initializer;

    return initializer && ts.isStringLiteral(initializer) ? initializer.text : undefined;
  }

  function getOptionsAttribute(node: ts.JsxSelfClosingElement) {
    const attribute = node.attributes.properties.find(
      (property): property is ts.JsxAttribute =>
        ts.isJsxAttribute(property) && property.name.getText(sourceFile) === 'options',
    );
    const initializer = attribute?.initializer;

    if (
      !initializer ||
      !ts.isJsxExpression(initializer) ||
      !initializer.expression ||
      !ts.isObjectLiteralExpression(initializer.expression)
    ) {
      return {};
    }

    return Object.fromEntries(
      initializer.expression.properties.flatMap((property) => {
        if (!ts.isPropertyAssignment(property)) return [];
        const name = property.name.getText(sourceFile);
        const value = property.initializer;

        return ts.isStringLiteral(value) ? [[name, value.text]] : [];
      }),
    );
  }

  function visit(node: ts.Node) {
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(sourceFile) === 'Stack.Screen') {
      const name = getStringAttribute(node, 'name');

      if (name) {
        options.set(name, getOptionsAttribute(node));
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return options;
}

function collectRouteNames(dir: string, base = ''): string[] {
  const names: string[] = [];

  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.') || entry.endsWith('.test.ts')) continue;

    const fullPath = join(dir, entry);
    const routePath = base ? `${base}/${entry}` : entry;

    if (statSync(fullPath).isDirectory()) {
      if (entry.startsWith('(')) {
        names.push(routePath);
        continue;
      }

      names.push(...collectRouteNames(fullPath, routePath));
      continue;
    }

    if (!entry.endsWith('.tsx') || entry === '_layout.tsx') continue;

    const withoutExtension = routePath.replace(/\.tsx$/, '');
    names.push(withoutExtension);
  }

  return names;
}

describe('root stack route declarations', () => {
  it('only declares screens that exist under the root app router', () => {
    const declaredNames = rootStackScreenNames();
    const routeNames = new Set(collectRouteNames(appDir));
    const extraneousNames = declaredNames.filter((name) => !routeNames.has(name));

    expect(extraneousNames).toEqual([]);
  });

  it('uses a normal back title for stack screens opened from tabs', () => {
    const options = rootStackScreenOptions();

    expect(options.get('card/[id]')?.headerBackTitle).toBe('Back');
    expect(options.get('session')?.headerBackTitle).toBe('Back');
    expect(options.get('meeting-prep')?.headerBackTitle).toBe('Back');
    expect(options.get('pro')?.headerBackTitle).toBe('Back');
  });
});
