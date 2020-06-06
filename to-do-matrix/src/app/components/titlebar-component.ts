import { Component } from '@angular/core';
import { TitlebarService } from '../model/titlebar.service';

@Component({
    selector: 'app-titlebar',
    templateUrl: './titlebar.component.html'
})
export class TitlebarComponent {

    public constructor(private titlebarService: TitlebarService) { }

    public getTitlebarText(): string {
        return this.titlebarService.getTitlebarText();
    }
}
