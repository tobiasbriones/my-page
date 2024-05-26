// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-cv-section',
  styleUrl: 'app-cv-section.css',
  shadow: true,
})
export class AppCvSection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
