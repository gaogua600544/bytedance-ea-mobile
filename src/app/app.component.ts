import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastComponent, ToastService } from 'ngx-weui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Bytedance-ea-mobile';

  option: any;
  @ViewChild('success') successToast: ToastComponent;
  constructor(public srv: ToastService) {
  }
  ngOnInit(){
    
  }

}
