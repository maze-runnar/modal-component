import { LitElement, html, css } from 'lit-element';
import Icon from './icon';

class EmailIcon extends Icon {
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
    <image src="https://pluspng.com/img-png/email-icon-png-download-icons-logos-emojis-email-icons-2400.png" width="50px">
    `;
  }
}

customElements.define('email-icon', EmailIcon);