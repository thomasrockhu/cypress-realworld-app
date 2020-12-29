describe("Auth", () => {
  beforeEach(() => {
    cy.task("db:seed");
  });

  it("redirects visitors to sign in page", () => {
    cy.visit("/personal");
    cy.location("pathname").should("equal", "/signin");
  });

  it("shows an error for invalid user", () => {
    cy.visit("/signin");
    cy.get("#username").type("Unknown user");
    cy.get("#password").type("wrongPassword");
    cy.contains("button", "Sign In").click();
    cy.contains("[data-test=signin-error]", "Username or password is invalid").should("be.visible");
  });
});
