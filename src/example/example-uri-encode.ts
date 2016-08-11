import {Component} from "@angular/core";
import {UriEncodePipe} from "../pipes/uri-encode-pipe";

@Component({
  selector: 'uri-encode-example',
  pipes: [UriEncodePipe],
  template: `   
   <h1>{{ text | uriEncode }}</h1>   
   `,
})

export class UriEncodeExample {

  private text: string;

  constructor() {
    this.text = "http://yemot hama.co.il";
  }
}