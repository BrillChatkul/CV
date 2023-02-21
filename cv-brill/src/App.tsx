import { Route, Routes } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Contact from './pages/Contact/contact';
import Experience from './pages/Experience/experience';
import Home from './pages/Home/home';


const App = () => {
  return (
    // <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="experience" element={<Experience></Experience>}></Route>
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
