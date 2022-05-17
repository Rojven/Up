import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Sidebar } from './components';
import { Dashboard, Addons, Analytics, Settings, Account } from './pages';

import './styles/App.scss';

const App: FC = () => {

    return (
        <BrowserRouter>
            <div className='app'>
            <Sidebar />
            <main className='main'>
                <Header />
                <div className='content'>
                    <Routes>
                        <Route 
                            path='/' 
                            element={<Dashboard/>}
                        />
                        <Route 
                            path='/addons' 
                            element={<Addons/>}
                        />
                        <Route 
                            path='/analytics' 
                            element={<Analytics/>}
                        />
                        <Route 
                            path='/account' 
                            element={<Account/>}
                        />
                        <Route 
                            path='/settings' 
                            element={<Settings/>}
                        />
                    </Routes>
                </div>
            </main>
            </div>
        </BrowserRouter>
    )
}

export default App;