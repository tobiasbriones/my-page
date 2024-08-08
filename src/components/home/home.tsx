// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, State } from '@stencil/core';
import { AppUserRepository, emptyUser, User } from '../../user';
import { UserHeader } from './user-header';

@Component({
  tag: 'me-home',
  styleUrl: 'home.scss',
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
      <main>
        <UserHeader user={this.user}/>
        <me-user-page user={this.user}/>
      </main>
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
