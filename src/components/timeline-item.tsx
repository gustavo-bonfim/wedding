import { Heart } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  content: string;
}

function TimelineItem({ content, title, year }: TimelineItemProps) {
  return (
    <div className="group relative flex gap-6 even:flex-row-reverse">
      <div className="absolute top-px left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full border border-gold bg-background p-2">
        <Heart size={10} />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <span className="text-4xl text-wedding">{year}</span>
      </div>
      <div className="max-w-px flex-1 bg-zinc-200" />
      <div className="flex flex-1 flex-col gap-2 group-even:text-right">
        <span className="font-semibold text-lg text-wedding">{title}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}

export default TimelineItem;
