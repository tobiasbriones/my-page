// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { h } from '@stencil/core';
import { User } from '../../user';

export interface UserHeaderProps {
  user: User;
}

export const UserHeader = ({user}: UserHeaderProps) => (
  <header>
    <me-iam name={user.profile.name} professionTitle={user.profile.title}/>
    <me-user-nav user={user}/>
  </header>
);
