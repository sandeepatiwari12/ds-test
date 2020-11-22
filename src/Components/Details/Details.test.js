import React from "react";
import Details from "./index";
import { render, cleanup } from "@testing-library/react";
const data = require("../../../public/apartmentData.json");

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Details details={data.list[0]} />, div);
});
