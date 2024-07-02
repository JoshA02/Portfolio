'use client';

import Link from 'next/link';
import React from 'react'
import {NavigationItem} from './Topbar';
import useCurrentPath from '@/hooks/useCurrentPath';
import 'material-icons/iconfont/material-icons.css';
import {Icon} from '@mui/material';

export default function TopbarLink({item}: {item: NavigationItem}) {
  return (
    <Link key={item.href} href={item.href} className={'link flex-1 md:flex-initial ' + (useCurrentPath(item.href) ? 'active' : '')}>
      <span className='hidden md:inline'>{item.name}</span>
      <span className='inline md:hidden'><Icon>{item.icon}</Icon></span>
    </Link>
  );
};