// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Config } from "@stencil/core";
import { appConfig, Mode, mode } from "./config/config";
import { sass } from "@stencil/sass";
import { join } from "path";
import { existsSync } from "fs";

// https://stenciljs.com/docs/config

export const config: Config = {
    globalStyle: "src/main.css",
    globalScript: "src/main.ts",
    taskQueue: "async",
    plugins: [sass()],
    outputTargets: [
        {
            type: "www",
            serviceWorker: {
                globPatterns: [
                    "**/*.{js,css,json,html,ico,png}",
                ],
            },
            baseUrl: appConfig.baseUrl,
            copy: getCopy(),
        },
    ],
    env: {
        routerRoot: appConfig.routerRoot,
        baseUrl: appConfig.baseUrl,
        userFile: appConfig.userFile,
    },
};

function getCopy() {
    const copy = [
        {
            src: "manifest.webmanifest",
        },
    ] as [{ src: string, dest?: string }];

    // The file dev.user.json is used for dev mode only
    // For production the file should be served on its own
    if (mode === Mode.DEV) {
        // Optional env.dev.user.json that would overwrite the dev.user.json
        let optionalUser = join(__dirname, "src", "env.dev.user.json");

        if (existsSync(optionalUser)) {
            copy.push({ src: optionalUser, dest: "dev.user.json" });
        }
        else {
            copy.push({ src: appConfig.userFile });
        }
    }
    return copy;
}
