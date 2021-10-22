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

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
  shadow: true
})
export class AppNav {
  @Prop()
  items: string[];

  @Event()
  itemClick?: EventEmitter<string>;

  constructor() {
    this.items = [];
  }

  render() {
    const mapItem = (item: string) =>
      <li key={ item } onClick={ e => this.onItemClick(e) }>
        <span>{ item }</span>
      </li>;
    return (
      <nav>
        <p>
          Menu
        </p>

        <ul>
          { this.items.map(mapItem) }
        </ul>
      </nav>
    );
  }

  onItemClick(e: MouseEvent) {
    const el = e.target as HTMLSpanElement;
    const item = el.textContent || '';

    this.itemClick?.emit(item);
  }
}
