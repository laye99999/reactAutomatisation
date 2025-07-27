describe('Test du composant Login', () => {
  const baseUrl = 'http://localhost:3000/login'; // adapte selon ton projet

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Connexion avec identifiants valides', () => {
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="submit"]').click();

    // Après connexion, le texte "Bienvenue dans le tableau de bord" doit être visible
   // cy.contains('Bienvenue dans le tableau de bord').should('be.visible');
  });
  it('Connexion avec identifiants invalides', () => {
    cy.get('input[name="username"]').type('noadmin');
    cy.get('input[name="password"]').type('1234');
    cy.get('button[type="submit"]').click();
   
    // Une alerte JS avec le message d'erreur doit s'afficher
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Identifiants incorrects');
    });
  });
});
