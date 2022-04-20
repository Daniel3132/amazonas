import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AddProduct from '../components/AddProduct';
import ProductDetail from '../components/ProductDetail';
import Carrito from '../components/Carrito';
import GeoLocation from '../components/GeoLocation';
import Payment from '../components/Payment';

const DashboardRoute = () => {
    return (
        <div>
            <>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddProduct />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/map" element={<GeoLocation />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/detail/:nombre" element={<ProductDetail />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </>
        </div>
    );
};

export default DashboardRoute;