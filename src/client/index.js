import React from "react";
import { render } from "react-dom";

import List from "./components/list.jsx";

render(
  <List url="/api/users" />,
  document.getElementById('app')
);

