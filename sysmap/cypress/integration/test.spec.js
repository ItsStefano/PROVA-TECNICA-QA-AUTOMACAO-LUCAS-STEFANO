import SearchProduct from '../pages/SearchProduct';
import ProductCart from '../pages/ProductCart';
require("cypress-xpath");

describe('Add and Validate an Amazon Product to Cart', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });

    before('Visit Amazon website', function () {
        SearchProduct.goEcommerce('Olá')
    })

    it('Search for a product', function () {
        SearchProduct.seachItem('Notebook Acer')
        SearchProduct.searchButton()
    })

    it('Access the chosen product and add it to the cart', function () {
        ProductCart.foundProduct('Notebook Gamer Acer Nitro AN515-43-R9K7 AMD Ryzen 5 8GB RAM, 1TB + 256SSD Placa de Vídeo NVIDIA GeForce GTX 1650')
        ProductCart.addCart()
        ProductCart.inspect()
        ProductCart.goToCart()
    })

    it('Validate the chosen product in the cart', function () {
        ProductCart.validadeProduct('Notebook Gamer Acer Nitro AN515-43-R9K7 AMD Ryzen 5 8GB RAM, 1TB + 256SSD Placa de Vídeo NVIDIA GeForce GTX 1650')
    })

})