import { existsSync } from 'node:fs';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetDir = resolve(__dirname, '../assets/robot-avatar');
const conceptSourcePath = join(assetDir, 'source/robot-100-concept.png');
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
      <path d="M165 286 C96 339 71 463 105 579 C157 557 209 507 244 431 L213 311 Z" fill="#4C1D95" opacity=".98" filter="url(#shadow)"/>
      <path d="M347 286 C416 339 441 463 407 579 C355 557 303 507 268 431 L299 311 Z" fill="#4C1D95" opacity=".98" filter="url(#shadow)"/>
      <path d="M113 562 C171 532 209 484 236 427" fill="none" stroke="#A78BFA" stroke-width="7" opacity=".72"/>
      <path d="M399 562 C341 532 303 484 276 427" fill="none" stroke="#00D4FF" stroke-width="7" opacity=".62"/>
      <path d="M137 516 C165 492 189 460 207 420" fill="none" stroke="#2DD4BF" stroke-width="2" opacity=".45"/>
      <path d="M375 516 C347 492 323 460 305 420" fill="none" stroke="#2DD4BF" stroke-width="2" opacity=".45"/>
    ` : ''}
    ${has(percent, 'jetpack') ? `
      <g filter="url(#shadow)">
        <rect x="124" y="286" width="61" height="160" rx="24" fill="#CBD5E1" stroke="#00D4FF" stroke-width="4"/>
        <rect x="327" y="286" width="61" height="160" rx="24" fill="#CBD5E1" stroke="#00D4FF" stroke-width="4"/>
        <path d="M141 444 C130 477 135 518 156 556 C177 518 182 477 171 444 Z" fill="#F59E0B" opacity=".95"/>
        <path d="M341 444 C330 477 335 518 356 556 C377 518 382 477 371 444 Z" fill="#F59E0B" opacity=".95"/>
        <path d="M139 326 h31" stroke="#7C3AED" stroke-width="7" stroke-linecap="round"/>
        <path d="M342 326 h31" stroke="#7C3AED" stroke-width="7" stroke-linecap="round"/>
        <circle cx="155" cy="372" r="10" fill="#00FF88" opacity=".72"/>
        <circle cx="357" cy="372" r="10" fill="#00FF88" opacity=".72"/>
      </g>
    ` : ''}
    ${has(percent, 'rocket') ? `
      <g filter="url(#glowAmber)">
        <path d="M414 137 C449 167 456 225 429 276 L399 276 C372 225 379 167 414 137 Z" fill="#F8FAFC" stroke="#A78BFA" stroke-width="4"/>
        <circle cx="414" cy="191" r="15" fill="#00D4FF" stroke="#FFFFFF" stroke-width="4"/>
        <path d="M395 239 L358 274 L398 264 Z" fill="#7C3AED"/>
        <path d="M433 239 L470 274 L430 264 Z" fill="#7C3AED"/>
        <path d="M404 276 C399 297 405 318 414 333 C423 318 429 297 424 276 Z" fill="#F59E0B"/>
      </g>
    ` : ''}
  `;
}

function drawFeet(percent) {
  const gold = has(percent, 'boots-gold');
  const boots = has(percent, 'boots') || gold;
  const fill = gold ? '#F59E0B' : boots ? '#242938' : '#8B95A3';
  const stroke = gold ? '#FDE68A' : boots ? '#00D4FF' : '#4B5563';
  return `
    <g filter="url(#shadow)">
      <rect x="174" y="496" width="66" height="42" rx="17" fill="${fill}" stroke="${stroke}" stroke-width="${boots ? 5 : 2}"/>
      <rect x="272" y="496" width="66" height="42" rx="17" fill="${fill}" stroke="${stroke}" stroke-width="${boots ? 5 : 2}"/>
      <path d="M186 503 h42" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity=".3"/>
      <path d="M284 503 h42" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity=".3"/>
      ${boots ? `
        <path d="M188 521 h36" stroke="${gold ? '#FFF7AD' : '#00FF88'}" stroke-width="5" stroke-linecap="round"/>
        <path d="M286 521 h36" stroke="${gold ? '#FFF7AD' : '#00FF88'}" stroke-width="5" stroke-linecap="round"/>
      ` : ''}
    </g>
  `;
}

