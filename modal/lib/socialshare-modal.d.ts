import { LitElement, TemplateResult, CSSResult } from 'lit-element';
import './assets/img/shareicon';
import './assets/img/facebookicon';
import './assets/img/twittericon';
import './assets/img/redditicon';
import './assets/img/tumblricon';
import './assets/img/pineresticon';
import './assets/img/emailicon';
export default class ScrubberBar extends LitElement {
    static readonly properties: {
        title: {
            type: StringConstructor;
        };
        embeded: {
            type: StringConstructor;
        };
        sharedText: {
            type: StringConstructor;
        };
    };
    show: boolean;
    static readonly styles: CSSResult;
    constructor();
    handleCancel(): void;
    render(): TemplateResult;
}
