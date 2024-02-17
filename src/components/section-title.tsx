import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

function SectionTitle(props: ComponentProps<'section'>) {
  return (
    <div className={twMerge('flex w-full items-center gap-8', props.className)}>
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-center text-2xl text-gold italic">
        {props.children}
      </span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

export default SectionTitle;
