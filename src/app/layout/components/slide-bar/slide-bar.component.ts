import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.less']
})
export class SlideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  baidu() {
    window.open("https://www.baidu.com", "_blank")
  }

  openGithub() {
      window.open("https://github.com/dennyy666/manage-angular", "_blank")
  }

  jumpNotFound() {
    
  }


}
