import Header from "./Components/Layout/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Footer from "./Components/Layout/Footer";
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
           <Route
             path="/"
             element={
               <Fragment>
                 <Home />
               </Fragment>
             }
           />
         </Routes>
         <Footer />
       </div>
     </Router>
   );
}

export default App;
