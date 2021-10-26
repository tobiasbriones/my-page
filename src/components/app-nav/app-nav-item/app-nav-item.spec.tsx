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

import { newSpecPage } from '@stencil/core/testing';
import { AppNavItem } from './app-nav-item';

describe('app-nav-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppNavItem],
      html: `<app-nav-item></app-nav-item>`,
    });
    expect(page.root).toEqualHtml(`
      <app-nav-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-nav-item>
    `);
  });
});
