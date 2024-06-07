// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, State } from '@stencil/core';
import { AppUserRepository, emptyUser, User } from '../../user';
import { UserHeader } from './user-header';

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
    document.title = `${this.user.profile.name} | My Page`
  }

  render() {
    return (
      <Host>
        <UserHeader user={this.user}/>
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
