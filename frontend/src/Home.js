import React from 'react'
import GetStart from "./components/GetStart";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from "./pages/About";
import Discover from "./pages/Discover";
import Pricing from "./pages/Pricing";
import Subscribe from "./pages/Subscribe";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Output from './pages/Output';
import Input from './pages/Input';
import ForgotPassword from './pages/ForgotPassword'
// import AuthDetail from './pages/AuthDetails'


function Home() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Signin />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path='/About' element={<About />} />
                <Route path="/Home" element={<GetStart />} />
                <Route path="/Discover" element={<Discover />} />
                <Route path="/Pricing" element={<Pricing />} />
                <Route path="/Input" element={<Input />} />
                <Route path="/Output" element={<Output />} />
                <Route path="/Subscribe" element={<Subscribe />} />
                <Route path="/reset" element={<ForgotPassword/>} />
            </Routes>
        </Router>
    );
}

export default Home;
