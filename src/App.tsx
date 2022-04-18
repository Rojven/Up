import { FC, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Sidebar } from './components';
import { Dashboard, Apps, Addons, Analytics, Help, Settings, Account } from './pages';
import { useStateToggler } from './hooks/useStateToggler';

import { useMediaQuery } from './hooks/useMediaQuery';

import './styles/App.scss';

const App: FC = () => {

    const { state, setState, stateToggler } = useStateToggler(true);

    const mobile = useMediaQuery('(max-width: 767px)');

    useEffect(() => {
        if(mobile && state) document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
          }
    }, [state])

    return (
        <BrowserRouter>
            <div className='app'>
            <Sidebar 
                state={state}
                setState={setState}
            />
            <main className='main'>
                <Header 
                    state={state} 
                    stateToggler={stateToggler}
                />
                <div className='content'>
                    <Routes>
                        <Route 
                            path='/' 
                            element={<Dashboard/>}
                        />
                        <Route 
                            path='/apps' 
                            element={<Apps/>}
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
                            path='/help' 
                            element={<Help/>}
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