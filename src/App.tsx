import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from './components/LoginScreen/LoginScreen';
import Desktop from "./components/desktop/Desktop";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App