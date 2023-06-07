import { Component, Input } from '@angular/core';
import { scheduleModel } from "src/app/models";

@Component({
	selector: 'app-schedule-card',
	templateUrl: './schedule-card.component.html',
	styleUrls: ['./schedule-card.component.sass']
})
export class ScheduleCardComponent {
	@Input() schedule: scheduleModel
}
