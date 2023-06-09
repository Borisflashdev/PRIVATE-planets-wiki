import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MemberPage from "./pages/MemberPage/MemberPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/member/:id" element={<MemberPage />} />
      </Routes>
    </div>
  );
}

export default App;
