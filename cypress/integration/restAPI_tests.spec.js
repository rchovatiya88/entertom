describe ('Go to the Home Page', () => {
    it('Home Page should open and validate title', () => {
        cy.visit('https://test-trading.entrex.tzero.com')
        cy.title().should('include', 'ENTREX' )
    })
    it ('1. Feature Login - A valid user is able to login into the application', () => {
        cy.get('#email-input').type('')
        cy.get('#password-input').type('')
        cy.get('#login-user-btn').click();
    })

    it ('6. Api Tests - Validate Rest calls adn endpoints are up and running', () => {
        it('returns JSON', ()=> {
            cy.request('https://test-api.entrex.tzero.com/qtip/api/getTraderBalances')
            .its('body')
            .its('content-type')
            .should('include', 'application/json')
            .expect(200)
        })
    })

});
