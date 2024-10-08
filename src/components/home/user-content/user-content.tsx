// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop } from "@stencil/core";
import { emptyUser, User } from "../../../user";
import { emptyItem, Item } from "../../nav/nav-item";
import { ItemId } from "../../menu-nav/user-nav-data";

@Component({
    tag: "me-user-content",
    styleUrl: "user-content.scss",
    shadow: true,
})
export class UserContent {
    @Prop()
    user: User;

    @Prop()
    selectedItem: Item;

    constructor() {
        this.user = emptyUser;
        this.selectedItem = emptyItem;
    }

    render() {
        return (
            <Host>
                <h2>{ this.selectedItem.value }</h2>
                { this.renderContent() }
            </Host>
        );
    }

    private renderContent() {
        const user = this.user;
        switch (this.selectedItem.id) {
            case ItemId.PROFILE:
                return <me-user-profile profile={ user.profile } />;
            case ItemId.ENGINEERING:
                return <me-user-engineering engineering={ user.engineering } />;
            case ItemId.FOCUS:
                return <me-user-focus userFocus={ user.focus } />;
            case ItemId.COURSES:
                return <me-user-list items={ user.courses } />;
            case ItemId.INTERESTS:
                return <me-user-list items={ user.interests } />;
            default:
                return <div />;
        }
    }
}
