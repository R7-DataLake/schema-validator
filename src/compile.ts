import fs from 'fs';
import path from 'path';

import person from './std/person';
import opd from './std/opd';
import opdx from './std/opdx';
import opop from './std/opop';
import opdrug from './std/opdrug';
import ipd from './std/ipd';
import ipdx from './std/ipdx';
import ipop from './std/ipop';
import ipdrug from './std/ipdrug';
import lab from './std/lab';
import appoint from './std/appoint';
import chronic from './std/chronic';

const outDir = './out';

// create output folder
const createFolder = () => {
  try {
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir);
    }
  } catch (err) {
    console.error(err);
  }
}

// create person schema json
const compilePerson = () => {
  const json = JSON.stringify(person.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'person.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create opd schema json
const compileOpd = () => {
  const json = JSON.stringify(opd.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'opd.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create opdx schema json
const compileOpdx = () => {
  const json = JSON.stringify(opdx.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'opdx.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create opdrug schema json
const compileOpdrug = () => {
  const json = JSON.stringify(opdrug.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'opdrug.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create opop schema json
const compileOpop = () => {
  const json = JSON.stringify(opop.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'opop.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create ipd schema json
const compileIpd = () => {
  const json = JSON.stringify(ipd.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'ipd.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create ipdx schema json
const compileIpdx = () => {
  const json = JSON.stringify(ipdx.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'ipdx.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create ipop schema json
const compileIpop = () => {
  const json = JSON.stringify(ipop.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'ipop.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create ipop schema json
const compileIpdrug = () => {
  const json = JSON.stringify(ipdrug.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'ipdrug.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create chronic schema json
const compileChronic = () => {
  const json = JSON.stringify(chronic.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'chronic.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create appoint schema json
const compileAppoint = () => {
  const json = JSON.stringify(appoint.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'appoint.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

// create lab schema json
const compileLab = () => {
  const json = JSON.stringify(lab.valueOf(), undefined, 2);
  const outPath = path.join(outDir, 'lab.json');

  fs.writeFileSync(outPath, json, 'utf8');
}

createFolder();
// compile json
compilePerson();
compileOpd();
compileOpdx();
compileOpop();
compileOpdrug();
compileIpd();
compileIpdx();
compileIpop();
compileLab();
compileAppoint();
compileChronic();
