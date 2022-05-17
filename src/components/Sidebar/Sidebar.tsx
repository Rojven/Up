import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard, MdAccountCircle } from 'react-icons/md';
import { IoSettingsSharp, IoBagAdd } from 'react-icons/io5';
import { SiGoogleanalytics } from 'react-icons/si';

import { IMenuItem } from '../../types/types';
import logo from '../../assets/img/logo.webp';
import ListTemplate from '../ListTemplate/ListTemplate';
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';

import './Sidebar.scss';

const SidebarMenuData = [
    {name: 'Dashboard', path: '/', icon: <MdSpaceDashboard/>, id: 1},
    {name: 'Add-Ons', path: '/addons', icon: <IoBagAdd/>, id: 2},
    {name: 'Analytics', path: '/analytics', icon: <SiGoogleanalytics/>, id: 3},
    {name: 'Account', path: '/account', icon: <MdAccountCircle/>, id: 4},
    {name: 'Settings', path: '/settings', icon: <IoSettingsSharp/>, id: 5}
]

const Sidebar: FC = () => {
    
    return (
        <aside className='sidebar'>
            <Link to='/'>
                <div className="sidebar__logo-box">
                    <img 
                        src={logo}
                        alt='logo' 
                        className='sidebar__logo-img'
                    />
                    <p className='sidebar__logo-title'>
                            UpSell Add-Ons
                    </p>
                </div>
            </Link>
            <ListTemplate
                items={SidebarMenuData}
                renderItems={(menuItem: IMenuItem) => 
                    <SidebarMenuItem 
                        menuItem={menuItem} 
                        key={menuItem.id}
                    />
                }
            />
            <div className='sidebar__pro'>
                <h2 className='sidebar__pro-title'>Upsell Pro</h2>
                <p className='sidebar__pro-subtitle'>Get access to all features</p>
                <Link to='/account'>
                    <button className='button button_light'>
                        <span>Get Pro</span>
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar;