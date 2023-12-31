import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profle from "./pages/Profile/Profle";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";
function App() {
  const user = useSelector((state) => state.authREducer.authData);
  return (
    <div className="App">
       <div className="blur" style={{top:'-18%', right:"0"}}></div>
       <div  className="blur" style={{top:'36%', left:"-8rem"}}></div>
       <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profle /> : <Navigate to="../auth" />}
        />
         <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

      
      </Routes>
   
    </div>
  );
}

export default App;
