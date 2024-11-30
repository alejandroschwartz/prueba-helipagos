describe('Test suite', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/person')
  });

  it('Validar pagina de listar personas', () => {
    cy.contains('h1', 'Lista de Personas')
  });

  it('Validar filtro de listar personas por nombre y traer Luke', () => {
    // buscar un elemento input type text con un placeholder que contenga "Buscar por nombre"
    cy.get('input[placeholder="Buscar por nombre"]').type('Luke')
    // buscar un elemento button con un texto que contenga "Buscar"
    cy.get('button').contains('Buscar').click()
    // validar que traiga un elemento td que contenga "Luke"
    cy.get('td').contains('Luke Skywalker')
    cy.get('td').contains('172')
    cy.get('td').contains('77 kg')
    cy.get('a').contains('Ver detalles')
    // validar que no traiga un elemento td que contenga "Darth Vader"
    cy.get('td').should('not.contain', 'Darth Vader')
  });

  it('Validar ingresar al detalle, personById de Darth Vader', () => {
    // Interceptar la solicitud de red
    cy.intercept('GET', 'https://swapi.dev/api/people/').as('getPeople')
    cy.get('input[placeholder="Buscar por nombre"]').type('Darth Vader')
    cy.get('button').contains('Buscar').click()
    // Esperar a que la solicitud de red se complete
    cy.wait('@getPeople')
    // Validar que el enlace "Ver detalles" correspondiente a "Darth Vader" esté visible antes de hacer clic
    cy.contains('tr', 'Darth Vader').within(() => {
      cy.get('a').contains('Ver detalles').should('be.visible').click()
    })
    // Validar que la página de detalles contiene "Darth Vader"
    cy.contains('b', 'Nombre:')
    cy.contains('p', 'Darth Vader')
  });

  it('Validar ingresar al detalle de una persona y luego volver al listado', () => {
    cy.visit('http://localhost:3000/person/5')
    cy.get('a').contains('Volver a la lista de Personas').click()
    cy.contains('h1', 'Lista de Personas')
  });

});