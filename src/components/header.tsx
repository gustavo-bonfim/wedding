'use client';

import Logo from './logo';

function Header() {
  return (
    <header className="invisible flex h-[60px] w-full items-center justify-between md:visible">
      <Logo />
      <ul className="flex gap-5 font-semibold text-wedding uppercase">
        <li>
          <a className="hover:underline" href="#presence">
            Confirmar Presença
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#presentes">
            Lista de Presentes
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#location">
            Como Chegar
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
