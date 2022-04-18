import { FC } from 'react';
import { MdSpaceDashboard, MdAccountCircle } from 'react-icons/md';
import { IoApps, IoSettingsSharp, IoBagAdd, IoHelpCircleSharp } from 'react-icons/io5';
import { SiGoogleanalytics } from 'react-icons/si';

import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';

import './SidebarMenu.scss';

const SidebarMenuData = [
    {name: 'Dashboard', path: '/', icon: <MdSpaceDashboard/>},
    {name: 'Apps', path: '/apps', icon: <IoApps/>},
    {name: 'Add-Ons', path: '/addons', icon: <IoBagAdd/>},
    {name: 'Analytics', path: '/analytics', icon: <SiGoogleanalytics/>},
    {name: 'Account', path: '/account', icon: <MdAccountCircle/>},
    {name: 'Help', path: '/help', icon: <IoHelpCircleSharp/>},
    {name: 'Settings', path: '/settings', icon: <IoSettingsSharp/>}
]

interface SidebarMenuProps {
    state: boolean;
    setState: (state: boolean) => void;
}
    
const SidebarMenu: FC<SidebarMenuProps> = ({ state, setState }) => {
    return (
        <ul className='sidebar__menu'>
            {SidebarMenuData.map((menuItem, i) => 
                <SidebarMenuItem 
                    key={i}
                    state={state}
                    setState={setState} 
                    {...menuItem}
                />
            )}
        </ul>
    )
}

export default SidebarMenu;