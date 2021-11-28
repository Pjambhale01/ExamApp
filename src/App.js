import React from "react";
import Landingpage from "./Component/Landingpage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Testpage from "./Component/Testpage";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { reducer } from "./Component/reducer";
import { Resultpage } from "./Component/Resultpage";

function App() {
  const initvalue = {
    TestDetails:[],
    userAns:[],
    radioAns:[],
    checkBoxAns:[],
    correctRadioAns:[],
    wrongAns:[]
  };
  
  const store = createStore(reducer, initvalue, composeWithDevTools());

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/Result" component={Resultpage} />
            <Route exact path="/" component={Landingpage} />
            <Route path="/:path" component={Testpage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
