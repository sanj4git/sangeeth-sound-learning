import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Learn from "./pages/Learn";
import Play from "./pages/Play";

function App(){

  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />}/>
          <Route path="/learn" element={<Learn/>}/>
          <Route path="/play" element={<Play/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )

}

export default App;