// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, State } from '@stencil/core';
import { Item } from '../nav/nav-item';
import { getNavItems } from './user-nav-data';

const ITEMS = getNavItems();

@Component({
  tag: 'me-menu-nav',
  styleUrl: 'menu-nav.css',
  shadow: true,
})
export class MenuNav {
  @State()
  selectedItem: Item = ITEMS[0];

  render() {
    return (
      <me-nav
        items={ITEMS}
        selectedItem={this.selectedItem}
        onItemClick={(e: CustomEvent<Item>) => this.onNavItemClick(e)}
      />
    );
  }

  onNavItemClick({detail}: CustomEvent<Item>) {
    this.selectedItem = detail;

    window.location.hash = detail.value.toLowerCase();
  }
}
