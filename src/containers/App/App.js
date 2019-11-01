import React from "react";
import "./App.css";
import BookShelf from "../BookShelf/BookShelf";
import MenuLayout from "../../components/navigation/MenuLayout/MenuLayout";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Registration from "../Registration/Registration";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#819ca9",
      main: "#546e7a",
      dark: "#29434e",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff5131",
      main: "#d50000",
      dark: "#9b0000",
      contrastText: "#ffffff"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <MenuLayout>
          <Switch>
            <Route path="/books" exact component={BookShelf} />
            <Route path="/registration" exact component={Registration} />
            <Redirect to="/books" from="/" exact />
          </Switch>
        </MenuLayout>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
