import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import SignInPage from './pages/SignInPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import routes from './routes';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
          <div className='p-5'>
          <Routes>
           {
             routes.map((route, index) => {
               return <Route path={route.path} element={route.component}/>
             })
           }
          </Routes>
          </div>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
