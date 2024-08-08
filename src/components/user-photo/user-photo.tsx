// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop } from "@stencil/core";

@Component({
    tag: "me-user-photo",
    styleUrl: "user-photo.css",
    shadow: true,
})
export class UserPhoto {
    @Prop()
    photo: string = "";

    render() {
        return (
            <Host>
                <img src={ this.photo } alt="User photo" />
            </Host>
        );
    }
}
