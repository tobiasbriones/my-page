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

import { Component, h, Host, Prop, State } from '@stencil/core';
import { emptyUser, User } from '../../../../user';
import { getNavItems } from './user-nav-data';
import { Item } from '../../../nav/nav-item';

const ITEMS = getNavItems();

@Component({
  tag: 'me-user-nav',
  styleUrl: 'user-nav.css',
  shadow: true
})
export class UserNav {
  @Prop()
  user: User;

  @State()
  selectedItem: Item;

  constructor() {
    this.user = emptyUser;
    this.selectedItem = ITEMS[0];
  }

  render() {
    return (
      <Host>
        <me-nav
          items={ITEMS}
          selectedItem={this.selectedItem}
          onItemClick={(e: CustomEvent<Item>) => this.onNavItemClick(e)}
        />
        <me-user-content user={this.user} selectedItem={this.selectedItem}/>
        <div class="me-user-detail">
          <me-user-photo photo={this.user.profile.photo}/>
          <me-contact-info
            location={this.user.contact.location}
            email={this.user.contact.email}
            phone={this.user.contact.phone}
            linkedInUser={this.user.contact.linkedInUser}
          />
        </div>
      </Host>
    );
  }

  onNavItemClick(event: CustomEvent<Item>) {
    this.selectedItem = event.detail;
  }
}
