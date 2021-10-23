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

import { Component, h, Host, Prop } from '@stencil/core';
import { Data, emptyData } from '../../../../data';
import { emptyNavItem, NavItem } from '../app-user-nav/user-nav';

@Component({
  tag: 'app-user-content',
  styleUrl: 'app-user-content.css',
  shadow: true
})
export class AppUserContent {
  @Prop()
  user: Data;

  @Prop()
  selectedItem: NavItem;

  constructor() {
    this.user = emptyData;
    this.selectedItem = emptyNavItem;
  }

  render() {
    return (
      <Host>
        <p>{ this.selectedItem.value }</p>
        <app-user-profile profile={ this.user.profile } />
      </Host>
    );
  }

}
