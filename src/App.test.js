import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe("basic", () => {
//   it("renders without crashing", () => {
//     cy.visit("/");
//   });

//   it("should navigate to August", () => {
//     cy.visit("/");

//     cy.contains("[data-testid=month]", "August")
//       .click()
//       .should("have.class", "month--selected");
//   });
// });
