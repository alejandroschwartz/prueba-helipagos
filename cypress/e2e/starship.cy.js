describe('Test suite', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/starship')
  });

  it('Validar pagina de listar naves', () => {
    cy.contains('h1', 'Lista de Naves')
  });

  it('Validar filtro de listar naves por nombre y traer Death Star', () => {
    // buscar un elemento input type text con un placeholder que contenga "Buscar por nombre"
    cy.get('input[placeholder="Buscar por nombre"]').type('Death Star')
    // buscar un elemento button con un texto que contenga "Buscar"
    cy.get('button').contains('Buscar').click()
    // validar que traiga un elemento td que contenga "Death Star"
    cy.get('td').contains('Death Star')
    cy.get('td').contains('Imperial Department of Military Research, Sienar Fleet Systems')
    cy.get('td').contains('120000 m')
    cy.get('a').contains('Ver detalles')
    // validar que no traiga un elemento td que contenga "Death Star"
    cy.get('td').should('not.contain', 'Star Destroyer')
  });

  it('Validar ingresar al detalle, starshipById de Death Star', () => {
    // Interceptar la solicitud de red
    cy.intercept('GET', 'https://swapi.dev/api/starships/').as('getStarship')
    cy.get('input[placeholder="Buscar por nombre"]').type('Death Star')
    cy.get('button').contains('Buscar').click()
    // Esperar a que la solicitud de red se complete
    cy.wait('@getStarship')
    // validar que traiga un elemento a que contenga "ver detalles" y hacer click
    cy.contains('tr', 'Death Star').within(() => {
      cy.get('a').contains('Ver detalles').should('be.visible').click()
    })
    cy.contains('b', 'Nombre:')
    cy.contains('p', 'Death Star')
  });

  it('Validar ingresar al detalle de una nave y luego volver al listado', () => {
    cy.visit('http://localhost:3000/starship/9')
    cy.get('a').contains('Volver a la lista de Naves').click()
    cy.contains('h1', 'Lista de Naves')
  });

});