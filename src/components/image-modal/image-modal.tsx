// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, Event, EventEmitter, h, Host, Prop } from "@stencil/core";
import { ModalImage } from "./modal-image";
import { Image } from "../../user";

@Component({
    tag: "me-image-modal",
    styleUrl: "image-modal.css",
    shadow: true,
})
export class ImageModal {
    @Prop()
    modalImage: ModalImage | undefined = undefined;

    @Prop()
    size: number | undefined = undefined;

    @Event()
    close!: EventEmitter<void>;

    @Event()
    previous!: EventEmitter<ModalImage>;

    @Event() next!: EventEmitter<ModalImage>;

    render() {
        const img = ({ src, title }: Image) => <figure>
            <img src={ src } alt={ title } />
            <figcaption>{ title }</figcaption>
        </figure>;

        const navButtons = (image: ModalImage) => image.index !== undefined && this.size !== undefined &&
            <slot>
                { image.index > 0 &&
                    <button
                        class="prev"
                        onClick={ () => this.previous.emit(image) }
                    >
                        &#10094;
                    </button>
                }
                { image.index >= 0 && image.index < this.size - 1 &&
                    <button
                        class="next"
                        onClick={ () => this.next.emit(image) }>
                        &#10095;
                    </button>
                }
            </slot>;

        const onContentClick = (e: MouseEvent) => {
            const el = e.target as HTMLElement;

            if (el.classList.contains("modal-content")) {
                this.close.emit();
            }
        };

        return this.modalImage && <Host>
            <div class="modal">
                <div class="modal-content" onClick={ onContentClick }>
                    <span
                        class="close"
                        onClick={ () => this.close.emit() }>
                        &times;
                    </span>
                    { img(this.modalImage.image) }
                    { navButtons(this.modalImage) }
                </div>
            </div>
        </Host>;
    }
}
