// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop } from "@stencil/core";

@Component({
    tag: "me-contact-info",
    styleUrl: "contact-info.scss",
    shadow: true,
})
export class ContactInfo {
    @Prop() location: string = "";
    @Prop() email: string = "";
    @Prop() phone: string = "";
    @Prop() linkedInUser: string = "";

    render() {
        const linkedIn = `linkedin.com/in/${ this.linkedInUser }`;
        const linkedInLink = `https://${ linkedIn }`;

        return <Host>
            <div class="contact-info">
                <div><a href={ `mailto:${ this.email }` }>{ this.email }</a>
                </div>
                <div><a href={ `tel:${ this.phone }` }>{ this.phone }</a></div>

                <div class="section">
                    <div>{ this.location }</div>
                </div>

                <div class="section">
                    <div>
                        <a
                            href={ linkedInLink }
                            target="_blank"
                            rel="noreferrer">
                            { linkedIn }
                        </a>
                    </div>
                </div>
            </div>
        </Host>;
    }
}
