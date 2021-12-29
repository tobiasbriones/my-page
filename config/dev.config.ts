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

import { AppConfig } from './config';

export const devConfig: AppConfig = {
  routerRoot: '/',
  baseUrl: 'https://myapp.local/',
  userFile: 'dev.user.json'
};
