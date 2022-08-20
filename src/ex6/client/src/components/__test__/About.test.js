import React, { useState } from "react";
import renderer from "react-test-renderer";

import About from "../About";

test("render the About Component", () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
