const esbuild = require('esbuild');
const path = require('path');
const { readFile, writeFile, copyFile } = require('fs/promises');  
const { ncp } = require('ncp');

const publicHTML = path.resolve(__dirname, 'public/index.html');
const distHTML = path.resolve(__dirname, 'dist/index.html');
const srcImg = path.resolve(__dirname, 'src/img');
const srcDest = path.resolve(__dirname, 'dist/img');

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  outdir: 'dist',
  banner: `/** 
    * Hi!, this code is for dolar_to_bs v2 
    * @author alejooroncoy <adoa2705@gmail.com>
  */`,
  target: [
    'es2020',
    'chrome58',
    'firefox57',
    'safari11',
    'edge16',
  ],
})
.then(() => readFile(publicHTML, 'utf-8'))
.then((codeHTML) => {
  const [initHTML, finishHTML] = codeHTML.split('<!-- Links -->');
  const resolve = '<link rel="stylesheet" href="index.css"/>';
  const htmlResolve =  initHTML.concat(resolve, finishHTML).replace('/src/index.js', './index.js');
  const [newInitHTML, newFinishHTML] = htmlResolve.split('<link rel="shortcut icon" href="/src/img/icon-dolarbs.png" type="image/x-icon"');
  const images = '<link rel="shortcut icon" href="./img/icon-dolarbs.png" type="image/x-icon"';
  return Promise.resolve(newInitHTML.concat(images, newFinishHTML));
})
.then((codeHTMLResolve) => writeFile(distHTML, codeHTMLResolve))
.then(() => {
  return Promise.resolve(ncp(srcImg, srcDest, (err) => {
    if (err) {
      return console.error(err);
    }
  }));
})
.then(() => {
  console.log('Ready');
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});