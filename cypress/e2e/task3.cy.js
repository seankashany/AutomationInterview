import ShoppingCartPage from '../support/shoppingCartPage'
import ItemsPage from '../support/ItemsPage'
import MainPage from '../support/mainPage';
describe('First spec', () => {

  const CartPage = new ShoppingCartPage
  const mainPage = new MainPage
  const items = new ItemsPage
  
  let testData;
 
  

  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.fixture('DataSets').then((data) => {
    testData = data;
   });
    mainPage.ChengeContry();
  });

  beforeEach(() => {
     cy.visit('/')
     cy.get(testData.homePageSearchBar).type('Bostitch ' + testData.pencilSharpener + '{enter}')
     cy.findAllByText(testData.pencilSharpener).first().click()
     items.addItemToCartAndVerify()
     cy.visit(testData.scissorsURL)
     cy.get('span[id="color_name_5-announce"]').first().siblings('input').click()
     cy.get('span[id=' + testData.scissorsColorsId + ']').should('have.text', testData.scissorsExpectedColor)
     items.addItemToCartAndVerify();
     mainPage.goToCart();
     CartPage.verifyCartItemCount(2);
  });

  afterEach(() => {
    mainPage.goToCart();
    CartPage.verifyFreeShiping().should('be.false');
    CartPage.addItemMultipleTimes(3);
    CartPage.verifyFreeShiping().should('be.true');
    CartPage.DeleteTheCart();
  })



  it('Test 1', () => {
      mainPage.verifyMainMenuText(testData.expextedMianMenuText)
       cy.findByText('Customer Service').click();
       cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}');
       cy.contains('a', "Where's My Stuff?").click();
       cy.contains('h1', "Where's My Stuff?").should('exist');
     })
  });

  it('Test 2', () => {
      mainPage.verifyMainMenuText(testData.expextedMianMenuText)
       cy.findByText('Customer Service').click();
       cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}');
       cy.contains('a', "Where's My Stuff?").click();
       cy.contains('h1', "Where's My Stuff?").should('exist');
     })

  it('Test 3', () => {
      mainPage.verifyMainMenuText(testData.expextedMianMenuText)
       cy.findByText('Customer Service').click();
       cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}');
       cy.contains('a', "Where's My Stuff?").click();
       cy.contains('h1', "Where's My Stuff?").should('exist');
     })

  it('Test 4', () => {
      mainPage.verifyMainMenuText(testData.expextedMianMenuText)
       cy.findByText('Customer Service').click();
       cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}');
       cy.contains('a', "Where's My Stuff?").click();
       cy.contains('h1', "Where's My Stuff?").should('exist');
     })

  it('Test 5', () => {
      mainPage.verifyMainMenuText(testData.expextedMianMenuText)
       cy.findByText('Customer Service').click();
       cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}');
       cy.contains('a', "Where's My Stuff?").click();
       cy.contains('h1', "Where's My Stuff?").should('exist');
     })

  it('Test 6', () => {
      mainPage.verifyMainMenuText(testData.expextedMianMenuText)
       cy.findByText('Customer Service').click();
       cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}');
       cy.contains('a', "Where's My Stuff?").click();
       cy.contains('h1', "Where's My Stuff?").should('exist');
     })

  it('Test 7', () => {
      mainPage.verifyMainMenuText(testData.expextedMianMenuText)
       cy.findByText('Customer Service').click();
       cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}');
       cy.contains('a', "Where's My Stuff?").click();
       cy.contains('h1', "Where's My Stuff?").should('exist');
     })

     it('Test 8', () => {
      mainPage.verifyMainMenuText(testData.expextedMianMenuText)
       cy.findByText('Customer Service').click();
       cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}');
       cy.contains('a', "Where's My Stuff?").click();
       cy.contains('h1', "Where's My Stuff?").should('exist');
     })

     it('Test 9', () => {
      mainPage.verifyMainMenuText(testData.expextedMianMenuText)
       cy.findByText('Customer Service').click();
       cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}');
       cy.contains('a', "Where's My Stuff?").click();
       cy.contains('h1', "Where's My Stuff?").should('exist');
     })

   it('Test 10', () => {
      mainPage.verifyMainMenuText(testData.expextedMianMenuText)
       cy.findByText('Customer Service').click();
       cy.get('input[id="hubHelpSearchInput"]').type('where is my stuff{enter}');
       cy.contains('a', "Where's My Stuff?").click();
       cy.contains('h1', "Where's My Stuff?").should('exist');
     })

