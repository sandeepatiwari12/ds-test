import React, { Fragment } from "react";

// for react router
import { BrowserRouter as Router, Route } from "react-router-dom";

// for redux store
import { Provider } from "react-redux";
import store from "./Redux/store";

// theme & theme provider
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import GlobalStyle from "./theme/GlobalStyle";

// components
import Header from "./Components/Header";
import Landing from "./Components/Landing";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Fragment>
            <Header />
            <Route exact path='/' component={Landing} />
          </Fragment>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
