import { FC } from 'react';

import { IAddonsTableContentItem } from '../../types/types';

interface AddonsListItemProps {
    listItem: IAddonsTableContentItem;
}

const AddonsListItem: FC<AddonsListItemProps> = ({ listItem }) => {
    return (
        <li>
            <input type="checkbox"/>
            <div>
                <img src={listItem.imgUrl} alt="img" />
                <p>{listItem.title}</p>
            </div>
            <textarea></textarea>
            <input type="text"/>
        </li>
    )
}

export default AddonsListItem;
