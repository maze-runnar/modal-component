import { LitElement, html, css } from 'lit-element';
import Icon from './icon';

class FacebookIcon extends Icon {
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
     <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-icon-logo-png-transparent.png" width ="50px"/>
    `;
  }
}

customElements.define('facebook-icon', FacebookIcon);