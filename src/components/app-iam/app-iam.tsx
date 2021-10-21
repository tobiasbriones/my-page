import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-iam',
  styleUrl: 'app-iam.css',
  shadow: true,
})
export class AppIam {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
