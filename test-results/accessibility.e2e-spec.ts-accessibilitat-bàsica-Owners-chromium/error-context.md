# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.e2e-spec.ts >> accessibilitat bàsica Owners
- Location: e2e\accessibility.e2e-spec.ts:4:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 35

- Array []
+ Array [
+   Object {
+     "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
+     "help": "Page should contain a level-one heading",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright",
+     "id": "page-has-heading-one",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-heading-one",
+             "impact": "moderate",
+             "message": "Page must have a level-one heading",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Page must have a level-one heading",
+         "html": "<html lang=\"en\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation "Main navigation" [ref=e4]:
    - generic [ref=e5]:
      - link "Spring Petclinic home" [ref=e6] [cursor=pointer]:
        - /url: /petclinic/welcome
      - list [ref=e9]:
        - listitem [ref=e10]:
          - link "Home" [ref=e11] [cursor=pointer]:
            - /url: /petclinic/welcome
            - generic [aria-hidden] [ref=e12]: 
            - text: Home
        - listitem [ref=e13]:
          - button "Owners" [ref=e14] [cursor=pointer]:
            - generic [aria-hidden] [ref=e15]: 
            - text: Owners
          - text:  
        - listitem [ref=e16]:
          - button "Veterinarians" [ref=e17] [cursor=pointer]:
            - generic [aria-hidden] [ref=e18]: 
            - text: Veterinarians
          - text:  
        - listitem [ref=e19]:
          - link "Pet Types" [ref=e20] [cursor=pointer]:
            - /url: /petclinic/pettypes
            - generic [aria-hidden] [ref=e21]: 
            - text: Pet Types
        - listitem [ref=e22]:
          - link "Specialties" [ref=e23] [cursor=pointer]:
            - /url: /petclinic/specialties
            - generic [aria-hidden] [ref=e24]: 
            - text: Specialties
  - main [ref=e25]:
    - generic [ref=e28]:
      - heading "Owners" [level=2] [ref=e29]
      - generic [ref=e30]:
        - generic [ref=e31]:
          - generic [ref=e32]: Last name
          - textbox "Last name" [ref=e34]
        - button "Find Owner" [ref=e37] [cursor=pointer]
      - generic [ref=e38]: No owners with LastName starting with ""
  - contentinfo [ref=e39]:
    - generic [ref=e41]:
      - img "Angular" [ref=e42]
      - img "Sponsored by Pivotal" [ref=e43]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | test('accessibilitat bàsica Owners', async ({ page }) => {
  5  |   await page.goto('/petclinic/owners');
  6  | 
  7  |   const resultats = await new AxeBuilder({ page }).analyze();
  8  | 
  9  |   // Mostra les violacions per consola per poder-les documentar
  10 |   for (const v of resultats.violations) {
  11 |     console.log(`[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} element/s)`);
  12 |   }
  13 | 
> 14 |   expect(resultats.violations).toEqual([]);
     |                                ^ Error: expect(received).toEqual(expected) // deep equality
  15 | });
```