import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";
import './styles.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";


function App() {
  const location = useLocation();
  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "Shabnam, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
          <CssBaseline />
          {location.pathname === '/' ? <HomePage /> : (
            <>
              <NavBar />
              <Container maxWidth='xl' sx={{ mt: 3 }}>
                <Outlet />
              </Container>
            </>
          )}
        </Box>
      </div>
    </ThemeProvider>


  )
}

export default App
