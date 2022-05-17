import { FC, ReactNode } from 'react';

import './PageTemplate.scss';

interface PageTemplateProps {
    children: ReactNode;
    sectionClassName?: string;
}

const PageTemplate: FC<PageTemplateProps> = ({ children, sectionClassName }) => {
  return (
    <section className={`section ${sectionClassName}`}>
      {children}
    </section>
  )
}

export default PageTemplate;