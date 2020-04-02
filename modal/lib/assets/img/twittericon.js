import { LitElement, html, css } from 'lit-element';
import Icon from './icon';

class TwitterIcon extends Icon {
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
     <image src="https://www.pngitem.com/pimgs/m/250-2509449_twiter-twitter-icon-transparent-hd-png-download.png" width="63px">
    `;
  }
}

customElements.define('twitter-icon', TwitterIcon);