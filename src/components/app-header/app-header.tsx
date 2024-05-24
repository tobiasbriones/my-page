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

import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true
})
export class AppHeader {
  render() {
    return (
      <header>
        <img src="./assets/icon/icon.png" alt="Icon" />
        <h1>My Page</h1>
      </header>
    );
  }
}
