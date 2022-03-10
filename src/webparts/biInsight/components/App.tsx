import * as React from "react";
import styles from "./App.module.scss";
import { createMuiTheme,  ThemeProvider, Typography } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#003479",
    },
    secondary: {
      main: "#1C75BC",
    },
    
  },
});
const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{padding: "1rem"}}>
      <Typography variant="h5"  color={"primary"} align="center">
        h1. Heading
      </Typography>
      <SearchBar
        onChange={() => console.log("onChange")}
        onRequestSearch={() => console.log("onRequestSearch")}
        style={{
          margin: "0 auto",
          maxWidth: 800
        }}
      />
      </div>
    </ThemeProvider>
  );
};
export default App;
