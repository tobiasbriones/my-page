// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import {Component, h, Host, Prop, State} from '@stencil/core';
import {CvEntry, Gallery, Image, MainImage} from '../../../../user';
import {parseMarkdown} from '../../../../markdown/markdown';
import {ModalImage} from '../../../image-modal/modal-image';

@Component({
  tag: 'me-cv-section',
  styleUrl: 'cv-section.scss',
  shadow: true,
})
export class CvSection {
  @Prop()
  name: string = '';

  @Prop()
  entries: CvEntry[] = [];

  @State() modalImageList: Image[] = [];

  @State() modalImage: ModalImage | undefined = undefined;

  render() {
    return (
      <Host>
        <div class="cv-section">
          <h3>{this.name}</h3>

          {this.entries.map(entry => this.renderEntry(entry))}
        </div>
      </Host>
    );
  }

  private renderEntry({title, company, place, date, description, items, footer, image, gallery}: CvEntry) {
    const wide = title.length > 15 || (company?.length ?? 0) > 15;
    const headerClasses = `experience-header ${wide ? 'wide' : ''}`;

    return <div class="experience">
      <div class={headerClasses}>
        <div class="experience-title">
          <h4>{title}</h4>
          <div><i>{company}</i></div>
        </div>
        {this.renderMeta(place ?? "", date ?? "")}
      </div>

      <div>
        <p>{parseMarkdown(description)}</p>

        <me-user-list items={items}/>

        <p>{parseMarkdown(footer)}</p>

        {this.renderImages(image, gallery)}
      </div>
    </div>
  }

  private renderImages(image: MainImage | undefined, gallery: Gallery | undefined) {
    if (image === undefined && gallery === undefined) {
      return <slot/>
    }

    return <div>
      {image && this.renderMainImage(image)}
      {gallery && this.renderGallery(gallery)}
    </div>;
  }

  private renderMainImage({title, first, second}: MainImage) {
    const onOpen = () => {
      if (second === undefined) {
        this.modalImageList = [first];
      } else {
        this.modalImageList = [first, second];
      }
    };

    const onClose = () => {
      this.modalImageList = [];
    };

    return <div>
      <figure class="section-fig">
        <img src={first.src} alt={`${title}_${first.title}`} onClick={() => onOpen()}/>
        <figcaption>{title}</figcaption>
      </figure>

      <me-image-list-modal
        caption={title}
        modalImages={this.modalImageList}
        onClose={onClose}/>
    </div>;
  }

  private renderGallery({title, images}: Gallery) {
    const onOpen = (src: string, title: string, index?: number) => {
      this.modalImage = {image: {src, title}, index}
    };

    const honorIcon = <span class="honor-caption-icon"></span>;

    const galleryTitle = (title: string) => title
      .includes('Honors')
      ? <slot>{title} {honorIcon}</slot>
      : title;

    const updateImage = (idx: number | undefined) => {
      if (idx !== undefined) {
        this.modalImage = {
          image: images[idx],
          index: idx
        }
      }
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

    return <div>
      <figure>
        <div class="gallery">
          {images.map(({src, title}, idx) =>
            <img src={src} alt={title} onClick={() => onOpen(src, title, idx)}/>
          )}
        </div>

        <figcaption>{galleryTitle(title)}</figcaption>
      </figure>

      <me-image-modal
        modalImage={this.modalImage}
        size={images.length}
        onClose={onClose}
        onPrevious={onPrevious}
        onNext={onNext}/>
    </div>;
  }

  private renderMeta(place: string, date: string) {
    const shortTextLength = 20;
    const wideMeta = place.length > shortTextLength || date.length > shortTextLength;
    const classes = `experience-meta ${wideMeta ? "wide" : ""}`;

    return (
      <div class={classes}>
        {place.length > 0 && <div>{place}</div>}
        {date.length > 0 && <div>{date}</div>}
      </div>
    );
  }
}
