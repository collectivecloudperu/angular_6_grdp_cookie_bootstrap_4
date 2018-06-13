import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  nombre: string = 'Machu Pichu';
  ubicacion: string = 'Lima - Peru, Cuzco';
  lat: number = -13.1629791;
  lng: number = -72.5452277;
  zm: number = 18;
  sw: boolean = false;
  zc: boolean = false;
  zvc: boolean = false;

  cookieValue = 'UNKNOWN';
  constructor( private cookieService: CookieService ) { }

  ngOnInit(): void {
    this.cookieService.set( 'Cookie', 'GDPR' );
    this.cookieValue = this.cookieService.get('Cookie');
  }

  visible: boolean = true;

  //@Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  onGRDP() {
    this.visible = !this.visible;
      if (this.visible) {
        /*this.open.emit(null);
      } else {
        */
        this.close.emit(null);
      }
  }


}
