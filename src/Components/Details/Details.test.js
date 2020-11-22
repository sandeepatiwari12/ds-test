import React from "react";
import Details from "./index";
import { render } from "@testing-library/react";
const data = require("../../../public/apartmentData.json");

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Details details={data.list[0]} />, div);
});
