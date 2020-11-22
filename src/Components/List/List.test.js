import React from "react";
import List from "./index";

import { render } from "@testing-library/react";
const data = require("../../../public/apartmentData.json");

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<List data={data} />, div);
});
