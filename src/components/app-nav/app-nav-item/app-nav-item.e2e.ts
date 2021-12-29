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

import { newE2EPage } from '@stencil/core/testing';

describe('app-nav-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-nav-item></app-nav-item>');

    const element = await page.find('app-nav-item');
    expect(element).toHaveClass('hydrated');
  });
});
