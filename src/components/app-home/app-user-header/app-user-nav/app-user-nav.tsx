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

import { Component, h, Host, Prop, State } from '@stencil/core';
import { User, emptyUser } from '../../../../user';
import { getNavItems, NavItem } from './user-nav';

const ITEMS = getNavItems();

@Component({
  tag: 'app-user-nav',
  styleUrl: 'app-user-nav.css',
  shadow: true
})
export class AppUserNav {
  @Prop()
  user: User;

  @State()
  selectedItem: NavItem;

  constructor() {
    this.user = emptyUser;
    this.selectedItem = ITEMS[0];
  }

  render() {
    return (
      <Host>
        <app-nav
          items={ ITEMS }
          selectedItem={ this.selectedItem }
          onItemClick={ (e: CustomEvent<NavItem>) => this.onNavItemClick(e) }
        />
        <app-user-content user={ this.user } selectedItem={ this.selectedItem } />
        <app-user-photo photo={ this.user.profile.photo } />
      </Host>
    );
  }

  onNavItemClick(event: CustomEvent<NavItem>) {
    this.selectedItem = event.detail;
  }
}
