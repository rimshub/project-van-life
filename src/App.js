import React from 'react';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Vans from './pages/Vans.jsx';
import VanDetail from './pages/VanDetail.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import LayoutHost from './components/LayoutHost.jsx';
import HeaderLayout from './components/HeaderLayout.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import HostVanDetails from './pages/Host/HostVanDetails.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './server.js';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import NotFound from './pages/NotFound.js';
import Auth from './components/Auth.jsx';
import Login from './pages/Login.jsx';


function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderLayout />} >
          <Route path="*" element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route  path="login" element={<Login />}/>
            
            <Route element={<Auth />}>
              <Route path="host" element={<LayoutHost />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />

                <Route path="vans/:id" element={<HostVanDetails />} >
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>   

              </Route>
            </Route> 
          </Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
