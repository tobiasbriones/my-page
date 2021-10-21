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

export interface Data {
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
