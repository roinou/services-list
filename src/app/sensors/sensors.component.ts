import {Component, OnDestroy, OnInit} from '@angular/core';
import {IMqttMessage, MqttService} from 'ngx-mqtt';
import {Subscription} from 'rxjs';
import {Sensor} from './sensor.model';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  sensors = new Map<string, Sensor>();
  sensorNames: string[] = [];

  constructor(private _mqttService: MqttService) { }

  ngOnInit() {
    console.log('inside subscribe new topic');
    this.subscription = this._mqttService.observe('sensor').subscribe((message: IMqttMessage) => {
      //console.log('msg: ', message);
      this.registerReadings(JSON.parse(message.payload.toString()));
    });
    this._mqttService.unsafePublish('sensor/ctl', null);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private registerReadings(payload) {
    if (payload && payload.name && payload.data && payload.data.version) {
      if (!this.sensorNames.includes(payload.name)) {
        this.sensorNames.push(payload.name);
        this.sensorNames.sort((a,b) => a > b ? 1 : -1);
      }
      this.sensors.set(payload.name, payload.data);
    }
  }
}