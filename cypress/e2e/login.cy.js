
describe('Login',()=>{
    beforeEach (()=>{
        cy.visit('/');
    })
    it('Login with incorrect email', ()=> {
        cy.login('something','other');              // llamo al comando login dentro del archivo login.js
         cy.fixture('login').then((login)=>{        // obtengo el json de login.json   
             cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
         })  

    })
})