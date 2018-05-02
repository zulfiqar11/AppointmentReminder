import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-edit',
  templateUrl: './reminder-edit.component.html',
  styleUrls: ['./reminder-edit.component.css']
})
export class ReminderEditComponent implements OnInit {

  pageTitle : string = "Reminder Edit";
  constructor() { }

  ngOnInit() {
  }

}
