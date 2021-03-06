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

import { Component, h, Host, Prop } from '@stencil/core';
import { emptyProfile, Profile } from '../../../../../../user';

@Component({
  tag: 'app-user-profile',
  styleUrl: 'app-user-profile.css',
  shadow: true
})
export class AppUserProfile {
  @Prop()
  profile: Profile;

  constructor() {
    this.profile = emptyProfile;
  }

  render() {
    return (
      <Host>
        <div>
          <h3>Studies</h3>
          <app-user-list items={ this.profile.studies } />
        </div>

        <div>
          <h3>Experience</h3>
          <p>{ this.profile.experience }</p>
        </div>

        <div>
          <h3>Tools</h3>
          <app-user-list items={ this.profile.tools } />
        </div>

        { this.getLanguages() }
      </Host>
    );
  }

  private getLanguages() {
    const lang = this.profile.language;
    return (
      <div>
        <div>
          <h3>Programming Languages</h3>
          <div>
            This section shows the programming languages according to my career
            orientation.
          </div>

          <h5>First class</h5>
          <app-user-list items={ lang.firstClass } />

          <h5>Second class</h5>
          <app-user-list items={ lang.secondClass } />

          <h5>Others</h5>
          <app-user-list items={ lang.others } />
        </div>

        <div>
          <h3>Natural Languages</h3>

          <app-user-list items={ lang.naturalLanguages } />
        </div>
      </div>
    );
  }
}
