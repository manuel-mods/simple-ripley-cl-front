import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [NgbModule, CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, LazyLoadImageModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
