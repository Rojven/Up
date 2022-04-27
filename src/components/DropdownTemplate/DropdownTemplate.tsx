import { FC } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Dropdown from 'react-dropdown';

import './DropdownTemplate.scss';

interface DropdownTemplateProps {
    options: string[];
}

const DropdownTemplate: FC<DropdownTemplateProps> = ({ options }) => {
    return (
        <Dropdown 
            options={options} 
            value={options[0]}
            className='dropdown'
            menuClassName='dropdown-menu'
            controlClassName='dropdown-control'
            arrowClosed={<MdKeyboardArrowDown/>}
            arrowOpen={<MdKeyboardArrowUp/>}
        />
    )
}

export default DropdownTemplate;