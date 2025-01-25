'use client';

import { type HTMLMotionProps, motion } from 'framer-motion';
import { cn } from '~/lib/utils';

function SectionContent({
  children,
  className,
  ...props
}: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: 'linear',
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className={cn('w-full max-w-[800px] text-xl', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default SectionContent;
