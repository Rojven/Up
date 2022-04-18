import { FC, ReactNode } from 'react';
//import { BiAnalyse } from 'react-icons/bi';

import './PlatesTemplate.scss';

interface PlatesTemplateProps {
    title: string;
    children: ReactNode;
}

const PlatesTemplate: FC<PlatesTemplateProps> = ({ title, children }) => {
    return (
        <div className='plate'>
            <div className='plate__wrapper'>
                <h3 className='plate__title'>{title}</h3>
                {/* <button className='button'>
                    <span className='plate__icon'><BiAnalyse/></span>
                    <span>More</span>
                </button> */}
            </div>
            
            {children}
        </div>
    )
}

export default PlatesTemplate;