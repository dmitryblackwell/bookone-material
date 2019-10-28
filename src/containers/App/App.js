import React from "react";
import "./App.css";
import BookShelf from "../BookShelf/BookShelf";
import MenuLayout from "../../components/navigation/MenuLayout/MenuLayout";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff5131',
      main: '#d50000',
      dark: '#9b0000',
      contrastText: '#ffffff',
    },
  },
});


function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <MenuLayout>
          <BookShelf />
        </MenuLayout>
      </MuiThemeProvider>
  );
}

export default App;
