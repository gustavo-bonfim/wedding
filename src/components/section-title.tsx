import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

function SectionTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('mb-12 flex w-full items-center gap-8', className)}
      {...props}
    >
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-center text-2xl text-wedding italic">
        {props.children}
      </span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

export default SectionTitle;
