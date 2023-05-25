import "./App.css";
import { Route,Routes } from "react-router-dom";
import MainLayout from "Layout/MainLayout";
import Home from "./components/Home";
import Market from "./components/Market";
function App() {
 
  return (
    // <div className="App">
    //   <header className="App-header">
     
    //     <Counter className="count" name={name} ></Counter>
    //     <CounterStyled   name={name} ></CounterStyled>

    //     <Button  onClick={()=>setName("Bao2k1")}>Change name</Button>
    //   </header>
    // </div>
    <MainLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
          </Routes>
    </MainLayout>
    
  );
}

export default App;
