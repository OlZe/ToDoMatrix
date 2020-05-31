import { Component } from '@angular/core';
import { TitlebarService } from '../model/titlebar.service';

@Component({
    templateUrl: './overview.component.html'
})
export class OverviewComponent {

    public constructor(titlebarService: TitlebarService) {
        titlebarService.setTitlebarText('Overview');
    }
}
