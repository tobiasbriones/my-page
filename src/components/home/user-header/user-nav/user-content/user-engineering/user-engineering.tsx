import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'me-user-engineering',
  styleUrl: 'user-engineering.css',
  shadow: true,
})
export class UserEngineering {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
