import { LitElement, html, css } from 'lit-element';
import Icon from './icon';

class RedditIcon extends Icon {
  static get styles() {
    return css`
      line {
        stroke: var(--baseColor);
      }
      .active line {
        stroke: var(--activeColor);
      }
    `;
  }

  render() {
    return html`
     <image src="https://toppng.com/uploads/preview/reddit-logo-reddit-icon-115628658968pe8utyxjt.png" width="50px">
    `;
  }
}

customElements.define('reddit-icon', RedditIcon);