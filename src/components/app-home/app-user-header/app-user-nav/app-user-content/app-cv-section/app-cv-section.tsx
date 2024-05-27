// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop } from '@stencil/core';
import { CvEntry } from '../../../../../../user';
import { parseMarkdown } from '../../../../../../markdown/markdown';

@Component({
  tag: 'app-cv-section',
  styleUrl: 'app-cv-section.css',
  shadow: true,
})
export class AppCvSection {
  @Prop()
  name: string = '';

  @Prop()
  entries: CvEntry[] = [];

  render() {
    return (
      <Host>
        <div class="cv-section">
          <h4>{this.name}</h4>

          {this.entries.map(entry => this.renderEntry(entry))}
        </div>
      </Host>
    );
  }

  private renderEntry({title, company, place, date, description, items, footer}: CvEntry) {
    return <div class="experience">
      <div class="experience-header">
        <div class="experience-title">
          <h5>{title}</h5>
          <div><i>{company}</i></div>
        </div>
        <div class="experience-meta">
          <div>{place}</div>
          <div>{date}</div>
        </div>
      </div>

      <div>
        <p>{parseMarkdown(description)}</p>

        <app-user-list items={items}/>

        <p>{parseMarkdown(footer)}</p>
      </div>
    </div>
  }
}
