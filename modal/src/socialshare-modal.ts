import {
  LitElement,
  html,
  css,
  customElement,
  property,
  PropertyValues,
  TemplateResult,
  CSSResult,

} from 'lit-element';

import './assets/img/shareicon';



@customElement('socialshare-modal')
export default class ScrubberBar extends LitElement  {

static get properties() {
  return {
    title: { type: String }, //adding dynamic title via props
    embeded: { type: String },
    sharedText: {type:String},
  };
}

@property( { type : Boolean }  ) show = false;

static get styles() {
    return css`
      p {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 500;
        color: green
      }
      .modal {
      display:block;
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      }

      /* Modal Content */
      .modal-content {
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 40%;
      border-radius: 8px;

      }

      .close:hover{
        background-color: black;
        cursor:pointer;
      }
      .close {
      border-radius: 50%;
      border: none; 
      background-color:#6d7075;
      color:white
      }

      .share {
      border:none;
      background-color:white;
      }
      .share:hover {
      cursor:pointer;
      opacity: 0.7;
      }

      .embeded-text {
        color:white;
        background-color: #727375;
        border-radius:5px;
        font-family:arial;
        font-size:15px
      }
    `;
  }


constructor() {
  super(); 
}

handleCancel(){
  this.show = false;
}


	render() {
    return html`
      <div>  
      <div style ="text-align:center">
    		<button  @click = "${() =>  this.show = true }" class="share">
          <icon-hamburger></icon-hamburger>
        </button>
      </div>
        ${this.show ?
         html`
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
            <button style = "border:none;background-color:white" class ="share">
              <image src="https://www.pngitem.com/pimgs/m/250-2509449_twiter-twitter-icon-transparent-hd-png-download.png" width="63px">
            </button>
            <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank">
              <image src="https://cdn.freebiesupply.com/logos/large/2x/facebook-icon-logo-png-transparent.png" width="50px">
            </a>
            <button style = "border:none;background-color:white" class="share">
              <image src="https://toppng.com/uploads/preview/reddit-logo-reddit-icon-115628658968pe8utyxjt.png" width="50px">
            </button>
             <button style = "border:none;background-color:white" class="share">
              <image src="https://www.sharethis.com/wp-content/uploads/2017/05/Tumblr.png" width="50px">
            </button>
            <button style = "border:none;background-color:white" class="share">
              <image src="https://i.ya-webdesign.com/images/pinterest-logo-png-transparent-background-3.png" width="50px">
            </button>
            <button style = "border:none;background-color:white" class="share">
              <image src="https://pluspng.com/img-png/email-icon-png-download-icons-logos-emojis-email-icons-2400.png" width="50px">
            </button>
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
             `:
             html``}


          </div>

        </div>` : 
        html`<p></p>`
        }
      </div>
    `;
   
  }

}
