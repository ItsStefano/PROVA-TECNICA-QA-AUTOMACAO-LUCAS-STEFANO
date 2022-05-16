# Test de automação de um produto específico com Cypress

### O projeto busca exemplificar uma automação com o framework Cypress.

 Os elementos utilizados foram os mais variados possíveis para o fim de demonstrar as formas de encontra-los, quais sejam: `<class>`, `<id>`, `<xpath>`, entre outros.
  
 Para utilizar Xpath, há a necessidade de exportar a bibliotéca do Xpath <require("cypress-xpath");>, pois no Cypress, não há necessidade de utilizar o Xpath, tendo em vista que possui um próprio método de acessar tais elementos.
<--->  
 ## Pré-requisitos
    
    Antes de começar, verifique se você atende aos seguintes requisitos:
    
    * Visual Studio Code
    * Nodejs
    * Criar uma pasta onde será armazenado o seu script
    
 ## Instalação 
    
    Após ter instalado os programas acima você precisará instalar o Cypress:
   
    *Execute o comando <npm init> e responda às perguntas que serão informadas
    >package name: Nome que você quer dar a pasta do seu projeto;
    >version: Versão do seu projeto;
    >description: Descrição do seu projeto;
    >entery point: Utilizado por programadores, pode manter o sugerido;
    >test comand: Deve informar um comando que executará o Cypress, sugiro que utilize <npx cypress open> para abrir o executável;
    >git repository: Caso queira informar seu repositório git;
    >keywords: Pode-se utilizar palavras chaves para encontrar seu projeto, caso esteja na nuvem;
    >author: Pode colocar seu nome próprio;
    >license: Inserir MIT por ser uma licença open source;
    >Digitar yes para confirmar a criação.
    
    * Abra o terminal no diretório criado e execute o comando ``` <npm install cypress --save-dev> ```
    > O <--save-dev> instalará o Cypress localmente como uma dependência de dev para o seu projeto.
  
    * Caso queira, você poderá fazer o <clone> ou Download como zip deste, projeto.
  
 ## O projeto está separado por <elements>, <pages objects>, <fixtures> e o <script>.
  Para validar os <elements> e os <pages objects> basta ir em <../cypress/suport/pages>;
  Quanto ao <script>, basta ir em <../cypress/integration>;
  Os <fixtures> armazenam os <strings>, se encontra em <../cypress/fixtures>
  
 O presente projeto não utilizou cucumber, mas para fim de explicação, caso utilizasse, seria da seguinte forma:
  
  ```
Feature: Seach, add and validate a product

This feature will Add and Validate an Amazon Product into Cart.

Scenario: Add and Validate an Amazon Product into Cart
Given A user opens the browser into Amazon website and
When A user searchfor a product like "Notebook Acer"
And A user chooses the product "Notebook Gamer Acer Nitro AN515-43-R9K7 AMD Ryzen 5 8GB RAM, 1TB + 256SSD Placa de Vídeo NVIDIA GeForce GTX 1650"
Then A user must see the product chosen into his cart
  ```
  
  ###Obrigado pela compreensão! 
