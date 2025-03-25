import { AuthService } from '../../services/auth.service';
import {ChangeDetectorRef, Component, Injectable, OnInit, signal} from '@angular/core';
import { SessionStorage, SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import ruLocales from '@fullcalendar/core/locales/ru';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-booking-excursions',
  templateUrl: './booking-excursions.component.html',
  styleUrl: './booking-excursions.component.scss',
  standalone: false
})
export class BookingExcursionsComponent implements OnInit {
  modalRef?: BsModalRef;
  calendarVisible = signal(true);
  calendarOptions = signal<CalendarOptions>({
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    locale: ruLocales,
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
   // eventClick: this.handleEventClick.bind(this),
   /// eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  });
  currentEvents = signal<EventApi[]>([]);
  // tslint:disable-next-line:typedef
  handleDateSelect(selectInfo: DateSelectArg){
    //this.modalRef = this.modalService.show('viewTemplate');

   /* const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: '1',
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }*/
  }
  constructor(private changeDetector: ChangeDetectorRef, private modalService: BsModalService) {
     }
  ngOnInit(): void {

  }
}
