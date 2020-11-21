import React, { Fragment } from "react";

// for redux store
import { Provider } from "react-redux";
import store from "./Redux/store";

// theme & theme provider
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "./theme/GlobalStyle";

// components
import Header from "./Components/Header";
import Landing from "./Components/Landing";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Fragment>
            <Header />
            <Landing />
          </Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
