import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';

const learnScreenPath = join(__dirname, '..', '..', 'app', '(tabs)', 'index.tsx');

function hasLockedSearchResultRoute() {
  const sourceFile = ts.createSourceFile(
    learnScreenPath,
    readFileSync(learnScreenPath, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  let found = false;

  function isRouterPush(node: ts.CallExpression) {
    return (
      ts.isPropertyAccessExpression(node.expression) &&
      node.expression.expression.getText(sourceFile) === 'router' &&
      node.expression.name.getText(sourceFile) === 'push'
    );
  }

  function visit(node: ts.Node) {
    if (ts.isCallExpression(node) && isRouterPush(node)) {
      const [route] = node.arguments;

      if (
        route &&
        ts.isConditionalExpression(route) &&
        route.condition.getText(sourceFile) === 'result.isLocked' &&
        ts.isStringLiteral(route.whenTrue) &&
        route.whenTrue.text === '/pro' &&
        ts.isTemplateExpression(route.whenFalse) &&
        route.whenFalse.head.text === '/card/'
      ) {
        found = true;
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return found;
}

describe('learn search navigation', () => {
  it('routes locked search result titles to the Pro screen', () => {
    expect(hasLockedSearchResultRoute()).toBe(true);
  });
});
