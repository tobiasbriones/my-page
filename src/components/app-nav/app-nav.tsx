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
import { NavItem } from '../app-home/app-user-header/app-user-nav/user-nav';

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
    const getClass = (item: NavItem) => item.id === this.selectedItem?.id ? 'selected' : '';
    const mapItem = (item: NavItem) => (
      <li
        id={ item.id.toString() }
        key={ item.id.toString() }
        class={ getClass(item) }
        onClick={ e => this.onItemClick(e) }
      >
        <img
          src={ this.getIconSrc(item) }
          alt={ item.value }
        />
        <span>{ item.value }</span>
      </li>
    );
    return (
      <nav>
        <p>Menu</p>
        <ul>
          { this.items.map(mapItem) }
        </ul>
      </nav>
    );
  }

  onItemClick(event: MouseEvent) {
    const el = event.currentTarget as HTMLUListElement;
    const id = parseInt(el.id);
    const item = this.items.find(item => item.id === id);
    this.itemClick?.emit(item);
  }

  private getIconSrc(item: NavItem): string {
    return this.selectedItem?.id === item.id ?
      `${ item.iconSrc }-active.svg` :
      `${ item.iconSrc }.svg`;
  }
}
