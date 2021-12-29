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

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { emptyNavItem, NavItem } from '../nav-item';

@Component({
  tag: 'app-nav-item',
  styleUrl: 'app-nav-item.css',
  shadow: true
})
export class AppNavItem {
  @Prop()
  item: NavItem;

  @Prop()
  isSelected: boolean;

  @Event()
  itemClick?: EventEmitter<NavItem>;

  constructor() {
    this.item = emptyNavItem;
    this.isSelected = false;
  }

  render() {
    return (
      <Host
        class={ this.getClass() }
        onClick={ () => this.onItemClick() }
      >
        <img
          src={ this.getIconSrc() }
          alt={ this.item.value }
        />
        <span>{ this.item.value }</span>
      </Host>
    );
  }

  private onItemClick() {
    this.itemClick?.emit(this.item);
  }

  private getClass(): string {
    return this.isSelected ? 'selected' : '';
  }

  private getIconSrc(): string {
    return this.isSelected ?
      `${ this.item.iconSrc }-active.svg` :
      `${ this.item.iconSrc }.svg`;
  }
}
