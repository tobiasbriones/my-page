/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of My Page.
 *
 * This source code is licensed under the MIT License found in the LICENSE file
 * in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

import { Env } from '@stencil/core';

export interface User {
  contact: Contact;
  profile: Profile;
  internships: string[];
  courses: string[];
  honors: string[];
  interests: string[];
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedInUser: string;
}

export const emptyContact: Contact = {
  email: '',
  phone: '',
  location: '',
  linkedInUser: ''
};

export interface Profile {
  name: string;
  photo: string;
  cv: CvSection[];
  language: Language;
}

export interface CvSection {
  sectionName: string;
  entries: CvEntry[];
}

export interface CvEntry {
  title: string;
  company: string;
  place: string;
  date: string;
  description: string;
  items: string[];
  footer: string;
}

export interface Language {
  firstClass: string[];
  secondClass: string[];
  others: string[];
  naturalLanguages: string[];
}

export class AppUserRepository {
  private static readonly FILE_NAME = Env.userFile as string;

  constructor() {
  }

  async get(): Promise<User> {
    const res = await fetch(AppUserRepository.FILE_NAME);
    return await res.json();
  }
}

export const emptyCvSection: CvEntry = {
  title: '',
  company: '',
  place: '',
  date: '',
  description: '',
  items: [],
  footer: ''
};

export const emptyProfile: Profile = {
  name: '',
  photo: '',
  cv: [],
  language: {
    firstClass: [],
    secondClass: [],
    others: [],
    naturalLanguages: []
  }
};

export const emptyUser: User = {
  contact: emptyContact,
  profile: emptyProfile,
  courses: [],
  honors: [],
  interests: [],
  internships: []
};
