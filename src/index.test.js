import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () =>{
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  // Define a done arg for asynchrouness.
  it('should say users', (done) => {
    // Get the html page into a constant.
    const index = fs.readFileSync('./src/index.html', "utf-8");
    // Pass the dom into the jsdom function.
    jsdom.env(index, function (err, window){
      // Get the first heading element rendered.
      const h1 = window.document.getElementsByTagName('h1')[0];
      // Write the test
      expect(h1.innerHTML).to.equal("Users");
      // When the page anynchrounously loaded
      done();
      // Finish the test
      window.close();
    });
  });
});
