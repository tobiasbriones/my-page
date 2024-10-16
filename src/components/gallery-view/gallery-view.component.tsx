// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop, State } from "@stencil/core";
import { Gallery, Image } from "../../user";
import { ModalImage } from "../image-modal/modal-image";
import { PreviewSize } from "./gallery-view";

@Component({
    tag: "me-gallery-view",
    styleUrl: "gallery-view.css",
    shadow: true,
})
export class GalleryView {
    @Prop()
    gallery: Gallery = {
        title: "",
        images: [],
    };

    @Prop()
    size: PreviewSize = "small";

    @State()
    modalImage: ModalImage | undefined = undefined;

    render() {
        const { title, images } = this.gallery;

        const onOpen = (src: string, title: string, index?: number) => {
            this.modalImage = { image: { src, title }, index };
        };

        const honorIcon = <span class="honor-caption-icon"></span>;

        const galleryTitle = (title: string) =>
            title.includes("Honors")
            ? <slot>{ title } { honorIcon }</slot>
            : title;

        const updateImage = (idx: number | undefined) => {
            if (idx !== undefined) {
                this.modalImage = {
                    image: images[idx],
                    index: idx,
                };
            }
        };

        const onClose = () => {
            this.modalImage = undefined;
        };

        const onPrevious = ({ detail }: CustomEvent<ModalImage>) => {
            const idx = detail.index ? detail.index - 1 : undefined;

            updateImage(idx);
        };

        const onNext = ({ detail }: CustomEvent<ModalImage>) => {
            const idx = detail.index !== undefined
                        ? detail.index + 1
                        : undefined;

            updateImage(idx);
        };

        const newItem = ({ src, title }: Image, idx: number) =>
            <div>
                <img
                    src={ src }
                    alt={ title }
                    onClick={ () => onOpen(
                        src,
                        title,
                        idx,
                    ) }
                />

                { this.size === "big"
                  ? <div class="item-caption">
                      { title }
                  </div>
                : <slot></slot>
                }
            </div>;

        const className = `gallery ${ this.size }`;

        return (
            <Host>
                <div>
                    <figure>
                        <div class={ className }>
                            { images.map(newItem) }
                        </div>

                        <figcaption>{ galleryTitle(title) }</figcaption>
                    </figure>

                    <me-image-modal
                        modalImage={ this.modalImage }
                        size={ images.length }
                        onClose={ onClose }
                        onPrevious={ onPrevious }
                        onNext={ onNext }
                    />
                </div>
            </Host>
        );
    }
}
