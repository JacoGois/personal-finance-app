import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Components/AppRoutes";
import { ThemeProvider } from "./Contexts/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
