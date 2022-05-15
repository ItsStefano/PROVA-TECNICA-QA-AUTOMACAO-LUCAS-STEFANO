class ProductCart {

    //This elements found the chosen product in Amazon store
    foundProduct(product) {
        cy.xpath('//div[@class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style"]//h2//a//span[text()="Notebook Gamer Acer Nitro AN515-43-R9K7 AMD Ryzen 5 8GB RAM, 1TB + 256SSD Placa de Vídeo NVIDIA GeForce GTX 1650"]')
            .should('be.visible', product)
            .click()
    }

    //This element is necessary to add the product in the cart
    addCart() {
        cy.get('[name="submit.add-to-cart"]')
            .click()
    }

    //Here we inspect if the product was add in the cart and if the message of confirmation element is present
    inspect() {
        cy.get('.a-size-medium-plus')
            .should('be.visible', 'Adicionado ao carrinho')
    }

    //This element go to the cart
    goToCart() {
        cy.contains('[class="a-button-text"]', 'Ir para o carrinho')
            .click()
    }

    //Here we inspect if the product was in the cart, the validation is in the name and the code of the product
    validadeProduct(product) {
        cy.get('[data-asin="B0962CNDGL"]')
            .should('be.visible', product)
    }

}

export default new ProductCart