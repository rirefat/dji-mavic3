import './App.css';
import banner from '../src/components/Images/top-banner.jpg'
import TopBanner from './components/TopBanner/TopBanner';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      {/* <img src={banner} alt="" /> */}
      <Header></Header>
      {/* <TopBanner></TopBanner> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Home></Home>}></Route>
        <Route path='/About' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
