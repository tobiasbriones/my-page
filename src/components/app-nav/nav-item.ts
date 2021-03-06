/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of My Page.
 *
 * This source code is licensed under the MIT License found in the LICENSE file
 * in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

export interface NavItem {
  id: number;
  value: string;
  iconSrc: string;
}

export const emptyNavItem: NavItem = {
  id: -1,
  value: '',
  iconSrc: ''
};
