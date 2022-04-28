import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard, MdAccountCircle } from 'react-icons/md';
import { IoApps, IoSettingsSharp, IoBagAdd, IoHelpCircleSharp } from 'react-icons/io5';
import { SiGoogleanalytics } from 'react-icons/si';

import { IMenuItem } from '../../types/types';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import logo from '../../assets/img/logo.webp';
import ListTemplate from '../ListTemplate/ListTemplate';
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';

import './Sidebar.scss';

const SidebarMenuData = [
    {name: 'Dashboard', path: '/', icon: <MdSpaceDashboard/>, id: 1},
    {name: 'Apps', path: '/apps', icon: <IoApps/>, id: 2},
    {name: 'Add-Ons', path: '/addons', icon: <IoBagAdd/>, id: 3},
    {name: 'Analytics', path: '/analytics', icon: <SiGoogleanalytics/>, id: 4},
    {name: 'Account', path: '/account', icon: <MdAccountCircle/>, id: 5},
    {name: 'Help', path: '/help', icon: <IoHelpCircleSharp/>, id: 6},
    {name: 'Settings', path: '/settings', icon: <IoSettingsSharp/>, id: 7}
]


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
            <ListTemplate
                items={SidebarMenuData}
                renderItems={(menuItem: IMenuItem) => 
                    <SidebarMenuItem 
                        menuItem={menuItem} 
                        state={state}
                        setState={setState}
                        key={menuItem.id}
                    />
                }
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