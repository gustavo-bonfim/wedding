import { ComponentProps } from 'react';

function SectionContent({ children, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className="mt-6 mb-12 w-full max-w-[800px] text-xl lg:mb-20"
      {...props}
    >
      {children}
    </div>
  );
}

export default SectionContent;
