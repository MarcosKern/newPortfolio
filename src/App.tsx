import { BrowserRouter, Routes } from "react-router-dom";

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