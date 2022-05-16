const el = require('./elements').elements;
class ProductCart {

    //This elements found the chosen product in Amazon store
    foundProduct(product) {
        cy.xpath(el.productChosen)
            .should(el.visible, product)
            .click()
    }

    //This element is necessary to add the product in the cart
    addCart() {
        cy.get(el.addCart)
            .click()
    }

    //Here we inspect if the product was add in the cart and if the message of confirmation element is present
    inspect() {
        cy.get(el.alert)
            .should(el.visible, 'Adicionado ao carrinho')
    }

    //This element go to the cart
    goToCart() {
        cy.contains(el.goCart, 'Ir para o carrinho')
            .click()
    }

    //Here we inspect if the product was in the cart, the validation is in the name and the code of the product
    validadeProduct(product) {
        cy.get(el.productId)
            .should(el.visible, product)
    }

}

export default new ProductCart