import { Route, Routes } from 'react-router-dom';
import "./App.css";

// Importacion de Pages
import Home from "./pages/Home/Home";

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>)
}

export default App;
