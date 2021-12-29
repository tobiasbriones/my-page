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

import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-user-photo',
  styleUrl: 'app-user-photo.css',
  shadow: true,
})
export class AppUserPhoto {
  @Prop()
  photo: string;

  constructor() {
    this.photo = '';
  }

  render() {
    return (
      <Host>
        <img src={ this.photo } alt="User photo" />
      </Host>
    );
  }
}
