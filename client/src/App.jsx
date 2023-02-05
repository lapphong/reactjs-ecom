import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { publicRoutes } from './routes';

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
            <ScrollToTop />
            <Routes>
               {publicRoutes.map((route, index) => {
                  const Page = route.components;
                  return <Route key={index} path={route.path} element={<Page />} />;
               })}
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
