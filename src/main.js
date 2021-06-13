import React from "react";
import ReactDOM from "react-dom";
import cssVars from "css-vars-ponyfill";
import App from "./modules/index";

import { cssRootVars } from "./common/styles/css-vars";
cssVars(cssRootVars);

ReactDOM.render(<App />, document.getElementById("root"));
