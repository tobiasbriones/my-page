// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop } from '@stencil/core';
import { emptyUser, User } from '../../../../../user';
import { emptyItem, Item } from '../../../../nav/nav-item';
import { ItemId } from '../user-nav-data';

@Component({
  tag: 'me-user-content',
  styleUrl: 'user-content.css',
  shadow: true
})
export class UserContent {
  @Prop()
  user: User;

  @Prop()
  selectedItem: Item;

  constructor() {
    this.user = emptyUser;
    this.selectedItem = emptyItem;
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
        return <me-user-profile profile={ user.profile } />;
      case ItemId.INTERNSHIPS:
        return <me-user-list items={ user.internships } />;
      case ItemId.COURSES:
        return <me-user-list items={ user.courses } />;
      case ItemId.HONORS:
        return <me-user-list items={ user.honors } />;
      case ItemId.INTERESTS:
        return <me-user-list items={ user.interests } />;
      default:
        return <div />;
    }
  }
}
