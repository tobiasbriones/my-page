// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ma-iam',
  styleUrl: 'iam.css',
  shadow: true
})
export class Iam {
  @Prop()
  name: string;

  constructor() {
    this.name = '';
  }

  render() {
    return (
      <Host>
        <h2>{ this.name }</h2>
      </Host>
    );
  }
}
