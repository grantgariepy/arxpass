
import { render } from "react-dom";
import { MetamaskStateProvider } from "use-metamask";

import Home from "./pages";
import App from "./App";


const rootElement = document.getElementById("root");
render(
  
    <MetamaskStateProvider>
      <App />
    </MetamaskStateProvider>
  
    , rootElement);
