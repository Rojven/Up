import { FC, ReactNode } from 'react';

import { PlatesTemplate } from '../../components';

interface ModalsTemplateProps {
    modalState: boolean;
    children: ReactNode;
}

const ModalsTemplate: FC<ModalsTemplateProps> = ({ modalState, children }) => {
    return (
        <PlatesTemplate plateClass={modalState ? 'plate_modal plate_modal_active' : 'plate_modal'}>
            {children}
        </PlatesTemplate>
    )
}

export default ModalsTemplate;