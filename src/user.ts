/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of Brief Personal Landing Page.
 *
 * This source code is licensed under the MIT License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

import { Env } from '@stencil/core';

export interface User {
  profile: Profile
  internships: string[];
  courses: string[];
  honors: string[];
  interests: string[];
}

export interface Profile {
  name: string;
  photo: string;
  studies: string[];
  experience: string;
  tools: string[];
  language: Language;
}

export interface Language {
  firstClass: string[];
  secondClass: string[];
  others: string[];
  naturalLanguages: string[];
}

export class AppUserRepository {
  private static readonly FILE_NAME = Env.userFile as string;

  constructor() {}

  async get(): Promise<User> {
    const res = await fetch(AppUserRepository.FILE_NAME);
    return await res.json();
  }
}

export const emptyProfile: Profile = {
  name: '',
  photo: '',
  studies: [],
  experience: '',
  tools: [],
  language: {
    firstClass: [],
    secondClass: [],
    others: [],
    naturalLanguages: []
  }
};

export const emptyUser: User = {
  profile: emptyProfile,
  courses: [],
  honors: [],
  interests: [],
  internships: []
};
