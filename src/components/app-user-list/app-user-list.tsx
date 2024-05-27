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
import { parseMarkdown } from '../../markdown/markdown';

@Component({
  tag: 'app-user-list',
  styleUrl: 'app-user-list.css',
  shadow: true
})
export class AppUserList {
  @Prop()
  items: string[];

  constructor() {
    this.items = [];
  }

  render() {
    const mapItem = (item: string) => <li key={ item }>{ parseMarkdown(item) }</li>;
    return (
      <Host>
        <ul>
          { this.items.map(mapItem) }
        </ul>
      </Host>
    );
  }
}
