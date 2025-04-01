import { AuthService } from '../../services/auth.service';
import {ChangeDetectorRef, ViewChild, Component, Injectable, OnInit, TemplateRef,  signal} from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
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
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-booking-excursions',
  templateUrl: './booking-excursions.component.html',
  styleUrl: './booking-excursions.component.scss',
  standalone: false
})
export class BookingExcursionsComponent implements OnInit {
  @ViewChild(ModalDirective, { static: true }) modal?: ModalDirective;
  screenWidth?: any;
  screenHeight?: any;
  modalRef?: BsModalRef;
  messages?: string[];
  selectedDate: FormControl;
  selectedInfo?: DateSelectArg;
  calendarVisible = signal(true);
  calendarOptions = signal<CalendarOptions>({
    aspectRatio: 1,
    dayMaxEvents: true,
    editable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: '' //'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    height: '100vh',
    hiddenDays: [1],
    initialView: 'dayGridMonth',
    locale: ruLocales,
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    select: this.handleDateSelect.bind(this),
    selectMirror: true,
    selectable: true,
    slotDuration: '01:00:00',
    slotMaxTime: '18:00:00',
    slotMinTime: '10:00:00',
    themeSystem: 'bootstrap5',
    weekends: true,
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
  handleDateSelect(selectInfo: DateSelectArg ){
    this.selectedDate.setValue(selectInfo.startStr);
    console.log(this.selectedDate.value);
    this.showModal();
    /**
     * this.modalRef = this.modalService.show(viewUserTemplate);
     */

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
  // tslint:disable-next-line:typedef
  showModal() {
    this.messages = [];
    this.modal?.show();
  }
  handler = (type: string, $event: ModalDirective) => {
    if ( type === 'onShow' ) {
      console.log();
    }
  }
  ngOnInit(): void {
      this.selectedDate = new FormControl();
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
  }
}
