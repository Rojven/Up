import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { IMenuItem } from '../../types/types';

interface SidebarMenuItemProps {
    menuItem: IMenuItem;
    state: boolean;
    setState: (state: boolean) => void;
}
const SidebarMenuItem: FC<SidebarMenuItemProps> = ({ menuItem, state, setState }) => {
    return (
        <li>
            <NavLink
                end
                to={menuItem.path}
                className={({ isActive }) => isActive ? 'sidebar__link sidebar__link_active' : 'sidebar__link'}
                onClick={() => setState(false)}    
            >   
                <span className='icon icon_sidebar'>{menuItem.icon}</span>
                <span className={state ? 'sidebar__text' : 'sidebar__text sidebar__text_tablet'}>{menuItem.name}</span>
                
            </NavLink>  
        </li>
    )
}

export default SidebarMenuItem;