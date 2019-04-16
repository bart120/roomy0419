import { NgModule } from '@angular/core';
import { DevisePipe } from './devise.pipe';

@NgModule({
  declarations: [DevisePipe],
  exports: [DevisePipe]
})
export class PipeModule { }
