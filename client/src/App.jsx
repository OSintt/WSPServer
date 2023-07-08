import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, SingleBot, Home, TopBar, Auth } from "./pages";
import { Box } from "@mui/material";
import "./index.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div className="app-container">
        <TopBar />
        <Navbar />
        <div className="container">
          <Auth />
          <Box sx={{ paddingLeft: 33, paddingRight: 1.5, py: 7 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bots/:id" element={<SingleBot />} />
            </Routes>
          </Box>
        </div>
        <Toaster
          toastOptions={{
            style: {
              borderRadius: "50px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
