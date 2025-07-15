class MainPage {
  constructor() {
    this.locationButton = 'a[id="nav-global-location-popover-link"]';
    this.countryDropdownButton = 'span[id="GLUXCountryListDropdown"]';
    this.hongKongButton = 'a[id="GLUXCountryList_103"]';
    this.cartCountLabel = 'span[id="sc-subtotal-label-buybox"]';
    this.cartLink = 'a[id="nav-cart"]';
    this.navMenuItems = '.nav-li';
  }

  ChengeContry() {
    cy.visit('/');
    cy.get(this.locationButton).click();
    cy.get(this.countryDropdownButton).wait(1000).click();
    cy.get(this.hongKongButton).focus().click();
  }

  goToCart() {
    cy.get(this.cartLink).click();
  }

  verifyMainMenuText(expectedMenuTexts) {
    cy.get(this.navMenuItems).each((item, index) => {
      cy.wrap(item).should('have.text', expectedMenuTexts[index]);
    });
  }
}

export default MainPage;