import "./App.css";
import { Route,Routes } from "react-router-dom";
import MainLayout from "Layout/MainLayout";
import Home from "./components/Home";
import Market from "./components/Market";
import LoginScreen from "screens/LoginScreen";
import HomeScreen from "screens/HomeScreen";
function App() {
 
//   return (
//     <>
//     <MainLayout>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route path="/market" element={<Market />} />
           
//           </Routes>
//     </MainLayout>
//     <div>

//     <Routes>
//       <Route path="/login" element={<LoginScreen />} />
//     </Routes>
   
//     </div>
          
           
//     </>
//   );
// }
return (
  <Routes>
      <Route
        path="*"
        element={
          <HomeScreen/>
        }
      />

      <Route path="/login" element={<LoginScreen />} />
    </Routes>

);

      }

export default App;
