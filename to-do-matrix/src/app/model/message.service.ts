import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class MessageService {
    private readonly SNACKBAR_DURATION = 2000;

    public constructor(private snackBar: MatSnackBar) { }

    public displayMessage(message: string) {
        this.openSnackBar(message);
    }

    public displayMessageWithUndoAction(message: string, afterUndoMessage: string, undoFn: () => void) {
        const snackBarRef = this.openSnackBar(message, 'Undo');
        snackBarRef.onAction().subscribe(() => {
            undoFn();
            this.openSnackBar(afterUndoMessage);
        });
    }

    private openSnackBar(message: string, action?: string): MatSnackBarRef<SimpleSnackBar> {
        return this.snackBar.open(message, action, { duration: this.SNACKBAR_DURATION });
    }
}
