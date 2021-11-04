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

import { Component, Env, h, Host } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <Host>
        <header>
          <img src="./assets/icon/icon.png" alt="Icon" />
          <h1>My Page</h1>
        </header>

        <main>
          <stencil-router root={ Env.routerRoot }>
            <stencil-route-switch scrollTopOffset={ 0 }>
              <stencil-route url="/" component="app-home" exact={ true } />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </Host>
    );
  }
}
