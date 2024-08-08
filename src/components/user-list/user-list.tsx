// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop } from "@stencil/core";
import { parseMarkdown } from "../../markdown/markdown";

@Component({
    tag: "me-user-list",
    styleUrl: "user-list.scss",
    shadow: true,
})
export class UserList {
    @Prop()
    items: string[];

    constructor() {
        this.items = [];
    }

    render() {
        const mapItem = (item: string) =>
            <li key={ item }>{ parseMarkdown(item) }</li>;
        return (
            <Host>
                <ul>
                    { this.items.map(mapItem) }
                </ul>
            </Host>
        );
    }
}
