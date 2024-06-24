'use client';

import Link from 'next/link';
import React from 'react'
import {NavigationItem} from './Topbar';
import useCurrentPath from '@/hooks/useCurrentPath';

export default function TopbarLink({item}: {item: NavigationItem}) {
  'use client';
  return (
    <Link key={item.href} href={item.href} className={'link ' + (useCurrentPath(item.href) ? 'active' : '')}>{item.name}</Link>
  );
};