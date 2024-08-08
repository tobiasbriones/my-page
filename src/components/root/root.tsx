// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host } from "@stencil/core";
import { Header } from "./header";
import { Footer } from "./footer";
import { Router } from "./router";

@Component({
    tag: "me-root",
    styleUrl: "root.scss",
    shadow: true,
})
export class Root {
    render() {
        return (
            <Host>
                <Header />
                <me-menu-nav />
                <Router />
                <Footer />
            </Host>
        );
    }
}
