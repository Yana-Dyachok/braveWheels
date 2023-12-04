
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/home/home.page';
import CatalogPage from 'pages/catalog/catalog.page';
import PromoPage from 'pages/promo/promo.page';

const App = () => {
  return (
   <Routes>
    <Route path='/bw' element={<HomePage />} />
    <Route path='/bw/catalog' element={<CatalogPage />} />
    <Route path='/bw/promo' element={<PromoPage />} />
   </Routes>
  );
}

export default App;
