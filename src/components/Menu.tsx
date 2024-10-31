import React from 'react';
import LinkButton from './LinkButton';
import AvatarIcon from './AvatarIcon';

interface MenuItem {
  key: string;
  name: string;
  path: string;
  element?: JSX.Element;
  errorElement?: JSX.Element;
}

interface MenuProps {
  items: MenuItem[];
  activeKey: string;
}

const Menu = ({ items, activeKey }: MenuProps) => {
  const divided = Math.floor(items.length / 2);

  const renderItem = (i: number) => (
    <div className="px-2 py-1">
      <LinkButton
        key={items[i].key}
        href={items[i].path}
        isActive={activeKey === items[i].path}
      >
        {items[i].name}
      </LinkButton>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full p-2 border-b fixed top-0 left-0 drop-shadow-sm bg-white">
      {items.slice(0, divided).map((_, i) => renderItem(i))}
      {
        <AvatarIcon
          src="https://avatars.githubusercontent.com/u/6713782?v=4"
          alt="avatar"
        />
      }
      {items.slice(divided).map((_, i) => renderItem(divided + i))}
    </div>
  );
};

export default Menu;
