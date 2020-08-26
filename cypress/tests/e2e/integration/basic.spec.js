describe("basic", () => {
  it("renders without crashing", () => {
    cy.visit("/");
  });

  it("should navigate to August", () => {
    cy.visit("/");

    cy.contains("[data-testid=month]", "August")
      .click()
      .should("have.class", "month--selected");
  });
});
