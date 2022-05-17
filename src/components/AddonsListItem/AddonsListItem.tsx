import { FC } from 'react';

import { IAddonsTableItem } from '../../types/types';

import './AddonsListItem.scss';

interface AddonsListItemProps {
    listItem: IAddonsTableItem;
}

const AddonsListItem: FC<AddonsListItemProps> = ({ listItem }) => {
    return (
        <tr className='addons__item'>
            <div>
                <img src={listItem.imgUrl} alt="img" />
                <p>{listItem.title}</p>
            </div>
            <textarea className='input'></textarea>
            <input className='input' type="number"/>
            <p>{listItem.placement}</p>
            <p>{listItem.for}</p>
        </tr>
    )
}

export default AddonsListItem;
