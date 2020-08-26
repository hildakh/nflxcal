describe("Releases", () => {
  beforeEach(() => {
    cy.request("GET", "/api.jsonbin.io/b/5f45f420514ec5112d0e794a");

    cy.visit("/");

    cy.contains("Black");
  });
});
