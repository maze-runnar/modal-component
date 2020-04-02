import { LitElement, html, css } from 'lit-element';
import Icon from './icon';

class PinerestIcon extends Icon {
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
    <image src="https://i.ya-webdesign.com/images/pinterest-logo-png-transparent-background-3.png" width="50px" >
    `;
  }
}

customElements.define('pinerest-icon', PinerestIcon);