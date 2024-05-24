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

import { Component, Env, h } from '@stencil/core';

@Component({
  tag: 'app-main',
  styleUrl: 'app-main.css',
  shadow: true
})
export class AppMain {
  render() {
    return (
      <main>
        <stencil-router root={ Env.routerRoot }>
          <stencil-route-switch scrollTopOffset={ 0 }>
            <stencil-route url="/" component="app-home" exact={ true } />
          </stencil-route-switch>
        </stencil-router>
      </main>
    );
  }
}
