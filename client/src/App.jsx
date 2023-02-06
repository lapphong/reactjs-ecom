import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { publicRoutes } from './routes';
import NavBar from './pages/global/Navbar';

const ScrollToTop = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return null;
};

function App() {
   return (
      <div className="app">
         <BrowserRouter>
            <NavBar />
            <ScrollToTop />
            <Routes>
               {publicRoutes.map((route) => {
                  const Page = route.components;
                  return <Route key={route.id} path={route.path} element={<Page />} />;
               })}
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
