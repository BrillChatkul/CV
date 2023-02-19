import { Route, Routes } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Contact from './pages/Contact/contact';
import Home from './pages/Home/home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
