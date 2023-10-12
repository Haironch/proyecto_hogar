import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Children from "./pages/Children";
import Games from "./pages/Games";
import AdminPanel from "./pages/AdminPanel";
import AdminPanelSelectedChild from "./pages/AdminPanelSelectedChild";
import "./App.css";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

import ProtectcRoute from "./components/ProtectcRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GamesState from "./context/games/State";

function App() {

  return (
    <GamesState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectcRoute>
                <Admin />
              </ProtectcRoute>
            }
          />
          <Route
            path="/admin/panel"
            element={
              <ProtectcRoute>
                <AdminPanel />
              </ProtectcRoute>
            }
          />
          <Route
            path="/admin/panel/:childId"
            element={
              <ProtectcRoute>
                <AdminPanelSelectedChild />
              </ProtectcRoute>
            }
          />
          <Route
            path="/admin/:childId"
            element={
              <ProtectcRoute>
                <Children />
              </ProtectcRoute>
            }
          />
          <Route
            path="/admin/:childId/juego/:gameId"
            element={
              <ProtectcRoute>
                <Games />
              </ProtectcRoute>
            }
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </GamesState>
  );
}

export default App;
