import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('accessibilitat bàsica Owners', async ({ page }) => {
  await page.goto('/petclinic/owners');

  const resultats = await new AxeBuilder({ page }).analyze();

  // Mostra les violacions per consola per poder-les documentar
  for (const v of resultats.violations) {
    console.log(`[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} element/s)`);
  }

  expect(resultats.violations).toEqual([]);
});