import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { ServinteFrameworkUiBasicInformationComponent } from './servinte-framework-ui-basic-information.component';

@NgModule({
  declarations: [ServinteFrameworkUiBasicInformationComponent],
  imports: [
    HttpClientModule
  ],
  exports: [ServinteFrameworkUiBasicInformationComponent]
})
export class ServinteFrameworkUiBasicInformationModule { }
