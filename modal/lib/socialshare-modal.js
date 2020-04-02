var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, } from 'lit-element';
import './assets/img/shareicon';
import './assets/img/facebookicon';
import './assets/img/twittericon';
import './assets/img/redditicon';
import './assets/img/tumblricon';
import './assets/img/pineresticon';
import './assets/img/emailicon';
import SocialStyle from './css/socialshare-modal';
let ScrubberBar = class ScrubberBar extends LitElement {
    constructor() {
        super();
        this.show = false;
    }
    static get properties() {
        return {
            title: { type: String },
            embeded: { type: String },
            sharedText: { type: String },
        };
    }
    static get styles() {
        return SocialStyle();
    }
    handleCancel() {
        this.show = false;
    }
    render() {
        return html `
      <div>  
      <div style ="text-align:center">
    		<button  @click = "${() => this.show = true}" class="share">
          <icon-hamburger></icon-hamburger>
        </button>
      </div>
        ${this.show ?
            html `
          <div class="modal" >
          <div class="modal-content">
            <div style= "float:right">
              <button @click = "${this.handleCancel}" class="close">
                <span style="font-size:20px;">&times;</span>
              </button>
            </div>
            <div>
              <span style ="font-size:25px;padding:20px;">${this.title}</span>
            </div>
            <hr/>
            <br/><br/><br/>
            <a href="https://twitter.com/share?url=URL&text=hope" target ="_blank" class="share" style="color:white">
              <twitter-icon></twitter-icon> 
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank" class="share" style="color:white">
               <facebook-icon></facebook-icon>
            </a>
            <a href="https://reddit.com/submit?url=<URL>&title=<TITLE>" target="_blank" class="share" style="color:white">
              <reddit-icon></reddit-icon>
            </a>
            <a href="http://www.tumblr.com/share/link?url=https://simplesharebuttons.com&amp;title=Internet Archive" target="_blank" class="share" style="color:white">
              <tumblr-icon></tumblr-icon>
            </a>
           <a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());" target="_blank" style="color:white" class="share">
              <pinerest-icon></pinerest-icon>
            </a>
            <a href="mailto:?subject=<SUBJECT>&body=<BODY>" target="_blank" class="share" style="color:white">
              <email-icon></email-icon>
            </a>
            <br/>
             ${this.embeded == "true" ? html `
               <div>
                 <div style = "margin-top: 50px">
                  <span style = "font-weight : bold; font-family:arial">EMBED </span>
                  <br/>
                  <textarea rows="4" cols="57" class="embeded-text"><iframe src="https://archive.org/embed/${this.sharedText}" width="500" height="140" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
                  </textarea>
                 </div>
                
                 <div style = "margin-top: 10px">
                  <span style="font-weight:bold;font-family:arial">EMBED (for wordpress.com hosted blogs and archive.org item <description> tags) </span><br/>
                  <textarea  rows="4" cols="57" class="embeded-text">[archiveorg ${this.sharedText} width=640 height=140 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]
                  </textarea>
                 </div>
               </div>
             ` :
                html ``}
          </div>
        </div>` :
            html `<p></p>`}
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], ScrubberBar.prototype, "show", void 0);
ScrubberBar = __decorate([
    customElement('socialshare-modal')
], ScrubberBar);
export default ScrubberBar;
//# sourceMappingURL=socialshare-modal.js.map