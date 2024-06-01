// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { h } from '@stencil/core';

/**
 * It converts Markdown text with bold style and links to JSX.
 * @param markdown string with Markdown syntax
 */
export function parseMarkdown(markdown: string | undefined) {
  if (markdown === undefined) {
    return [];
  }

  const tokens = [];
  const regex = /(\*\*(.*?)\*\*|\[(.*?)\]\((.*?)\))/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(markdown)) !== null) {
    // Push the text before the match
    if (match.index > lastIndex) {
      tokens.push(<span>{markdown.slice(lastIndex, match.index)}</span>);
    }

    if (match[1].startsWith('**')) {
      // Bold text
      tokens.push(<b>{match[2]}</b>);
    } else if (match[1].startsWith('[')) {
      // Markdown link
      tokens.push(<a href={match[4]} target="_blank" rel="noreferrer">{match[3]}</a>);
    }

    lastIndex = regex.lastIndex;
  }

  // Push the remaining text
  if (lastIndex < markdown.length) {
    tokens.push(<span>{markdown.slice(lastIndex)}</span>);
  }

  return tokens;
}
