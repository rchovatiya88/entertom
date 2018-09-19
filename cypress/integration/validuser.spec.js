describe ('Go to the Home Page', () => {
    it('Home Page should open and validate title', () => {
        cy.visit('https://test-trading.entrex.tzero.com')
        cy.title().should('include', 'ENTREX' )
    })
    it ('1. Feature Login - A valid user is able to login into the application', () => {
        cy.get('#email-input').type('rchovatiya88@gmail.com')
        cy.get('#password-input').type('Password01')
        cy.get('#login-user-btn').click();
    })

   

    it ('2. Feature Homepage - Once logged in, Homepage should be visible and all elements should be rendered.', () =>{
        cy.get('#profile-panel > div.panel-body.dark-mode > div:nth-child(2) > div.mini-data-title').contains('CASH BALANCE'); // Validate CASH Balance
        cy.get('#show-symbol-search-btn').click()
        cy.get('#symbol-search-box > input').type('BKLN')
        cy.get('#symbol-search-results > :nth-child(1) > .btn').click()
    })

    it ('3. Feature - Mobile View, A  user is able to acces the application via mobile screen size.', () => {
        cy.viewport(550,750)
        cy.viewport('iphone-6')
        cy.get('#trading > div > div.mobile-nav > ul > li.active > a').click()
        cy.get('#trading > div > div.mobile-nav > ul > li:nth-child(2) > a').click()
        cy.get('#trading > div > div.mobile-nav > ul > li:nth-child(3) > a').click()   
        cy.get('#navbar > div.container-fluid > div.navbar-header > button').click()  
        cy.get('#logout-user-btn').click();   
    })



  

    
    // it ('User Logout', () => {
    //     cy.get('#logout-user-btn').click();
    // })

})