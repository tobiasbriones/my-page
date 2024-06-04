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

import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { Item } from './nav-item';

@Component({
  tag: 'me-nav',
  styleUrl: 'nav.css',
  shadow: true
})
export class Nav {
  @Prop()
  items: Item[];

  @Prop()
  selectedItem?: Item;

  @Event()
  itemClick?: EventEmitter<Item>;

  constructor() {
    this.items = [];
  }

  render() {
    const mapItem = (item: Item) => (
      <li key={ item.id.toString() }>
        <me-nav-item
          item={ item }
          isSelected={ item.id === this.selectedItem?.id }
          onItemClick={ (e: CustomEvent<Item>) => this.onItemClick(e) }
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

  onItemClick(event: CustomEvent<Item>) {
    const item = event.detail;
    this.itemClick?.emit(item);
  }
}
