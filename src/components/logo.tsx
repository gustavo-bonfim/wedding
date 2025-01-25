import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

function Logo({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'select-none font-burgues text-3xl text-wedding',
        className,
      )}
      {...rest}
    >
      <p>K</p>
      <p className="-mt-1.5 pl-7">G</p>
    </div>
  );
}

export default Logo;
