import { LitElement, html, css } from 'lit-element';
import Icon from './icon';

class TumblrIcon extends Icon {
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
     <image src="https://www.sharethis.com/wp-content/uploads/2017/05/Tumblr.png" width="50px">
    `;
  }
}

customElements.define('tumblr-icon', TumblrIcon);