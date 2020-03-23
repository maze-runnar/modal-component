import { LitElement, html, css } from 'lit-element';
import Icon from './icon';

class HamBurger extends Icon {
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
     <img src="https://img.icons8.com/small/96/000000/share-3.png"/>
    `;
  }
}

customElements.define('icon-hamburger', HamBurger);