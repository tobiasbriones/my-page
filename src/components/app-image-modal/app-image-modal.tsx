// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-image-modal',
  styleUrl: 'app-image-modal.css',
  shadow: true,
})
export class AppImageModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
