import { test, expect } from '@playwright/test';

const yourSentences = [
  'naan padika pogirean',
  'Vilayada poganum aanal exam irukkathala ippa mudiyathu',
  'naan unnai paaka eppa vara',
  'avarukku pichai podunga',
  'naan naaliku gym povan',
  'naan naaliku gym poga maatean',
  'mannithurunga',
  'enakkum seathu naaliku sapadu kondu vaa',
  'sari naan sapittu vittu varugirean',
  'thyavu seithu ennaiavaridam kooti sellungal',
  'konjan nearathula sollurean',
  'enakku kachal vaara maaari irukku',
  'Enakku udambu sari illai',
  'pilai pilai',
  'avalai namba veandam',
  'aval avanudan pooital',
  'kovikama avara kootitu vaanga',
  'naanga appada ammava paaka trinco porom',
  'phone la data irukkutha',
  'konjam cool thanni thareengala',
  'vaa sandai sandaiku vaa',
  'nee varavea veandam poo',
  'inimea naa vravea maatea',
  'ava oru moosamana pombala'
];

yourSentences.forEach((sentence, index) => {
  test(`PosFun${String(index + 1).padStart(4, '0')} - "${sentence}"`, async ({ page }) => {
    test.setTimeout(120000);  // 2 minutes for long sentences
    
    await page.goto('/');
    await page.click('textarea');
    await page.waitForTimeout(1000);
    
    // Type sentence WORD-BY-WORD (same logic as your working code)
    const words = sentence.split(' ');
    for (const word of words) {
      await page.keyboard.type(word);           // Type word
      await page.keyboard.press('Space');       // Press space  
      await page.waitForTimeout(2500);          // Wait for conversion (your timing)
    }
    
    // Final wait + PROOF (same as your code)
    await page.waitForTimeout(4000);
    await page.screenshot({ 
      path: `proof-pos${String(index + 1).padStart(4, '0')}.png`, 
      fullPage: true 
    });
    console.log(`🟢 PosFun${String(index + 1).padStart(4, '0')} COMPLETE! "${sentence}"`);
  });
});