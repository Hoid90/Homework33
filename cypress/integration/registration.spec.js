describe('User needs to', () => {
let user;

    before(function () {
        cy.task("freshUser").then((freshUser) => {
            user = freshUser;
        });
    });

    it('sign up with faker', () => {
        cy.visit('https://cirosantilli-realworld-next.herokuapp.com/');
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type(user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password);
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').should('contain', user.username.toLowerCase());   
      })
    })
