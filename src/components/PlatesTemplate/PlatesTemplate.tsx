import { FC, ReactNode } from 'react';
//import { BiAnalyse } from 'react-icons/bi';

import './PlatesTemplate.scss';

interface PlatesTemplateProps {
    children: ReactNode;
    plateClass?: string;
}

const PlatesTemplate: FC<PlatesTemplateProps> = ({ children, plateClass }) => {
    return (
        <div className={`plate ${plateClass}`}>
            {children}
        </div>
    )
}

export default PlatesTemplate;