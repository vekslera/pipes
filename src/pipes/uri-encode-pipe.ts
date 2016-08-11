/*
Written by: Alex Veksler
On: 08/11/2016, 21:00
Pipe which turns a string into a valid URI address
*/

import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'uriEncode'
})

export class UriEncodePipe implements PipeTransform{

  transform(value:string):string {
    return typeof value == "string" ? encodeURI(value) : value;
  }

}