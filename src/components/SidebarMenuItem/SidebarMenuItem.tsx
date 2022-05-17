import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { IMenuItem } from '../../types/types';

interface SidebarMenuItemProps {
    menuItem: IMenuItem;
}
const SidebarMenuItem: FC<SidebarMenuItemProps> = ({ menuItem }) => {
    return (
        <li>
            <NavLink
                end
                to={menuItem.path}
                className={({ isActive }) => isActive ? 'sidebar__link sidebar__link_active' : 'sidebar__link'}   
            >   
                <span className='icon icon_sidebar'>{menuItem.icon}</span>
                <span className='sidebar__text'>{menuItem.name}</span>
                
            </NavLink>  
        </li>
    )
}

export default SidebarMenuItem;