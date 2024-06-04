// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop, State } from '@stencil/core';
import { CvEntry, Gallery, Image } from '../../../../../../user';
import { parseMarkdown } from '../../../../../../markdown/markdown';
import { ModalImage } from '../../../../../app-image-modal/modal-image';

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

  @State() modalImage: ModalImage | undefined = undefined;

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

  private renderEntry({title, company, place, date, description, items, footer, image, gallery}: CvEntry) {
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

        {this.renderImages(image, gallery)}
      </div>
    </div>
  }

  private renderImages(image: Image | undefined, gallery: Gallery | undefined) {
    if (image === undefined && gallery === undefined) {
      return <slot/>
    }

    const updateImage = (idx: number | undefined) => {
      if (idx !== undefined && gallery !== undefined) {
        this.modalImage = {
          image: gallery.images[idx],
          index: idx
        }
      }
    };

    const onOpen = (src: string, title: string, index?: number) => {
      this.modalImage = {image: {src, title}, index}
    };

    const onClose = () => {
      this.modalImage = undefined;
    };

    const onPrevious = ({detail}: CustomEvent<ModalImage>) => {
      const idx = detail.index ? detail.index - 1 : undefined;

      updateImage(idx);
    };

    const onNext = ({detail}: CustomEvent<ModalImage>) => {
      const idx = detail.index !== undefined ? detail.index + 1 : undefined;

      updateImage(idx);
    };

    const renderImage = ({src, title}: Image) => <figure>
      <img src={src} alt={title} onClick={() => onOpen(src, title)}/>
      <figcaption>{title}</figcaption>
    </figure>;

    const renderGallery = ({title, images}: Gallery) => <figure>
      <div class="gallery">
        {images.map(({src, title}, idx) =>
          <img src={src} alt={title} onClick={() => onOpen(src, title, idx)}/>
        )}
      </div>

      <figcaption>{title}</figcaption>
    </figure>;

    return <div>
      {image && renderImage(image)}
      {gallery && renderGallery(gallery)}

      <app-image-modal modalImage={this.modalImage} size={gallery?.images.length} onClose={onClose} onPrevious={onPrevious} onNext={onNext}/>
    </div>;
  }
}
