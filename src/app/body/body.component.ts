import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent  {

  @Input() collapse = false;
  @Input() screenWidth = 0;
  
  getBodyClass(): string  {
    let styleClass = '';
    if( this.collapse && this.screenWidth > 768){
      styleClass = "body-trimmed";
    }else if( this.collapse && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

}
