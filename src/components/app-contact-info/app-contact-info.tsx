import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-contact-info',
  styleUrl: 'app-contact-info.css',
  shadow: true,
})
export class AppContactInfo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
