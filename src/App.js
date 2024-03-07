import './App.css';
import AboutPage from './pages/aboutpage';
import ContactUs from './pages/contactus';
import Countrypage from './pages/countrypage';
import Gallery from './pages/gallery';
import Homepage from './pages/homepage';
import Country from './pages/country';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/aboutpage' element={<AboutPage/>}></Route>
          <Route path='/countrypage' element={<Countrypage/>}></Route>
          <Route path='/gallerypage' element={<Gallery/>}></Route>
          <Route path='/contactpage' element={<ContactUs/>}></Route>
          <Route path='/country' element={<Country/>}></Route>





        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
