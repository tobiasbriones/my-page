import { Component, h, Host, Prop } from '@stencil/core';
import { emptyEngineering, Engineering } from '../../../../../../user';
import { parseMarkdown } from '../../../../../../markdown/markdown';

@Component({
  tag: 'me-user-engineering',
  styleUrl: 'user-engineering.css',
  shadow: true,
})
export class UserEngineering {
  @Prop() engineering: Engineering = emptyEngineering;

  render() {
    return (
      <Host>
        <p>
          The Engineering section contains the original self-directed work of the author.
        </p>

        {this.engineering
          .sections
          .map(({name, icon, abstract, items, conclusion}) => <div>
            <h3>{name}</h3>

            <div class="icon">
              <img src={icon} alt={name}/>
            </div>

            <p>{abstract}</p>

            <me-user-list items={items}/>

            <p>{parseMarkdown(conclusion)}</p>
          </div>)}
      </Host>
    );
  }
}
