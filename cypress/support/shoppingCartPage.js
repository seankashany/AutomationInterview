// shoppingCartPage.js

class ShoppingCartPage {
  constructor() {
     this.cartCountLabel = 'span[id="sc-subtotal-label-buybox"]';
     this.cartTotalPrice = 'span[class="a-size-medium a-color-base sc-price sc-white-space-nowrap"]';
     this.addOneMoreButten = 'button[aria-label="Increase quantity by one"]';
     this.expectedPrice = 49;
     this.deleteButten = 'input[data-feature-id="item-delete-button"]';
}

  verifyCartItemCount(expectedCount) {
    cy.get(this.cartCountLabel).should('include.text', expectedCount);
  }

    verifyFreeShiping() {
    return cy.get(this.cartTotalPrice)
        .invoke('text')
        .then((text) => {
        const numericPrice = parseFloat(text.replace(/[^0-9.]/g, ''));
        return numericPrice >= this.expectedPrice;
        });
    
}

    addItemMultipleTimes(times) {
    for (let i = 0; i < times; i++) {
        cy.get(this.addOneMoreButten).last().click();
        cy.wait(200);
    }
    }

    DeleteTheCart() {
    cy.get('body').then(($body) => {
    if ($body.find(this.deleteButten).length > 0) {
      cy.get(this.deleteButten).first().click();

      cy.wait(300); // Allow time for DOM update (tweak as needed)
      this.DeleteTheCart(); // Recursively delete next item
    } else {
      cy.log('All delete buttons clicked');
    }
  });
}
}

export default ShoppingCartPage;
