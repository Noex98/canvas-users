import './Theme/global.css';
import './Theme/theme.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {
    Create,
    Update,
    Posts
} from './pages';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Posts />}/>
                    <Route path="/create" element={< Create/>}/>
                    <Route path="/posts/:id" element={<Update />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
