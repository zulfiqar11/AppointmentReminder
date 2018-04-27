import { Appointment } from './../../Models/appointment';
import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[]

  constructor(private appointmentsService : AppointmentsService) {  }

  ngOnInit() {
    this.appointments = this.appointmentsService.getAppointments();
  }

}
