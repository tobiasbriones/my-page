// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Env, h } from '@stencil/core';

export const Router = () => (
  <stencil-router root={Env.routerRoot}>
    <stencil-route-switch scrollTopOffset={0}>
      <stencil-route url="/" component="me-home" exact={true}/>
    </stencil-route-switch>
  </stencil-router>
);
