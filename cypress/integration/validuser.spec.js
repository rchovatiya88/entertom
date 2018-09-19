describe ('Go to the Login Page', () => {
    it('it should show login page', () => {
        cy.visit('https://test-trading.entrex.tzero.com')
        cy.title().should('include', 'ENTREX' )
    })
})