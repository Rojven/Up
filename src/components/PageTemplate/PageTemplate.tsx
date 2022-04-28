import { FC, ReactNode } from 'react';

import './PageTemplate.scss';

interface PageTemplateProps {
    title: string;
    subtitle: string;
    children: ReactNode;
    contentClassName?: string;
}

const PageTemplate: FC<PageTemplateProps> = ({ title, subtitle, children, contentClassName }) => {
  return (
    <section className='section'>
        <h3 className='section__title'>{title}</h3> 
        <p className='section__subtitle'>{subtitle}</p>
        <div className={`section__content ${contentClassName}`}>
          {children}
        </div>
    </section>
  )
}

export default PageTemplate;