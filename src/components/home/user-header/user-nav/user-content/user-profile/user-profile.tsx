// Copyright (c) 2021, 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

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
        <h3>Natural Languages</h3>

        <me-user-list items={lang.naturalLanguages}/>
      </div>
    );
  }
}
