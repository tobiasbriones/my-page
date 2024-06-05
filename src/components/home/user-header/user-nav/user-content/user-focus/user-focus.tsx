import { Component, h, Host, Prop } from '@stencil/core';
import { emptyFocus, Focus } from '../../../../../../user';
import { parseMarkdown } from '../../../../../../markdown/markdown';

@Component({
  tag: 'me-user-focus',
  styleUrl: 'user-focus.css',
  shadow: true,
})
export class UserFocus {
  @Prop() userFocus: Focus = emptyFocus;

  render() {
    const {abstract, items, conclusion} = this.userFocus;

    return (
      <Host>
        <p>{abstract}</p>

        <me-user-list items={items}/>

        <p>{parseMarkdown(conclusion)}</p>
      </Host>
    );
  }
}
