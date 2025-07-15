describe('First spec', () => {

  it('First Test', () => {
    cy.visit('/')
   
    cy.fixture('DataSets').then((data) => {
      
      cy.get('.nav-li')
        .each((item, index) => {
          cy.wrap(item).should('have.text', data.expextedMianMenuText[index]);
      });
    });
    cy.findByText('Customer Service').click()
    cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}')
    cy.contains('a', "Where's My Stuff?").click()
    cy.contains('h1', "Where's My Stuff?").should('exist')
  })
})