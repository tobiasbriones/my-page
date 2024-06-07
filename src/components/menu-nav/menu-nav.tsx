import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'me-menu-nav',
  styleUrl: 'menu-nav.css',
  shadow: true,
})
export class MenuNav {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