function drawBody(percent) {
  const suit = has(percent, 'suit');
  return `
    <g filter="url(#shadow)">
      <path d="M178 319 C188 295 212 283 256 283 C300 283 324 295 334 319 L348 422 C352 458 326 484 289 486 H223 C186 484 160 458 164 422 Z" fill="#F8FAFC" stroke="#F8FAFC" stroke-width="5"/>
      <path d="M305 299 C329 317 337 346 337 419 C337 446 322 464 302 472 C316 422 315 356 305 299 Z" fill="#94A3B8" opacity=".55"/>
      <path d="M187 333 C219 311 293 311 325 333" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity=".75"/>
      <path d="M189 334 C218 358 294 358 323 334 L323 438 C286 465 226 465 189 438 Z" fill="#111827" opacity=".18"/>
      ${suit ? `
        <path d="M187 326 C218 352 294 352 325 326 L325 438 C286 464 226 464 187 438 Z" fill="#151723" opacity=".82"/>
        <path d="M207 316 L256 368 L305 316" fill="none" stroke="#F8FAFC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      ` : ''}
      <rect x="201" y="342" width="110" height="88" rx="24" fill="#06080F" stroke="#7C3AED" stroke-width="5"/>
      <rect x="209" y="350" width="94" height="72" rx="20" fill="#0A0A0F" stroke="#00D4FF" stroke-width="4" filter="url(#glowCyan)"/>
      <path d="M256 363 L285 380 L285 414 L256 431 L227 414 L227 380 Z" fill="#00D4FF" opacity=".94"/>
      <path d="M256 374 L273 386 L273 406 L256 418 L239 406 L239 386 Z" fill="#00FF88" opacity=".68"/>
      ${has(percent, 'tie') ? `
        <path d="M245 294 L267 294 L279 361 L256 391 L233 361 Z" fill="#7C3AED" stroke="#A78BFA" stroke-width="4"/>
        <path d="M243 299 L256 318 L269 299" fill="#111827" opacity=".48"/>
      ` : ''}
      ${has(percent, 'badge') ? `
        <g transform="translate(305 322)" filter="url(#glowAmber)">
          <path d="M0 17 L17 0 L36 17 L36 43 L17 57 L0 43 Z" fill="#F59E0B" stroke="#FDE68A" stroke-width="3"/>
          <path d="M17 12 L22 24 L34 24 L24 32 L28 45 L17 37 L6 45 L10 32 L0 24 L12 24 Z" fill="#7C3AED"/>
        </g>
      ` : ''}
      ${has(percent, 'toolbelt') ? `
        <g transform="translate(164 424)">
          <rect x="0" y="0" width="184" height="25" rx="11" fill="#171923" stroke="#9CA3AF" stroke-width="3"/>
          <rect x="67" y="-5" width="50" height="33" rx="8" fill="#3F3F46" stroke="#F59E0B" stroke-width="3"/>
          <path d="M82 11 h20" stroke="#FDE68A" stroke-width="3" stroke-linecap="round"/>
          <rect x="128" y="2" width="23" height="21" rx="5" fill="#111827" stroke="#00D4FF" stroke-width="2"/>
        </g>
      ` : ''}
      ${has(percent, 'satchel') ? `
        <g transform="translate(346 416) rotate(-7)" filter="url(#shadow)">
          <path d="M-72 -101 C-54 -47 -33 -8 16 31" fill="none" stroke="#5B4636" stroke-width="9" opacity=".95"/>
          <path d="M0 0 h60 a14 14 0 0 1 14 14 v76 a14 14 0 0 1 -14 14 h-60 a14 14 0 0 1 -14 -14 v-76 a14 14 0 0 1 14 -14 Z" fill="#171923" stroke="#8B5CF6" stroke-width="5"/>
          <path d="M12 45 h40 v36 h-40 Z" fill="#0A0A0F" stroke="#00D4FF" stroke-width="4"/>
          <path d="M20 73 v-12 M32 73 v-25 M44 73 v-18" stroke="#00FF88" stroke-width="5" stroke-linecap="round"/>
        </g>
      ` : ''}
    </g>
  `;
}

function drawArms(percent) {
  const gloveFill = has(percent, 'gloves') ? '#171923' : '#E2E8F0';
  const gloveStroke = has(percent, 'gloves') ? '#A78BFA' : '#94A3B8';
  return `
    <g filter="url(#shadow)">
      <path d="M176 326 C129 337 103 373 94 423" fill="none" stroke="#CBD5E1" stroke-width="30" stroke-linecap="round"/>
      <path d="M336 326 C383 337 409 373 418 423" fill="none" stroke="#CBD5E1" stroke-width="30" stroke-linecap="round"/>
      <path d="M124 376 C146 350 164 342 176 339" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity=".38"/>
      <path d="M388 376 C366 350 348 342 336 339" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity=".38"/>
      <circle cx="94" cy="427" r="${has(percent, 'gloves') ? 30 : 24}" fill="${gloveFill}" stroke="${gloveStroke}" stroke-width="5"/>
      <circle cx="418" cy="427" r="${has(percent, 'gloves') ? 30 : 24}" fill="${gloveFill}" stroke="${gloveStroke}" stroke-width="5"/>
      ${has(percent, 'wrench') ? `
        <g transform="translate(38 277)">
          <rect x="36" y="62" width="27" height="154" rx="12" fill="#CBD5E1" stroke="#9CA3AF" stroke-width="4"/>
          <path d="M18 0 C39 20 59 19 78 0 L91 15 L63 45 L78 73 C55 87 32 87 9 73 L24 45 L-4 15 Z" fill="#CBD5E1" stroke="#E5E7EB" stroke-width="5"/>
          <circle cx="50" cy="179" r="15" fill="#0A0A0F" stroke="#00FF88" stroke-width="5"/>
        </g>
      ` : ''}
      ${has(percent, 'shield') ? `
        <g transform="translate(382 344)" filter="url(#glowCyan)">
          <path d="M47 0 L110 25 L98 119 C89 160 63 194 47 201 C31 194 5 160 -4 119 L-16 25 Z" fill="#10121C" stroke="#00FF88" stroke-width="6"/>
          <path d="M47 27 L86 43 L78 110 C72 136 56 159 47 165 C38 159 22 136 16 110 L8 43 Z" fill="#111827" stroke="#00D4FF" stroke-width="4"/>
          <path d="M28 95 C28 74 66 74 66 95 V104 H28 Z" fill="#00D4FF"/>
          <rect x="20" y="101" width="54" height="49" rx="9" fill="#00D4FF"/>
          <path d="M47 47 V157 M10 81 L86 132 M84 82 L12 132" stroke="#00FF88" stroke-width="2" opacity=".7"/>
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
        <ellipse cx="256" cy="35" rx="98" ry="25" fill="#F59E0B" opacity=".98" filter="url(#glowAmber)"/>
        <ellipse cx="256" cy="35" rx="76" ry="11" fill="#0A0A0F"/>
      ` : ''}
      ${has(percent, 'crown') ? `
        <path d="M165 113 L187 62 L224 104 L256 52 L288 104 L325 62 L347 113 Z" fill="#F59E0B" stroke="#FDE68A" stroke-width="5" filter="url(#glowAmber)"/>
        <path d="M242 76 L256 56 L270 76 L270 105 L242 105 Z" fill="#7C3AED" stroke="#FDE68A" stroke-width="2"/>
      ` : ''}
      ${has(percent, 'helmet') ? `
        <path d="M145 146 C158 82 208 58 256 58 C304 58 354 82 367 146 Z" fill="#252837" stroke="#A78BFA" stroke-width="5"/>
        <path d="M176 112 C214 86 298 86 336 112" fill="none" stroke="#00D4FF" stroke-width="6" opacity=".86"/>
        <path d="M149 143 L125 105 L167 118 Z" fill="#F59E0B" opacity=".92"/>
        <path d="M363 143 L387 105 L345 118 Z" fill="#F59E0B" opacity=".92"/>
      ` : `
        <path d="M154 148 C169 98 212 78 256 78 C300 78 343 98 358 148 Z" fill="#1C2030" stroke="#111827" stroke-width="4"/>
        <path d="M187 120 C222 101 290 101 325 120" fill="none" stroke="#00D4FF" stroke-width="5" opacity=".72"/>
      `}
      <rect x="139" y="122" width="234" height="150" rx="52" fill="#F8FAFC" stroke="#F8FAFC" stroke-width="5"/>
      <rect x="166" y="153" width="180" height="83" rx="33" fill="#050711" stroke="#00D4FF" stroke-width="5" filter="url(#glowCyan)"/>
      ${has(percent, 'visor') ? `
        <path d="M160 145 C216 132 296 132 352 145 L339 199 C289 210 223 210 173 199 Z" fill="#7C3AED" opacity=".92" stroke="#C4B5FD" stroke-width="5"/>
      ` : ''}
      <ellipse cx="221" cy="194" rx="17" ry="27" fill="#00FF88" filter="url(#glowGreen)"/>
      <ellipse cx="291" cy="194" rx="17" ry="27" fill="#00FF88" filter="url(#glowGreen)"/>
      ${has(percent, 'monocle') ? `
        <circle cx="291" cy="194" r="34" fill="none" stroke="#F59E0B" stroke-width="8" filter="url(#glowAmber)"/>
        <path d="M316 219 L355 257" stroke="#F59E0B" stroke-width="7" stroke-linecap="round"/>
        <path d="M285 184 L295 184 M290 179 L290 189" stroke="#00FF88" stroke-width="3" stroke-linecap="round"/>
      ` : ''}
      ${has(percent, 'headphones') ? `
        <path d="M150 178 C150 96 362 96 362 178" fill="none" stroke="#1F2432" stroke-width="20" stroke-linecap="round"/>
        <rect x="113" y="156" width="47" height="84" rx="22" fill="#1F2432" stroke="#A78BFA" stroke-width="5"/>
        <rect x="352" y="156" width="47" height="84" rx="22" fill="#1F2432" stroke="#A78BFA" stroke-width="5"/>
        <path d="M126 185 h22 M364 185 h22" stroke="#00D4FF" stroke-width="6" stroke-linecap="round"/>
        <circle cx="137" cy="211" r="8" fill="#00FF88" opacity=".7"/>
        <circle cx="375" cy="211" r="8" fill="#00FF88" opacity=".7"/>
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

  if (percent === 100 && existsSync(conceptSourcePath)) {
    const conceptResult = spawnSync('magick', [
      conceptSourcePath,
      '-resize',
      '512x640',
      '-background',
      '#0A0A0F',
      '-gravity',
      'center',
      '-extent',
      '512x640',
      '-depth',
      '8',
      '-strip',
      pngPath,
    ], { stdio: 'inherit' });

    if (conceptResult.status !== 0) {
      throw new Error('ImageMagick failed for curated robot-100.png');
    }
    continue;
  }

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
