import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    worktimes: any[];

    constructor() {
        this.worktimes = [];
        this.buildWorktimes();
    }

    buildWorktimes(): void {
        const weekdays = [
            {id: 1, name: 'Monday', times: []},
            {id: 2, name: 'Tuesday', times: []},
            {id: 3, name: 'Wednesday', times: []},
            {id: 4, name: 'Thursday', times: []},
            {id: 5, name: 'Friday', times: []},
            {id: 6, name: 'Saturday', times: []},
            {id: 0, name: 'Sunday', times: []},
            {id: 7, name: 'Holidays', times: []}
        ];

        weekdays.map((item) => {
            const weektime = item;
            this.worktimes.push(weektime);
        });
    }

    addTime(item: object): void {
        const time = {
            start: null,
            end: null
        };

        item.times.push(time);
    }

    save(): void {
        console.log(this.worktimes);
    }
}
