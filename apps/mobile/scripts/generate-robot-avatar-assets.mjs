import { mkdir, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetDir = resolve(__dirname, '../assets/robot-avatar');
const tmpDir = join(assetDir, '.tmp-svg');
const milestones = Array.from({ length: 21 }, (_, index) => index * 5);

const accessories = [
  ['antenna', 5],
  ['visor', 10],
  ['badge', 15],
  ['boots', 20],
  ['wrench', 25],
  ['cape', 30],
  ['helmet', 35],
  ['gloves', 40],
  ['jetpack', 45],
  ['tie', 50],
  ['monocle', 55],
  ['toolbelt', 60],
  ['crown', 65],
  ['shield', 70],
  ['headphones', 75],
  ['satchel', 80],
  ['boots-gold', 85],
  ['rocket', 90],
  ['halo', 95],
  ['suit', 100],
];

function has(percent, id) {
  const item = accessories.find(([accessoryId]) => accessoryId === id);
  return Boolean(item && percent >= item[1]);
}

function drawBack(percent) {
  return `
    ${has(percent, 'cape') ? `
      <path d="M158 289 C95 340 74 459 110 570 C156 552 211 508 243 438 L208 313 Z" fill="#4C1D95" opacity=".95" filter="url(#shadow)"/>
      <path d="M354 289 C417 340 438 459 402 570 C356 552 301 508 269 438 L304 313 Z" fill="#4C1D95" opacity=".95" filter="url(#shadow)"/>
      <path d="M116 558 C174 528 210 486 235 433" fill="none" stroke="#8B5CF6" stroke-width="4" opacity=".6"/>
      <path d="M396 558 C338 528 302 486 277 433" fill="none" stroke="#00D4FF" stroke-width="4" opacity=".55"/>
    ` : ''}
    ${has(percent, 'jetpack') ? `
      <g filter="url(#shadow)">
        <rect x="126" y="292" width="56" height="154" rx="22" fill="#CBD5E1" stroke="#00D4FF" stroke-width="4"/>
        <rect x="330" y="292" width="56" height="154" rx="22" fill="#CBD5E1" stroke="#00D4FF" stroke-width="4"/>
        <path d="M143 444 C133 474 137 512 156 548 C174 512 178 474 168 444 Z" fill="#F59E0B" opacity=".88"/>
        <path d="M343 444 C333 474 337 512 356 548 C374 512 378 474 368 444 Z" fill="#F59E0B" opacity=".88"/>
        <path d="M139 326 h30" stroke="#7C3AED" stroke-width="6" stroke-linecap="round"/>
        <path d="M343 326 h30" stroke="#7C3AED" stroke-width="6" stroke-linecap="round"/>
      </g>
    ` : ''}
    ${has(percent, 'rocket') ? `
      <g transform="translate(360 188) rotate(16)" filter="url(#glowAmber)">
        <path d="M30 0 C60 25 67 78 44 126 L15 126 C-7 78 0 25 30 0 Z" fill="#F8FAFC" stroke="#A78BFA" stroke-width="3"/>
        <circle cx="30" cy="48" r="12" fill="#00D4FF" stroke="#FFFFFF" stroke-width="4"/>
        <path d="M11 94 L-20 124 L16 116 Z" fill="#7C3AED"/>
        <path d="M49 94 L80 124 L44 116 Z" fill="#7C3AED"/>
        <path d="M20 126 C16 146 23 165 30 178 C37 165 44 146 40 126 Z" fill="#F59E0B"/>
      </g>
    ` : ''}
  `;
}

function drawFeet(percent) {
  const gold = has(percent, 'boots-gold');
  const boots = has(percent, 'boots') || gold;
  const fill = gold ? '#F59E0B' : boots ? '#454B56' : '#6B7280';
  const stroke = gold ? '#F59E0B' : boots ? '#00D4FF' : '#6B7280';
  return `
    <g filter="url(#shadow)">
      <rect x="176" y="493" width="62" height="40" rx="16" fill="${fill}" stroke="${stroke}" stroke-width="${boots ? 4 : 0}"/>
      <rect x="274" y="493" width="62" height="40" rx="16" fill="${fill}" stroke="${stroke}" stroke-width="${boots ? 4 : 0}"/>
      ${boots ? `
        <path d="M188 518 h36" stroke="${gold ? '#FFF7AD' : '#00FF88'}" stroke-width="4" stroke-linecap="round"/>
        <path d="M286 518 h36" stroke="${gold ? '#FFF7AD' : '#00FF88'}" stroke-width="4" stroke-linecap="round"/>
      ` : ''}
    </g>
  `;
}

function drawBody(percent) {
  const suit = has(percent, 'suit');
  return `
    <g filter="url(#shadow)">
      <rect x="170" y="298" width="172" height="158" rx="42" fill="${suit ? '#D9DEE7' : '#E5E7EB'}" stroke="#A78BFA" stroke-width="6"/>
      ${suit ? `
        <path d="M187 326 C218 352 294 352 325 326 L325 438 C286 464 226 464 187 438 Z" fill="#151723" opacity=".82"/>
        <path d="M207 316 L256 368 L305 316" fill="none" stroke="#F8FAFC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      ` : ''}
      <rect x="209" y="345" width="94" height="72" rx="20" fill="#0A0A0F" stroke="#00D4FF" stroke-width="4" filter="url(#glowCyan)"/>
      <path d="M256 365 L282 381 L282 411 L256 427 L230 411 L230 381 Z" fill="#00D4FF" opacity=".92"/>
      <path d="M256 375 L273 386 L273 406 L256 417 L239 406 L239 386 Z" fill="#00FF88" opacity=".6"/>
      ${has(percent, 'tie') ? `
        <path d="M246 301 L266 301 L276 358 L256 382 L236 358 Z" fill="#7C3AED" stroke="#A78BFA" stroke-width="3"/>
        <path d="M244 304 L256 320 L268 304" fill="#111827" opacity=".45"/>
      ` : ''}
      ${has(percent, 'badge') ? `
        <g transform="translate(302 328)" filter="url(#glowAmber)">
          <path d="M0 16 L15 0 L31 16 L31 38 L15 50 L0 38 Z" fill="#F59E0B" stroke="#FDE68A" stroke-width="3"/>
          <path d="M15 11 L19 22 L30 22 L21 29 L24 41 L15 34 L6 41 L9 29 L0 22 L11 22 Z" fill="#7C3AED"/>
        </g>
      ` : ''}
      ${has(percent, 'toolbelt') ? `
        <g transform="translate(165 421)">
          <rect x="0" y="0" width="182" height="22" rx="10" fill="#171923" stroke="#9CA3AF" stroke-width="2"/>
          <rect x="67" y="-4" width="48" height="30" rx="8" fill="#3F3F46" stroke="#F59E0B" stroke-width="3"/>
          <path d="M82 10 h18" stroke="#FDE68A" stroke-width="3" stroke-linecap="round"/>
        </g>
      ` : ''}
      ${has(percent, 'satchel') ? `
        <g transform="translate(319 379) rotate(-7)" filter="url(#shadow)">
          <path d="M0 0 h55 a14 14 0 0 1 14 14 v75 a14 14 0 0 1 -14 14 h-55 a14 14 0 0 1 -14 -14 v-75 a14 14 0 0 1 14 -14 Z" fill="#171923" stroke="#8B5CF6" stroke-width="4"/>
          <path d="M13 48 h36 v34 h-36 Z" fill="#0A0A0F" stroke="#00D4FF" stroke-width="3"/>
          <path d="M20 72 v-12 M31 72 v-22 M42 72 v-16" stroke="#00FF88" stroke-width="4" stroke-linecap="round"/>
          <path d="M4 -35 C-4 12 9 42 60 69" fill="none" stroke="#5B4636" stroke-width="8"/>
        </g>
      ` : ''}
    </g>
  `;
}

function drawArms(percent) {
  return `
    <g filter="url(#shadow)">
      <path d="M174 330 C125 342 99 380 92 426" fill="none" stroke="#CBD5E1" stroke-width="26" stroke-linecap="round"/>
      <path d="M338 330 C387 342 413 380 420 426" fill="none" stroke="#CBD5E1" stroke-width="26" stroke-linecap="round"/>
      <circle cx="92" cy="431" r="${has(percent, 'gloves') ? 28 : 21}" fill="${has(percent, 'gloves') ? '#171923' : '#D9DEE7'}" stroke="${has(percent, 'gloves') ? '#A78BFA' : '#9CA3AF'}" stroke-width="5"/>
      <circle cx="420" cy="431" r="${has(percent, 'gloves') ? 28 : 21}" fill="${has(percent, 'gloves') ? '#171923' : '#D9DEE7'}" stroke="${has(percent, 'gloves') ? '#A78BFA' : '#9CA3AF'}" stroke-width="5"/>
      ${has(percent, 'wrench') ? `
        <g transform="translate(48 292)">
          <rect x="32" y="52" width="24" height="142" rx="11" fill="#CBD5E1" stroke="#9CA3AF" stroke-width="4"/>
          <path d="M16 0 C35 18 53 17 70 0 L82 13 L57 39 L70 64 C50 76 30 76 10 64 L23 39 L-2 13 Z" fill="#CBD5E1" stroke="#D1D5DB" stroke-width="4"/>
          <circle cx="44" cy="159" r="13" fill="#0A0A0F" stroke="#00FF88" stroke-width="4"/>
        </g>
      ` : ''}
      ${has(percent, 'shield') ? `
        <g transform="translate(387 356)" filter="url(#glowCyan)">
          <path d="M42 0 L98 22 L87 109 C79 147 56 178 42 184 C28 178 5 147 -3 109 L-14 22 Z" fill="#10121C" stroke="#00FF88" stroke-width="5"/>
          <path d="M42 25 L76 39 L69 101 C64 124 50 145 42 150 C34 145 20 124 15 101 L8 39 Z" fill="#111827" stroke="#00D4FF" stroke-width="3"/>
          <path d="M25 86 C25 68 59 68 59 86 V94 H25 Z" fill="#00D4FF"/>
          <rect x="18" y="90" width="48" height="43" rx="8" fill="#00D4FF"/>
        </g>
      ` : ''}
    </g>
  `;
}

function drawHead(percent) {
  return `
    <g filter="url(#shadow)">
      ${has(percent, 'antenna') ? `
        <path d="M150 111 C125 81 121 54 139 30" fill="none" stroke="#00FF88" stroke-width="7" stroke-linecap="round"/>
        <circle cx="139" cy="30" r="13" fill="#00FF88" filter="url(#glowGreen)"/>
        <path d="M128 72 C112 58 105 42 108 24" fill="none" stroke="#00FF88" stroke-width="4" stroke-linecap="round" opacity=".7"/>
      ` : ''}
      ${has(percent, 'halo') ? `
        <ellipse cx="256" cy="34" rx="96" ry="24" fill="#F59E0B" opacity=".96"/>
        <ellipse cx="256" cy="34" rx="75" ry="11" fill="#0A0A0F"/>
      ` : ''}
      ${has(percent, 'crown') ? `
        <path d="M169 112 L188 66 L225 105 L256 56 L287 105 L324 66 L343 112 Z" fill="#F59E0B" stroke="#FDE68A" stroke-width="5" filter="url(#glowAmber)"/>
        <path d="M246 80 L256 63 L266 80 L266 103 L246 103 Z" fill="#8B5CF6"/>
      ` : ''}
      ${has(percent, 'helmet') ? `
        <path d="M150 142 C162 84 210 61 256 61 C302 61 350 84 362 142 Z" fill="#252837" stroke="#A78BFA" stroke-width="5"/>
        <path d="M178 111 C215 86 297 86 334 111" fill="none" stroke="#00D4FF" stroke-width="5" opacity=".8"/>
      ` : ''}
      <rect x="146" y="121" width="220" height="142" rx="47" fill="#F3F4F6" stroke="#00D4FF" stroke-width="6" filter="url(#glowCyan)"/>
      <rect x="172" y="153" width="168" height="78" rx="31" fill="#070911" stroke="#101827" stroke-width="4"/>
      ${has(percent, 'visor') ? `
        <path d="M165 145 C217 133 295 133 347 145 L335 196 C288 206 224 206 177 196 Z" fill="#7C3AED" opacity=".86" stroke="#A78BFA" stroke-width="4"/>
      ` : ''}
      <ellipse cx="222" cy="192" rx="16" ry="25" fill="#00FF88" filter="url(#glowGreen)"/>
      <ellipse cx="290" cy="192" rx="16" ry="25" fill="#00FF88" filter="url(#glowGreen)"/>
      ${has(percent, 'monocle') ? `
        <circle cx="290" cy="192" r="32" fill="none" stroke="#F59E0B" stroke-width="7"/>
        <path d="M314 216 L351 252" stroke="#F59E0B" stroke-width="7" stroke-linecap="round"/>
        <path d="M285 184 L295 184 M290 179 L290 189" stroke="#00FF88" stroke-width="3" stroke-linecap="round"/>
      ` : ''}
      ${has(percent, 'headphones') ? `
        <path d="M152 175 C152 97 360 97 360 175" fill="none" stroke="#1F2432" stroke-width="18" stroke-linecap="round"/>
        <rect x="118" y="157" width="42" height="78" rx="21" fill="#1F2432" stroke="#A78BFA" stroke-width="5"/>
        <rect x="352" y="157" width="42" height="78" rx="21" fill="#1F2432" stroke="#A78BFA" stroke-width="5"/>
        <path d="M129 185 h21 M363 185 h21" stroke="#00D4FF" stroke-width="5" stroke-linecap="round"/>
      ` : ''}
    </g>
  `;
}

function svg(percent) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="640" viewBox="0 0 512 640">
  <defs>
    <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset=".45" stop-color="#CBD5E1"/>
      <stop offset="1" stop-color="#6B7280"/>
    </linearGradient>
    <linearGradient id="headGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset=".5" stop-color="#E5E7EB"/>
      <stop offset="1" stop-color="#9CA3AF"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F8FAFC"/>
      <stop offset=".45" stop-color="#94A3B8"/>
      <stop offset="1" stop-color="#1F2937"/>
    </linearGradient>
    <linearGradient id="suitGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F8FAFC"/>
      <stop offset=".28" stop-color="#3C4050"/>
      <stop offset="1" stop-color="#0A0A0F"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFF7AD"/>
      <stop offset=".48" stop-color="#F59E0B"/>
      <stop offset="1" stop-color="#7C2D12"/>
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#C4B5FD"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#A78BFA" stop-opacity=".76"/>
      <stop offset=".55" stop-color="#7C3AED" stop-opacity=".9"/>
      <stop offset="1" stop-color="#00D4FF" stop-opacity=".55"/>
    </linearGradient>
    <linearGradient id="capeGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#A78BFA"/>
      <stop offset=".42" stop-color="#4C1D95"/>
      <stop offset="1" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="rocketGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset=".52" stop-color="#D1D5DB"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FDE68A"/>
      <stop offset=".45" stop-color="#F59E0B"/>
      <stop offset="1" stop-color="#00D4FF" stop-opacity=".55"/>
    </linearGradient>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="9" stdDeviation="9" flood-color="#000000" flood-opacity=".45"/>
    </filter>
    <filter id="glowCyan" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#00D4FF" flood-opacity=".7"/>
    </filter>
    <filter id="glowGreen" x="-80%" y="-80%" width="260%" height="260%">
      <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#00FF88" flood-opacity=".8"/>
    </filter>
    <filter id="glowAmber" x="-80%" y="-80%" width="260%" height="260%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#F59E0B" flood-opacity=".75"/>
    </filter>
  </defs>
  <ellipse cx="256" cy="577" rx="135" ry="28" fill="#000000" opacity=".38"/>
  ${drawBack(percent)}
  ${drawFeet(percent)}
  <g>
    <rect x="198" y="445" width="38" height="64" rx="17" fill="#CBD5E1" stroke="#1F2937" stroke-width="3"/>
    <rect x="276" y="445" width="38" height="64" rx="17" fill="#CBD5E1" stroke="#1F2937" stroke-width="3"/>
  </g>
  ${drawArms(percent)}
  ${drawBody(percent)}
  ${drawHead(percent)}
</svg>`;
}

await mkdir(assetDir, { recursive: true });
await rm(tmpDir, { recursive: true, force: true });
await mkdir(tmpDir, { recursive: true });

for (const percent of milestones) {
  const padded = String(percent).padStart(3, '0');
  const svgPath = join(tmpDir, `robot-${padded}.svg`);
  const pngPath = join(assetDir, `robot-${padded}.png`);
  await writeFile(svgPath, svg(percent), 'utf8');

  const result = spawnSync('magick', [
    '-background',
    'none',
    svgPath,
    '-resize',
    '512x640',
    '-depth',
    '8',
    '-strip',
    pngPath,
  ], { stdio: 'inherit' });

  if (result.status !== 0) {
    throw new Error(`ImageMagick failed for robot-${padded}.png`);
  }
}

await rm(tmpDir, { recursive: true, force: true });
console.log(`Generated ${milestones.length} robot avatar PNGs in ${assetDir}`);
