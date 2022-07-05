import Header from "./Components/Layout/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Fragment } from "react";

function App() {
   return (
     <Router>
       <div className="App">
         <Header />
         <Routes>
           <Route
             exact
             path="/login"
             element={
               <Fragment>
                 <Login />
               </Fragment>
             }
           />
           <Route path="/" element={<Home />} />
         </Routes>
       </div>
     </Router>
   );
}

export default App;
