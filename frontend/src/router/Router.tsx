import { Routes, Route, Navigate } from 'react-router-dom';

import { CartPage, HomePage} from '../pages';
import { ErrorPage } from '../pages/error/ErrorPage';

export const Router = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/error" element={<ErrorPage />} />
        </Routes>
    );
};
