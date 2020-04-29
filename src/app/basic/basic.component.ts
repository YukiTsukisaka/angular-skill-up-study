import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  /** 表示/非表示 */
  isShow  : boolean

  /** 都市 */
  cities = ['東京', '名古屋', '大阪'];

  constructor() { }

  ngOnInit() {
  }

  /**
   * 表示/非表示切り替え
   */
  show() {
    this.isShow = !this.isShow;
  }

}
