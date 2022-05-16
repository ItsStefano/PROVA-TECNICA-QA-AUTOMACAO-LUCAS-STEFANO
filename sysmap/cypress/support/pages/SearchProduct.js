const el = require('./elements').elements;
class SearchProduct {

    //This is the beginning, here we go to the Amazon website and validate if we are in
    goEcommerce() {
        cy.visit('/');
        cy.get(el.checkPoint)
            .contains(el.checkLogo);
    }

    //This element clicks in the search field and insert the name of the product that we want
    seachItem(product) {
        cy.xpath(el.searchField)
            .type(product)
    }

    //Here we click in the search button
    searchButton() {
        cy.get(el.searchButton)
            .click()
    }

}

export default new SearchProduct;