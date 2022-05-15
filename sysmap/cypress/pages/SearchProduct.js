class SearchProduct {

    //This is the beginning, here we go to the Amazon website and validate if we are in
    goEcommerce(confirmWeb) {
        cy.visit('/');
        cy.get('[id=glow-ingress-line1]')
            .contains(confirmWeb);
    }

    //This element clicks in the search field and insert the name of the product that we want
    seachItem(product) {
        cy.xpath('//div[@class="nav-fill"]//div//input[@id="twotabsearchtextbox"]')
            .type(product)
    }

    //Here we click in the search button
    searchButton() {
        cy.get('[id=nav-search-submit-button]')
            .click()
    }

}

export default new SearchProduct;