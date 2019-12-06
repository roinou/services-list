import { NgModule } from '@angular/core';
import { SensorsComponent } from './sensors.component';
import { SensorComponent } from './sensor/sensor.component';
import {NgxGaugeModule} from 'ngx-gauge';
import {CommonModule} from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		NgxGaugeModule
	],
  declarations: [SensorsComponent, SensorComponent],
  exports: [SensorsComponent, SensorComponent]
})
export class SensorsModule { }
