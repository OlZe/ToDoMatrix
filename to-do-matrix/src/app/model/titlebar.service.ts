import { Injectable } from '@angular/core';

@Injectable()
export class TitlebarService {
    private title: string;

    public setTitlebarText(title: string) {
        this.title = title;
    }

    public getTitlebarText(): string {
        return this.title;
    }
}
