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

import { Component, h, Host, State } from '@stencil/core';
import { AppUserRepository, emptyUser, User } from '../../user';

@Component({
  tag: 'me-home',
  styleUrl: 'home.css',
  shadow: true
})
export class Home {
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
        <me-user-header user={this.user}/>
        <footer>
          <div><strong>My Page</strong></div>
          <div>Copyright © 2021-present Tobias Briones. All rights reserved.</div>
          <div>Licensed under the <a
            href="https://github.com/tobiasbriones/my-page"
            target="_blank"
            rel="noreferrer"
          >
            MIT License
          </a>.
          </div>
        </footer>
      </Host>
    );
  }

  async load() {
    try {
      const userRepository = new AppUserRepository();
      this.user = await userRepository.get();
    } catch (e) {
      console.log(e);
    }
  }
}
