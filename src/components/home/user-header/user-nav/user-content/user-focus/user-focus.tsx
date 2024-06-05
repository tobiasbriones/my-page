import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'me-user-focus',
  styleUrl: 'user-focus.css',
  shadow: true,
})
export class UserFocus {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
