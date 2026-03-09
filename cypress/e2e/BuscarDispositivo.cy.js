/// <reference types="cypress" />
describe('Buscar dispositivo', () => {
  it('Deve buscar um dispositivo com sucesso', () => {
    //Exemplo de uma Requisição GET 
    cy.request({
      method: 'GET',
      url: 'https://api.restful-api.dev/objects/1',

    }).then((response) => {
      expect(response.body.name).to.equal("Google Pixel 6 Pro");
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal('1');
      /* Outra forma
      expect(response.body).to.have.property('name', "Google Pixel 6 Pro");
      expect(response.body).to.have.property('id', '1');
      */
    })

  })

  it.only('Cadastrar novo dispositivo',()=>{
    cy.request({

      method: 'POST',
      url: 'https://api.restful-api.dev/objects',
      body:{
        "name": "PC de pablo",
        "data":{
          "year": 2020,
          "price": 5000.99,
          "Cpu Model":"Intel Core i7",
          "Hard disk size": "1TB"
        }
      }
    }).then((response)=>{
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal("PC de pablo");
      expect(response.body.data.year).to.equal(2020);
      expect(response.body.data.price).to.equal(5000.99);
      expect(response.body.data["Cpu Model"]).to.equal("Intel Core i7");
      expect(response.body.data["Hard disk size"]).to.equal("1TB");
      
    })




  })
})