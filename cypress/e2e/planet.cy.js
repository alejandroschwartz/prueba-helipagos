describe('Test suite', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/planet')
  });

  it('Validar pagina de listar planetas', () => {
    cy.contains('h1', 'Lista de Planetas')
  });

  it('Validar filtro de listar planeta por nombre y traer Alderaan', () => {
    // buscar un elemento input type text con un placeholder que contenga "Buscar por nombre"
    cy.get('input[placeholder="Buscar por nombre"]').type('Alderaan')
    // buscar un elemento button con un texto que contenga "Buscar"
    cy.get('button').contains('Buscar').click()
    // validar que traiga un elemento td que contenga "Alderaan"
    cy.get('td').contains('Alderaan')
    cy.get('td').contains('12500 km')
    cy.get('td').contains('2000000000')
    cy.get('a').contains('Ver detalles')
    // validar que no traiga un elemento td que contenga "Dagobah"
    cy.get('td').should('not.contain', 'Dagobah')
  });

  it('Validar ingresar al detalle, planetById de Dagobah', () => {
    // Interceptar la solicitud de red
    cy.intercept('GET', 'https://swapi.dev/api/planets/').as('getPlanet')
    cy.get('input[placeholder="Buscar por nombre"]').type('Dagobah')
    cy.get('button').contains('Buscar').click()
    // Esperar a que la solicitud de red se complete
    cy.wait('@getPlanet')
    // validar que traiga un elemento a que contenga "ver detalles" y hacer click
    cy.contains('tr', 'Dagobah').within(() => {
      cy.get('a').contains('Ver detalles').should('be.visible').click()
    })
    cy.contains('b', 'Nombre:')
    cy.contains('p', 'Dagobah')
  });

  it('Validar ingresar al detalle de un planeta y luego volver al listado', () => {
    cy.visit('http://localhost:3000/planet/9')
    cy.get('a').contains('Volver a la lista de Planetas').click()
    cy.contains('h1', 'Lista de Planetas')
  });

});