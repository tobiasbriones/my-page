// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Prop } from '@stencil/core';
import { emptyUser, User } from '../../../user';

@Component({
  tag: 'me-user-header',
  styleUrl: 'user-header.css',
  shadow: true
})
export class UserHeader {
  @Prop()
  user: User;

  constructor() {
    this.user = emptyUser;
  }

  render() {
    return (
      <header>
        <me-iam name={this.user.profile.name} title={this.user.profile.title}/>
        <me-user-nav user={this.user}/>
      </header>
    );
  }
}
