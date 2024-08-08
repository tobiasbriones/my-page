// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { AppConfig } from "./config";

const routerRoot = "/";

export const prodConfig: AppConfig = {
    routerRoot: routerRoot,
    baseUrl: `https://me.mathsoftware.engineer${ routerRoot }`,
    userFile: "https://raw.githubusercontent.com/tobiasbriones/my-page/static/user.json",
};
