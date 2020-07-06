import { Component } from '@angular/core';
// IMPORTAMOS EL SERVICIO DE TRADUCCIONES PARA HACER USO DE EL
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lenguajes01';

  // ESTO ES LO QUE AÑADIMOS
  selectedLanguage = 'en';

  constructor(private translateService: TranslateService) {
      this.translateService.setDefaultLang(this.selectedLanguage);
      this.translateService.use(this.selectedLanguage);
  }

  selectLanguage(lang: string) {
      this.translateService.use(lang);
  }
  // HASTA AQUÍ
}
