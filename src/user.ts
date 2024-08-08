// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Env } from '@stencil/core';

export interface User {
  contact: Contact;
  profile: Profile;
  engineering: Engineering;
  focus: Focus;
  courses: string[];
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
  title: string;
  photo: string;
  cv: Cv;
  language: Language;
}

export interface Focus {
  abstract: string;
  items: string[];
  conclusion: string;
}

export interface Engineering {
  sections: EngSection[];
}

export interface EngSection {
  name: string;
  icon: string;
  abstract: string;
  items: string[];
  conclusion: string;
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
  image: MainImage | undefined;
  gallery: Gallery | undefined;
}

export interface Language {
  naturalLanguages: string[];
}

export interface Image {
  src: string;
  title: string;
}

export interface MainImage {
  title: string,
  first: Image,
  second: Image | undefined,
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
  title: '',
  photo: '',
  cv: emptyCv,
  language: {
    naturalLanguages: []
  }
};

export const emptyEngSection: EngSection = {
  name: '',
  icon: '',
  abstract: '',
  items: [],
  conclusion: '',
};

export const emptyEngineering: Engineering = {
  sections: []
};

export const emptyFocus: Focus = {abstract: '', conclusion: '', items: []};

export const emptyUser: User = {
  contact: emptyContact,
  profile: emptyProfile,
  engineering: emptyEngineering,
  focus: emptyFocus,
  courses: [],
  interests: [],
};
