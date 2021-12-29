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

import { Component, h, Prop } from '@stencil/core';
import { User, emptyUser } from '../../../user';

@Component({
  tag: 'app-user-header',
  styleUrl: 'app-user-header.css',
  shadow: true
})
export class AppUserHeader {
  @Prop()
  user: User;

  constructor() {
    this.user = emptyUser;
  }

  render() {
    return (
      <header>
        <app-iam name={ this.user.profile.name } />
        <app-user-nav user={ this.user } />
      </header>
    );
  }
}
