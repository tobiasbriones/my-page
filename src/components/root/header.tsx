// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { h } from '@stencil/core';

export const Header = () => (
  <header>
    <img src="assets/icon/icon.png" alt="My Page Icon"/>
    <span class="title">My Page</span>
  </header>
);
