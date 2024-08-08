// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import {Component, Event, EventEmitter, h, Host, Prop} from '@stencil/core';
import {Image} from '../../user';

@Component({
  tag: 'me-image-list-modal',
  styleUrl: 'image-list-modal.css',
  shadow: true,
})
export class ImageListModal {
  @Prop() title: string = "";
  @Prop() modalImages: Image[] = [];
  @Event() close!: EventEmitter<void>;

  render() {
    const onContentClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement;

      if (el.classList.contains("modal-content")) {
        this.close.emit();
      }
    };

    const img = ({title, src}: Image) => <img src={src} alt={title}/>;

    return this.modalImages.length > 0 && <Host>
        <div class="modal">
            <div class="modal-content" onClick={onContentClick}>
                <span class="close" onClick={() => this.close.emit()}>&times;</span>
                <figure>
                    {this.modalImages.map(img)}

                    <figcaption>{this.title}</figcaption>
                </figure>
            </div>
        </div>
    </Host>;
  }
}
