import { Router } from "./router";

import { useTheme } from "./hooks";

import { Header } from "./components";

import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
    </ThemeProvider>
  )
}

export default App;
