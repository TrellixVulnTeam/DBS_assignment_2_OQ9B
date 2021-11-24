import './App.css';
import Header from './component/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProtectedComponent from './component/Route/ProtectedRoute';
import SignInPage from './pages/SignInPage';

import routes from './routes';
import { useState } from 'react';

function App() {

  
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
          <div className='p-5'>

              <Routes>
                <Route path='/signin' element={<SignInPage />}/>
          
              { 
                // protected route
                routes.map((route, index) => 
                  <Route path={route.path} element = {<ProtectedComponent element={route.component}/>} key={index}/>
                )
              }
              </Routes>
      
          </div>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
