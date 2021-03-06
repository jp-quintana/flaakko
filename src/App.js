import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';

import Layout from './setup/Layout';

import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/categorias/:id" element={<Products />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
