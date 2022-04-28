import { ReactNode } from 'react';

interface ListTemplateProps<T> {
    items: T[];
    renderItems: (item: T) => ReactNode
}

export default function ListTemplate<T>(props: ListTemplateProps<T>) {
    return (
        <ul>
            {props.items.map(props.renderItems)}
        </ul>
    )
}