import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';

const proScreenPath = join(__dirname, '..', '..', 'app', 'pro.tsx');

function proScreenAccessibilityLabels() {
  const sourceFile = ts.createSourceFile(
    proScreenPath,
    readFileSync(proScreenPath, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const labels: string[] = [];

  function visit(node: ts.Node) {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const accessibilityLabel = node.attributes.properties.find(
        (property): property is ts.JsxAttribute =>
          ts.isJsxAttribute(property) && property.name.getText(sourceFile) === 'accessibilityLabel',
      );
      const initializer = accessibilityLabel?.initializer;

      if (initializer && ts.isStringLiteral(initializer)) {
        labels.push(initializer.text);
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return labels;
}

describe('pro screen navigation', () => {
  it('uses the root stack header for the back button', () => {
    expect(proScreenAccessibilityLabels()).not.toContain('Back');
  });
});
