/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of My Page.
 *
 * This source code is licensed under the MIT License found in the LICENSE file
 * in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'app-iam',
  styleUrl: 'app-iam.css',
  shadow: true
})
export class AppIam {
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
