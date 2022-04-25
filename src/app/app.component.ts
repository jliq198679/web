import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'web';

  constructor(public translate: TranslateService) {
    this.langInit();
  }

  private langInit() {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.translate.use('en').subscribe(()=>{
      this.translate.use('es')
    })
    
  }
}
