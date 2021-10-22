import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'app-iam',
  styleUrl: 'app-iam.css',
  shadow: true
})
export class AppIam {
  @Prop()
  name: string;

  constructor() {
    this.name = '';
  }

  render() {
    return (
      <Host>
        <p>My name is <strong>{ this.name }</strong></p>
      </Host>
    );
  }
}
