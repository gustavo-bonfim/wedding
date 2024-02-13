'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Button } from './ui/button';

function Header() {
  const { setTheme, resolvedTheme = 'light' } = useTheme();

  function toggleTheme() {
    if (resolvedTheme === 'light') {
      setTheme('dark');
      return;
    }
    setTheme('light');
  }

  return (
    <header className="flex w-full items-center justify-between">
      <Image
        src="https://github.com/GustavoBonfimS.png"
        width={84}
        height={64}
        alt="logo"
        className="h-16 w-16"
      />
      <div>
        <Button variant="outline" onClick={toggleTheme}>
          {resolvedTheme === 'light' ? (
            <Moon className="text-foreground" />
          ) : (
            <Sun className="text-foreground" />
          )}
        </Button>
      </div>
    </header>
  );
}

export default Header;
