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

import { Component, h, Host, Prop } from '@stencil/core';
import { emptyUser, User } from '../../../../../user';
import { emptyNavItem, NavItem } from '../../../../app-nav/nav-item';
import { ItemId } from '../user-nav';

@Component({
  tag: 'app-user-content',
  styleUrl: 'app-user-content.css',
  shadow: true
})
export class AppUserContent {
  @Prop()
  user: User;

  @Prop()
  selectedItem: NavItem;

  constructor() {
    this.user = emptyUser;
    this.selectedItem = emptyNavItem;
  }

  render() {
    return (
      <Host>
        <h3>{ this.selectedItem.value }</h3>
        { this.renderContent() }
      </Host>
    );
  }

  private renderContent() {
    const user = this.user;
    switch (this.selectedItem.id) {
      case ItemId.PROFILE:
        return <app-user-profile profile={ user.profile } />;
      case ItemId.INTERNSHIPS:
        return <app-user-list items={ user.internships } />;
      case ItemId.COURSES:
        return <app-user-list items={ user.courses } />;
      case ItemId.HONORS:
        return <app-user-list items={ user.honors } />;
      case ItemId.INTERESTS:
        return <app-user-list items={ user.interests } />;
      default:
        return <div />;
    }
  }
}
