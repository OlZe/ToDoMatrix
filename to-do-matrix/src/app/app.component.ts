import { Component } from '@angular/core';
import { TitlebarService } from './model/titlebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public constructor(private titlebarService: TitlebarService) { }

  public getTitlebarText(): string {
    return this.titlebarService.getTitlebarText();
  }

}
