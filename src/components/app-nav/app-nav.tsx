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

import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { NavItem } from './nav-item';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
  shadow: true
})
export class AppNav {
  @Prop()
  items: NavItem[];

  @Prop()
  selectedItem?: NavItem;

  @Event()
  itemClick?: EventEmitter<NavItem>;

  constructor() {
    this.items = [];
  }

  render() {
    const mapItem = (item: NavItem) => (
      <li key={ item.id.toString() }>
        <app-nav-item
          item={ item }
          isSelected={ item.id === this.selectedItem?.id }
          onItemClick={ e => this.onItemClick(e) }
        />
      </li>
    );
    return (
      <nav>
        <h3>Menu</h3>
        <ul>
          { this.items.map(mapItem) }
        </ul>
      </nav>
    );
  }

  onItemClick(event: CustomEvent<NavItem>) {
    const item = event.detail;
    this.itemClick?.emit(item);
  }
}
