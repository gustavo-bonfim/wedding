'use client';

import { HTMLMotionProps, motion } from 'framer-motion';

type Props = HTMLMotionProps<'div'>;

function FadeDiv({ children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: 'linear',
        duration: 2,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default FadeDiv;
