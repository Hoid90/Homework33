describe('User needs to', () => {
    it('log into his account', () => {
    cy.visit('https://cirosantilli-realworld-next.herokuapp.com/');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('mburyak@at.com');
    cy.get(':nth-child(2) > .form-control').type('qwerty');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'mburyak1')
    })
  })  
