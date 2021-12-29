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

import { prodConfig } from './prod.config';
import { devConfig } from './dev.config';

const isDev: boolean = process.argv && process.argv.indexOf('--dev') > -1;

export interface AppConfig {
  routerRoot: string;
  baseUrl: string,
  userFile: string
}

export enum Mode {
  PROD = 'prod',
  DEV = 'dev'
}

export const mode: Mode = isDev ? Mode.DEV : Mode.PROD;
export const appConfig: AppConfig = getConfig();

function getConfig() {
  switch (mode) {
    case Mode.PROD:
      return prodConfig;
    case Mode.DEV:
      return devConfig;
    default :
      return prodConfig;
  }
}
