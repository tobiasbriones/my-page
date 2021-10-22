/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of Brief Personal Landing Page.
 *
 * This source code is licensed under the MIT License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

import { Component, h, State } from '@stencil/core';
import { AppDataRepository, Data, emptyData } from '../../data';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @State()
  data: Data;

  constructor() {
    this.data = emptyData;
  }

  async componentWillLoad() {
    await this.load();
  }

  render() {
    return (
      <div class="app-home">
        <app-user-header />
      </div>
    );
  }

  async load() {
    try {
      const dataRepository = new AppDataRepository();
      this.data = await dataRepository.get();
    }
    catch (e) {
      console.log(e);
    }
  }
}
