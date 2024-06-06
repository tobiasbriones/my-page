// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h } from '@stencil/core';

@Component({
  tag: 'me-header',
  styleUrl: 'header.css',
  shadow: true
})
export class Header {
  render() {
    return (
      <header>
        <img src="./assets/icon/icon.png" alt="Icon" />
        <span class="title">My Page</span>
      </header>
    );
  }
}
