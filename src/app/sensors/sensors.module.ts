import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsComponent } from './sensors.component';
import { SensorComponent } from './sensor/sensor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SensorsComponent, SensorComponent],
  exports: [SensorsComponent, SensorComponent]
})
export class SensorsModule { }
