'use client';

import { HeaderMobileMenu } from '@/components/home/HeaderMobileMenu';
import { HeaderFrame } from '@/components/home/header-shared';

export function HeaderClient() {
  return <HeaderFrame mobileMenu={<HeaderMobileMenu />} />;
}
