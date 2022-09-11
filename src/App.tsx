import './Theme/global.css';
import './Theme/theme.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {
    Create,
    Update,
    Posts
} from './pages';
import { UserContextProvider } from './contexts/UserContext';

function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Posts />}/>
                    <Route path="/create" element={< Create/>}/>
                    <Route path="/update/:id" element={<Update />}/>
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    );
}

export default App;
