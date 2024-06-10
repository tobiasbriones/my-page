// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Item } from '../nav/nav-item';

export enum ItemId {
  PROFILE = 1,
  ENGINEERING,
  FOCUS,
  COURSES,
  INTERESTS
}

export function getNavItems(): Item[] {
  return VALUES;
}

export function getNavItemByHash(hash: string): Item {
  const filtered = VALUES.filter(x => x.value.toLowerCase() === hash);
  return filtered.length > 0 ? filtered[0] : VALUES[0];
}

const VALUES: Item[] = [
  {
    id: ItemId.PROFILE,
    value: 'Profile',
    iconSrc: getIconSrc('person')
  },
  {
    id: ItemId.ENGINEERING,
    value: 'Engineering',
    iconSrc: getIconSrc('engineering')
  },
  {
    id: ItemId.FOCUS,
    value: 'Focus',
    iconSrc: getIconSrc('star')
  },
  {
    id: ItemId.COURSES,
    value: 'Courses',
    iconSrc: getIconSrc('school')
  },
  {
    id: ItemId.INTERESTS,
    value: 'Interests',
    iconSrc: getIconSrc('interests')
  }
];

function getIconSrc(name: string): string {
  const ASSETS_MD = './assets/icon/md';
  return `${ ASSETS_MD }/${ name }`;
}
