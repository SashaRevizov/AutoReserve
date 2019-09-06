import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatPaginatorModule, MatSelectModule, MatMenuModule} from '@angular/material';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { RulesComponent } from './rules/rules.component';
import { RulesBComponent } from './rulesB/rulesB.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ConciergeServiceComponent } from './concierge-service/concierge-service.component';
import { PomoshchVDorogeComponent } from './pomoshch-v-doroge/pomoshch-v-doroge.component';
import { OrendaComponent } from './orenda/orenda.component';
import { OptionsComponent } from './options/options.component';
import { GoProComponent } from './options/go-pro/go-pro.component';
import { DostavkaComponent } from './options/dostavka/dostavka.component';
import { KresloComponent } from './options/kreslo/kreslo.component';
import { NavigatorComponent } from './options/navigator/navigator.component';
import { InternetComponent } from './options/internet/internet.component';
import { KievComponent } from './kiev/kiev.component';
import { AdminComponent } from './admin/admin.component';
import { CarsComponent } from './admin/cars/cars.component';
import { AddCarComponent } from './admin/add-car/add-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterseptor } from 'src/assets/services/token-interseptor.service';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProcessComponent } from './admin/process/process.component';
import {CarouselModule} from 'primeng/carousel';
import { AceptComponent } from './acept/acept.component';


@NgModule({
   declarations: [
      AppComponent,
      LayoutComponent,
      HomeComponent,
      RulesComponent,
      RulesBComponent,
      ContactsComponent,
      ConciergeServiceComponent,
      PomoshchVDorogeComponent,
      OrendaComponent,
      OptionsComponent,
      GoProComponent,
      DostavkaComponent,
      KresloComponent,
      NavigatorComponent,
      InternetComponent,
      KievComponent,
      AdminComponent,
      CarsComponent,
      AddCarComponent,
      AdminLayoutComponent,
      ProcessComponent,
      AceptComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatSelectModule,
      BrowserAnimationsModule,
      MatMenuModule,
      MatButtonModule,
      SlickCarouselModule,
      NgbPaginationModule,
      NgbAlertModule,
      MatPaginatorModule,
      ReactiveFormsModule,
      HttpClientModule,
      CarouselModule
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         multi: true,
         useClass: TokenInterseptor
       }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
