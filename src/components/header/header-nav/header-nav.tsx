// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'me-header-nav',
  styleUrl: 'header-nav.css',
  shadow: true,
})
export class HeaderNav {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
