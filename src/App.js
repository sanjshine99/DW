import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const About = lazy(() => import('./components/about/About'));
const Blog = lazy(() => import('./components/blog/Blog'));
const Video = lazy(() => import('./components/video/Video'));
const Stormbreaker19 = lazy(() => import('./components/products/Stormbreaker19'));
const Stormbreaker21 = lazy(() => import('./components/products/Stormbreaker21'));
const Stormbreaker18 = lazy(() => import('./components/products/Stormbreaker18'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Appointment = lazy(() => import('./components/bookus/Appointment'));
const Tour = lazy(() => import('./components/tour/Tour'));
const Warranty = lazy(() => import('./components/warrantypolicy/WarrantyPolicy'));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/"> 
        <Header />
        <Suspense fallback={<div className="viewport-filler"></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/video" element={<Video />} />
            <Route path="/stormbreaker19" element={<Stormbreaker19 />} />
            <Route path="/stormbreaker21" element={<Stormbreaker21 />} />
            <Route path="/stormbreaker18" element={<Stormbreaker18 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/warranty" element={<Warranty />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
