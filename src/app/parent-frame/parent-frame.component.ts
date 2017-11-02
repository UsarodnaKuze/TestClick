import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-frame',
  templateUrl: './parent-frame.component.html',
  styleUrls: ['./parent-frame.component.css']
})
export class ParentFrameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  parentEvent() {
    console.log('woow');
    document.querySelector('iframe').contentDocument.querySelector('button').dispatchEvent(new MouseEvent('click'));
  }

}
