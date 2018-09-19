describe ('Go to the Home Page', () => {
    it('Home Page should open and validate title', () => {
        cy.visit('https://test-trading.entrex.tzero.com')
        cy.title().should('include', 'ENTREX' )
    })
    it ('4. Feature InvalidLogin - A invalid user is not able to login into the application', () => {
        cy.get('#email-input').type('johndoe@gmail.com')
        cy.get('#password-input').type('Password01')
        cy.get('#login-user-btn').click();
        cy.get('#form-alert').contains('Invalid username and password. Please try again.')
    })

    it('5. Feature Forgot password link - A valid user should be able to request for a new password incase they need to reset their password.', () => {
        cy.get('#forgot-password-container').click();
        cy.get('#email-input').type('testtest@test.com')
        cy.get('#request-reset-btn').click();
        cy.get('.s-alert-box-inner');
    })
 
})
