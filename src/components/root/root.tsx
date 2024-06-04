// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'me-root',
  styleUrl: 'root.css',
  shadow: true
})
export class Root {
  render() {
    return (
      <Host>
        <me-header />
        <me-main />
      </Host>
    );
  }
}
