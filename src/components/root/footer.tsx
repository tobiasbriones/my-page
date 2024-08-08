// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { h } from '@stencil/core';

export const Footer = () => (
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
);
