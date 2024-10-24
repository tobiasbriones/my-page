// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host, Prop, State } from "@stencil/core";
import { emptyUser, User } from "../../../user";
import { getNavItemByHash, getNavItems } from "../../menu-nav/user-nav-data";
import { Item } from "../../nav/nav-item";

const ITEMS = getNavItems();

@Component({
    tag: "me-user-page",
    styleUrl: "user-page.css",
    shadow: true,
})
export class UserPage {
    @Prop()
    user: User = emptyUser;

    @State()
    selectedItem: Item = ITEMS[0];

    render() {
        return (
            <Host>
                <me-user-content
                    user={ this.user }
                    selectedItem={ this.selectedItem } />
                <div class="me-user-detail">
                    <me-user-photo photo={ this.user.profile.photo } />
                    <me-contact-info
                        location={ this.user.contact.location }
                        email={ this.user.contact.email }
                        phone={ this.user.contact.phone }
                        linkedInUser={ this.user.contact.linkedInUser }
                    />
                </div>
            </Host>
        );
    }

    componentWillLoad() {
        window.addEventListener(
            "hashchange",
            () => this.handleHashChange.apply(this),
        );
    }

    disconnectedCallback() {
        window.removeEventListener(
            "hashchange",
            () => this.handleHashChange.apply(this),
        );
    }

    componentDidLoad() {
        this.handleHashChange();
    }

    handleHashChange() {
        this.selectedItem = this.getNavItemFromWindowHash();
    }

    getNavItemFromWindowHash() {
        const hash = window.location.hash.replace("#", "");
        return getNavItemByHash(hash);
    }
}
