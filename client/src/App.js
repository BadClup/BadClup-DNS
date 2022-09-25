import Header from "./Components/Layout/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Layout/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Admin from "./Components/Admin";

function App() {
   return (
     <Router>
       <div className="App">
         <Header />
         <Routes>
           <Route path="*" element={<NotFound />} />
           <Route path="/login" element={<Login />} />
           <Route path="/admin" element={<Admin />} />
           <Route path="/" element={<Home />} />
         </Routes>
         <Footer />
       </div>
     </Router>
   );
}

export default App;
