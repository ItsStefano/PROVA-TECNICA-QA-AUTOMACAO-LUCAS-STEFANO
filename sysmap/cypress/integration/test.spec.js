import searchProduct from '../support/pages/SearchProduct';
import productCart from '../support/pages/ProductCart';
require("cypress-xpath");

describe('Add and Validate an Amazon Product into Cart', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });

    before('Visit Amazon website', function () {
        searchProduct.goEcommerce()
    });

    beforeEach(function () {
        cy.fixture('validation').then((validation) => {
            this.validation = validation;
        })
    })

    it('Search for a product', function () {
        searchProduct.seachItem(this.validation.test.searchProduct)
        searchProduct.searchButton()
    });

    it('Access the chosen product and add it to the cart', function () {
        productCart.foundProduct(this.validation.test.product)
        productCart.addCart()
        productCart.inspect()
        productCart.goToCart()
    });

    it('Validate the chosen product in the cart', function () {
        productCart.validadeProduct(this.validation.test.product)
    });

})