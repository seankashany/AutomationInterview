class ItemsPage {
  constructor() {


    this.addToCartButton = 'input[id="add-to-cart-button"]';
    this.cartLink = '#nav-cart';
    this.itemTitle = '.item-title';
    this.successMessage = '.cart-message';
  }


  addItemToCartAndVerify() {
    cy.get(this.addToCartButton).click();
    cy.findByText('Added to cart').should('exist')
  }
  
}

export default ItemsPage;
