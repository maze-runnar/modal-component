import { css } from 'lit-element';
export default () => {
    return css `
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
};
//# sourceMappingURL=socialshare-modal.js.map