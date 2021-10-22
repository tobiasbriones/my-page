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

import { Component, h, Prop } from '@stencil/core';
import { Data, emptyData } from '../../../data';

const NAV_ITEMS = [
  'Profile',
  'Internships',
  'Courses',
  'Honors',
  'Interests'
];

@Component({
  tag: 'app-user-header',
  styleUrl: 'app-user-header.css',
  shadow: true
})
export class AppUserHeader {
  @Prop()
  data: Data;

  constructor() {
    this.data = emptyData;
  }

  render() {
    return (
      <header>
        <app-iam name={ this.data.profile.name } />
        <app-nav items={ NAV_ITEMS } />
      </header>
    );
  }
}
