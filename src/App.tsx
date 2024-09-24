import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from './components/LoginScreen/LoginScreen.tsx';
import Desktop from "../src/components/Desktop/Desktop.tsx";

import './App.css'
import Provider from "./components/Context/Provider";

function App() {

  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          {/* <Route path="/" element={<LoginScreen />} />
          <Route path="/desktop" element={<Desktop />} /> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App