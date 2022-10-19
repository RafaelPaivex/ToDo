//css
import "./App.css";
import Navbar from "./Components/Navbar";

//Router
import { Routes, Route } from "react-router-dom";

//Componentes
import All from "./Components/All";
import Active from "./Components/Active";
import Completed from "./Components/Completed";

const App = () => {
    return (
        <>
            <h1 className="title">#todo</h1>
            <Navbar/>
            <Routes>
                <Route path="/" element={<All/>}/>
                <Route path="/active" element={<Active/>}/>
                <Route path="/completed" element={<Completed/>}/>
            </Routes>
        </>
     );
}
 
export default App;