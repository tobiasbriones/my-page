import { Component, h, Host, Prop } from "@stencil/core";
import { parseMarkdown } from "../../../../markdown/markdown";
import { emptyEngineering, Engineering } from "../../../../user";

@Component({
    tag: "me-user-engineering",
    styleUrl: "user-engineering.scss",
    shadow: true,
})
export class UserEngineering {
    @Prop() engineering: Engineering = emptyEngineering;

    render() {
        return (
            <Host>
                <p>
                    The Engineering section contains the original self-directed
                    work of the author.
                </p>

                { this.engineering
                      .sections
                      .map(({
                                name,
                                icon,
                                abstract,
                                link,
                                items,
                                gallery,
                                conclusion,
                            }) =>
                          <div>
                              <h2>{ name }</h2>

                              <div class="icon">
                                  <img src={ icon } alt={ name } />
                              </div>

                              <p>{ abstract }</p>

                              <p>
                                  <a
                                      rel="noreferrer"
                                      target="_blank"
                                      href={ link.url }
                                  >
                                      { link.title }
                                  </a>
                              </p>

                              <me-user-list items={ items } />

                              { gallery &&
                                <me-gallery-view
                                    gallery={ gallery }
                                    size="big"
                                /> }

                              <p>{ parseMarkdown(conclusion) }</p>
                          </div>) }
            </Host>
        );
    }
}
