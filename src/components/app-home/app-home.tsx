/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of Brief Personal Landing Page.
 *
 * This source code is licensed under the MIT License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

import { Component, h, Host, State } from '@stencil/core';
import { AppUserRepository, emptyUser, User } from '../../user';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @State()
  user: User;

  constructor() {
    this.user = emptyUser;
  }

  async componentWillLoad() {
    await this.load();
  }

  render() {
    return (
      <Host>
        <app-user-header user={ this.user } />
      </Host>
    );
  }

  async load() {
    try {
      const userRepository = new AppUserRepository();
      this.user = await userRepository.get();
    }
    catch (e) {
      console.log(e);
    }
  }
}
