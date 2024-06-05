// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Item } from '../../../nav/nav-item';

export enum ItemId {
  PROFILE = 1,
  FOCUS,
  COURSES,
  HONORS,
  INTERESTS
}

export function getNavItems(): Item[] {
  return VALUES;
}

const VALUES: Item[] = [
  {
    id: ItemId.PROFILE,
    value: 'Profile',
    iconSrc: getIconSrc('person')
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
    id: ItemId.HONORS,
    value: 'Honors',
    iconSrc: getIconSrc('military-tech')
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
