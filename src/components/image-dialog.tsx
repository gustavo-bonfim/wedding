import Image from 'next/image';
import type { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

interface ImageDialogProps {
  trigger: ReactNode;
  image: string;
  altTitle: string;
}

function ImageDialog({ trigger, altTitle, image }: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>

      <DialogContent className="w-[90dvw] p-1 lg:w-auto">
        <DialogTitle className="sr-only">{altTitle}</DialogTitle>
        <Image
          src={image}
          alt="full screen image"
          width={400}
          height={400}
          quality={100}
          className="w-full"
          priority
        />
      </DialogContent>
    </Dialog>
  );
}

export default ImageDialog;
