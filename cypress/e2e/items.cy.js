describe('Gestion des items après connexion', () => {
    const baseUrl = 'http://localhost:3000/login';
  
    beforeEach(() => {
      cy.visit(baseUrl);
  
      // Connexion avant chaque test
      cy.get('input[name="username"]').type('admin');
      cy.get('input[name="password"]').type('123456');
      cy.get('button[type="submit"]').click();
  
      // Vérifie qu’on est bien sur le tableau de bord
      cy.contains('Tableau de bord').should('be.visible');
    });
  
    it('Créer un nouvel item', () => {
      cy.get('input[name="title"]').type('Item Cypress');
      cy.get('textarea[name="description"]').type('Description de test');
      cy.get('button[type="submit"]').contains('Ajouter').click();
  
      cy.contains('Item Cypress').should('exist');
    });
  
    it('Modifier un item', () => {
      // Crée un item d’abord
      cy.get('input[name="title"]').type('Item à modifier');
      cy.get('textarea[name="description"]').type('Desc initiale');
      cy.get('button[type="submit"]').contains('Ajouter').click();
  
      // Clique sur modifier
      cy.contains('Item à modifier').parent().find('button.edit').click();
  
      // Modifie le titre
      cy.get('input[name="title"]').clear().type('Item modifié');
      cy.get('button[type="submit"]').contains('Modifier').click();
  
      cy.contains('Item modifié').should('exist');
    });
  
    it('Supprimer un item', () => {
      // Crée un item d’abord
      cy.get('input[name="title"]').type('Item à supprimer');
      cy.get('textarea[name="description"]').type('Desc');
      cy.get('button[type="submit"]').contains('Ajouter').click();
  
      // Supprime l’item
      cy.contains('Item à supprimer').parent().find('button.delete').click();
  
      cy.contains('Item à supprimer').should('not.exist');
    });
  });
  