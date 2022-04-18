import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.webp';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import './Sidebar.scss';

interface SidebarProps {
    state: boolean;
    setState: (state: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ state, setState }) => {
    
    const mobile = useMediaQuery('(max-width: 767px)');
    const tablet = useMediaQuery('(max-width: 1200px)');

    useEffect(() => { 
        if(tablet) {
            setState(false)
        } else {
            setState(true)
        }
    }, [tablet])

    console.log(state)

    return (
        <aside className={mobile 
            ? state ? 'sidebar sidebar_mobile' : 'sidebar sidebar_mobile sidebar_mobile_hidden' 
            : state ? 'sidebar' : 'sidebar sidebar_tablet'}>
            <Link to='/'>
                <div className="sidebar__logo-box">
                    <img 
                        src={logo}
                        alt='logo' 
                        className='sidebar__logo-img'
                    />
                    <p className={mobile 
                        ? 'sidebar__logo-title' 
                        : state ? 'sidebar__logo-title' : 'sidebar__logo-title sidebar__logo-title_tablet'}>
                            UpSell Add-Ons
                    </p>
                </div>
            </Link>
            <SidebarMenu 
                state={state} 
                setState={setState}
            />
            <div className={mobile 
            ? 'sidebar__pro' 
            : state ? 'sidebar__pro' : 'sidebar__pro sidebar__pro_hidden'}>
                <h2 className='sidebar__pro-title'>Upsell Pro</h2>
                <p className='sidebar__pro-subtitle'>Get access to all features</p>
                <Link to='/account'>
                    <button 
                        className='button'
                        onClick={() => setState(false)}
                    >
                        <span>Get Pro</span>
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar;