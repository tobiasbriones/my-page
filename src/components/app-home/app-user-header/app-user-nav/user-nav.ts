/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of Brief Personal Landing Page.
 *
 * This source code is licensed under the MIT License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

const ITEMS = [
  'Profile',
  'Internships',
  'Courses',
  'Honors',
  'Interests'
];

export interface NavItem {
  id: number;
  value: string;
}

export const emptyNavItem: NavItem = {
  id: -1,
  value: ''
};

export function getNavItems(): NavItem[] {
  const mapItem = (item: string, index: number) => ({
    id: index + 1,
    value: item
  });
  return ITEMS.map(mapItem);
}
