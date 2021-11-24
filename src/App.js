import React from "react";
import Landingpage from "./Component/Landingpage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Testpage from "./Component/Testpage";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { reducer } from "./Component/reducer";

function App() {
  
  const initvalue = {
    TestDetails:[],
  };

  const store = createStore(reducer, initvalue, composeWithDevTools());

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route path="/testpage" component={Testpage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
