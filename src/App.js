import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import UploadTrainingImages from "./components/UploadTrainingImages";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="create" element={< UploadTrainingImages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
