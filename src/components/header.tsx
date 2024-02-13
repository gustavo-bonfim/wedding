'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Logo from './logo';
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
      <Logo />
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
