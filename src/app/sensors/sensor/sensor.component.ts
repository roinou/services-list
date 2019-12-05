import {Component, Input, OnInit} from '@angular/core';
import {Sensor} from '../sensor.model';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html'
})
export class SensorComponent implements OnInit {

  @Input('sensor') sensor: Sensor;

  constructor() { }

  ngOnInit() {
  }

}
