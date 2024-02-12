'use client';
import { useState } from 'react';
import { Button } from '~/components/ui/button';

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="items-center justify-center space-y-4">
      <h1 className="font-semibold text-lg">contador</h1>
      <p id="contador" className="text-3xl">
        {count}
      </p>

      <div className="flex gap-4">
        <Button onProgress={() => setCount((prev) => prev + 1)}>teste</Button>
      </div>
    </div>
  );
}

export default Home;
