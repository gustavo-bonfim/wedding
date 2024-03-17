interface TimelineItemProps {
  year: string;
  title: string;
  content: string;
}

function TimelineItem({ content, title, year }: TimelineItemProps) {
  return (
    <div className="group flex gap-4 even:flex-row-reverse">
      <div className="flex-1 flex items-center justify-center">
        <span className="text-4xl text-wedding">{year}</span>
      </div>
      <div className="flex-1 max-w-px bg-zinc-200" />
      <div className="flex-1 flex flex-col gap-2 group-even:text-right">
        <span className="font-semibold text-lg text-wedding">{title}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}

export default TimelineItem;
