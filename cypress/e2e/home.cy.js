describe('Test suite', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Validar pagina de inicio', () => {
    cy.contains('h1', 'Bienvenidos la aplicación de Star Wars para prueba de Helipagos.')
  });

  it('Validar componente del footer y link', () => {
    cy.contains('p', 'Creado por')
    cy.contains('a', 'alejandroschwartz.com.ar')
  });

  it('Validar link de Ver mas en card de Listado de personajes', () => {
    cy.get('a').contains('VER PERSONAJES').click()
    cy.contains('h1', 'Lista de Personas')
  });

  it('Validar link de Ver mas en card de Listado de planetas', () => {
    cy.get('a').contains('VER PLANETAS').click()
    cy.contains('h1', 'Lista de Planetas')
  });

  it('Validar link de Ver mas en card de Listado de naves', () => {
    cy.get('a').contains('VER NAVES').click()
    cy.contains('h1', 'Lista de Naves')
  });

});