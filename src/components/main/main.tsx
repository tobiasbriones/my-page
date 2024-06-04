// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, Env, h } from '@stencil/core';

@Component({
  tag: 'me-main',
  styleUrl: 'main.css',
  shadow: true
})
export class Main {
  render() {
    return (
      <main>
        <stencil-router root={ Env.routerRoot }>
          <stencil-route-switch scrollTopOffset={ 0 }>
            <stencil-route url="/" component="me-home" exact={ true } />
          </stencil-route-switch>
        </stencil-router>
      </main>
    );
  }
}
