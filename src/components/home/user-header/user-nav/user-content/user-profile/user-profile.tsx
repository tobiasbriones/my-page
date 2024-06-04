/*
 * Copyright (c) 2021, 2024 Tobias Briones. All rights reserved.
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
  tag: 'me-user-profile',
  styleUrl: 'user-profile.css',
  shadow: true
})
export class UserProfile {
  @Prop()
  profile: Profile;

  constructor() {
    this.profile = emptyProfile;
  }

  render() {
    const {abstract, sections} = this.profile.cv;

    return (
      <Host>
        <p>{abstract}</p>

        {sections.map(({sectionName, entries}) =>
          <me-cv-section name={sectionName} entries={entries}/>
        )}

        {this.getLanguages()}
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
          <me-user-list items={lang.firstClass}/>

          <h5>Second class</h5>
          <me-user-list items={lang.secondClass}/>

          <h5>Others</h5>
          <me-user-list items={lang.others}/>
        </div>

        <div>
          <h3>Natural Languages</h3>

          <me-user-list items={lang.naturalLanguages}/>
        </div>
      </div>
    );
  }
}
