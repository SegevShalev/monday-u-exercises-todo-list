describe("Add Todo Action", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should add a new todo", () => {
    // TODO: fill this test

    cy.get(".TodoList_title__XX0Ta").should("be.visible");
    cy.wait(1000);
    cy.get(".TodosHeader_inputHeader__fWyos  ").type("do cypress testing!");
    cy.get(".TodosHeader_addBtn__YiJSC").click();
    cy.contains("do cypress testing!");
    /* cy.get('.ytd-video-renderer').contains("Harry Potter VS Star Wars")
    cy.get('.ytd-video-meta-block').contains("33M views") */
  });
});
