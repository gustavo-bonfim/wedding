import { PropsWithChildren } from 'react';

function SectionContent(props: PropsWithChildren) {
  return (
    <div className="mt-6 mb-12 max-w-[800px] text-xl">{props.children}</div>
  );
}

export default SectionContent;
