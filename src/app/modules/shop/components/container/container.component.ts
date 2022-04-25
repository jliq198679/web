import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'shop-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  
  }

  switchLang(lang: 'es' | 'en') {
    this.translate.use(lang);
  }

}
