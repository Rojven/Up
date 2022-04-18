import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import './SidebarMenuItem.scss';

interface SidebarMenuItemProps {
    name: string;
    path: string;
    icon: ReactNode;
    state: boolean;
    setState: (state: boolean) => void;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({ name, path, icon, state, setState }) => {
    return (
        <li>
            <NavLink
                end
                to={path}
                className={({ isActive }) => isActive ? 'sidebar__link sidebar__link_active' : 'sidebar__link'}
                onClick={() => setState(false)}    
            >   
                <span className='sidebar__icon'>{icon}</span>
                <span className={state ? 'sidebar__text' : 'sidebar__text sidebar__text_tablet'}>{name}</span>
                  
            </NavLink>  
        </li>
    )
}

export default SidebarMenuItem;