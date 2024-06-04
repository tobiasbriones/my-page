// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { emptyItem, Item } from '../nav-item';

@Component({
  tag: 'me-nav-item',
  styleUrl: 'nav-item.css',
  shadow: true
})
export class NavItem {
  @Prop()
  item: Item;

  @Prop()
  isSelected: boolean;

  @Event()
  itemClick?: EventEmitter<Item>;

  constructor() {
    this.item = emptyItem;
    this.isSelected = false;
  }

  render() {
    return (
      <Host
        class={this.getClass()}
        onClick={() => this.onItemClick()}
      >
        <img
          src={this.getIconSrc()}
          alt={this.item.value}
        />
        <span>{this.item.value}</span>
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
      `${this.item.iconSrc}-active.svg` :
      `${this.item.iconSrc}.svg`;
  }
}
