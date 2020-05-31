import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
    selector: 'app-eisenhower-matrix',
    templateUrl: './eisenhower-matrix.component.html'
})
export class EisenhowerMatrixComponent {
    @Input() public tasksToPlot: Task[];
    @Output() public dragOnMatrix = new EventEmitter<{ importance: number, urgency: number }>();
    private isDragging = false;

    public getXForTask(task: Task): number {
        // Scale 0-100 to 3-98
        return Math.ceil(((task.urgency / 100) * 95) + 3);
    }

    public getYForTask(task: Task): number {
        // Scale 0-100 to 2-65
        const importance = 100 - task.importance; // negate because higher importance is a lower Y-value
        return Math.floor(((importance / 100) * 63) + 2);
    }

    public onMousedown(event: MouseEvent) {
        window.addEventListener('mouseup', this.onMouseup);
        this.isDragging = true;
        this.dragOnMatrix.next(this.calcImportanceUrgencyFromDragEvent(event));
    }

    public onMousemove(event: MouseEvent) {
        if (this.isDragging) {
            this.dragOnMatrix.next(this.calcImportanceUrgencyFromDragEvent(event));
        }
    }

    public onMouseup = (event: MouseEvent) => {
        window.removeEventListener('mouseup', this.onMouseup);
        this.isDragging = false;
    }

    private calcImportanceUrgencyFromDragEvent(event: MouseEvent): { importance: number, urgency: number } {
        const target: SVGRectElement = event.target as SVGRectElement;
        const dimensions = target.getBoundingClientRect();
        const width = dimensions.width;
        const height = dimensions.height;
        const x = event.clientX - dimensions.left;
        const y = event.clientY - dimensions.top;

        // Scale (0 - width) to (0 - 100)
        const urgency = Math.round((x / width) * 100);
        // Scale (0 - height) to (0 - 100)
        const invertedY = height - y;
        const importance = Math.round((invertedY / height) * 100);
        return { importance, urgency };
    }
}
