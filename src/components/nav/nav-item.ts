// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

export interface Item {
    id: number;
    value: string;
    iconSrc: string;
}

export const emptyItem: Item = {
    id: -1,
    value: "",
    iconSrc: "",
};
