import { Routes,Route} from "react-router-dom";
import './App.css';
import Pay from "./Pay.jsx";
import Success from "./Success.jsx";

function App() {
  return (
    // <div className="App">
    //    <Link to="/Pay.jsx">Pay</Link> |{" "}
    //     <Link to="/Success">Success</Link>
    // </div>

    <Routes>
        <Route path="/Pay" element={<Pay/>}> </Route>
        <Route path="/Success" element={<Success/>}></Route>

        
    </Routes>
  );
}

export default App;
