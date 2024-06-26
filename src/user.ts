// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

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
  cv: Cv;
  language: Language;
}

export interface Cv {
  abstract: string;
  sections: CvSection[];
}

export interface CvSection {
  sectionName: string;
  entries: CvEntry[];
}

export interface CvEntry {
  title: string;
  company: string | undefined;
  place: string | undefined;
  date: string;
  description: string;
  items: string[];
  footer: string;
  image: Image | undefined;
  gallery: Gallery | undefined;
}

export interface Language {
  firstClass: string[];
  secondClass: string[];
  others: string[];
  naturalLanguages: string[];
}

export interface Image {
  src: string;
  title: string;
}

export interface Gallery {
  title: string;
  images: Image[];
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
  footer: '',
  image: undefined,
  gallery: undefined,
};

export const emptyCv: Cv = {
  abstract: '',
  sections: [],
};

export const emptyProfile: Profile = {
  name: '',
  photo: '',
  cv: emptyCv,
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
