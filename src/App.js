import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './Components/Home';
import Reg from './Components/reg';

function App() {

    return (
        <GoogleOAuthProvider clientId="485153389045-pdhlmhnc2bld8vei1luqi87jp0cdoms9.apps.googleusercontent.com">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/guest-reg" element={<Reg />} />
                </Routes>
            </BrowserRouter>
        </GoogleOAuthProvider>
  );
}

export default App;
