// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop, State } from "@stencil/core";
import { parseMarkdown } from "../../../../markdown/markdown";
import { CvEntry, Gallery, Image, MainImage } from "../../../../user";
import { ModalImage } from "../../../image-modal/modal-image";

@Component({
    tag: "me-cv-section",
    styleUrl: "cv-section.scss",
    shadow: true,
})
export class CvSection {
    @Prop()
    name: string = "";

    @Prop()
    entries: CvEntry[] = [];

    @State() modalImageList: Image[] = [];

    @State() modalImage: ModalImage | undefined = undefined;

    render() {
        return (
            <Host>
                <div class="cv-section">
                    <h3>{ this.name }</h3>

                    { this.entries.map(entry => this.renderEntry(entry)) }
                </div>
            </Host>
        );
    }

    private renderEntry(
        {
            title,
            company,
            place,
            date,
            description,
            items,
            footer,
            image,
            gallery,
        }: CvEntry,
    ) {
        const wide = title.length > 15 || (company?.length ?? 0) > 15;
        const headerClasses = `experience-header ${ wide ? "wide" : "" }`;

        return <div class="experience">
            <div class={ headerClasses }>
                <div class="experience-title">
                    <h4>{ title }</h4>
                    <div><i>{ company }</i></div>
                </div>
                { this.renderMeta(place ?? "", date ?? "") }
            </div>

            <div>
                <p>{ parseMarkdown(description) }</p>

                <me-user-list items={ items } />

                <p>{ parseMarkdown(footer) }</p>

                { this.renderImages(image, gallery) }
            </div>
        </div>;
    }

    private renderImages(
        image: MainImage | undefined,
        gallery: Gallery | undefined,
    ) {
        if (image === undefined && gallery === undefined) {
            return <slot />;
        }

        return <div>
            { image && this.renderMainImage(image) }
            { gallery && <me-gallery-view gallery={ gallery } /> }
        </div>;
    }

    private renderMainImage({ title, first, second }: MainImage) {
        const onOpen = () => {
            if (second === undefined) {
                this.modalImageList = [first];
            }
            else {
                this.modalImageList = [first, second];
            }
        };

        const onClose = () => {
            this.modalImageList = [];
        };

        return <div>
            <figure class="section-fig">
                <img
                    src={ first.src }
                    alt={ `${ title }_${ first.title }` }
                    onClick={ () => onOpen() } />
                <figcaption>{ title }</figcaption>
            </figure>

            <me-image-list-modal
                caption={ title }
                modalImages={ this.modalImageList }
                onClose={ onClose } />
        </div>;
    }

    private renderMeta(place: string, date: string) {
        const shortTextLength = 20;
        const wideMeta = place.length > shortTextLength || date.length > shortTextLength;
        const classes = `experience-meta ${ wideMeta ? "wide" : "" }`;

        return (
            <div class={ classes }>
                { place.length > 0 && <div>{ place }</div> }
                { date.length > 0 && <div>{ date }</div> }
            </div>
        );
    }
}
