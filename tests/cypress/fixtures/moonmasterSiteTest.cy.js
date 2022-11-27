const { expect } = require("chai");

describe('empty spec', () => {
  ["https://moonmaster.github.io/DemoSimple/v1/index.html",
"https://moonmaster.github.io/DemoSimple/v2/index.html"].forEach((url) =>
  {
    it(`checked test for url: ${url}`,() =>
    {
      cy.visit(url);
      cy.get('button.btn-primary').click();
      cy.on('window:alert',(str) => {
        expect(str).to.equal('Primary button pressed');
    })
    cy.on('window:alert',()=> true);
    })
  })
});