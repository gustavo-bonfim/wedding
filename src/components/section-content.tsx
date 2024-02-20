import { ComponentProps } from 'react';

function SectionContent({ children, ...props }: ComponentProps<'div'>) {
  return (
    <div className="mt-6 mb-12 max-w-[800px] text-xl" {...props}>
      {children}
    </div>
  );
}

export default SectionContent;
