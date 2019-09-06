import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
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
import { AddCarComponent } from './admin/add-car/add-car.component';
import { CarsComponent } from './admin/cars/cars.component';
import { Auth } from 'src/assets/classes/Auth';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProcessComponent } from './admin/process/process.component';
import { AceptComponent } from './acept/acept.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {path: '', component: HomeComponent},
        {path: 'rules', component: RulesComponent},
        {path: 'rulesBusiness', component: RulesBComponent},
        {path: 'contacts', component: ContactsComponent},
        {path: 'concierge-service', component: ConciergeServiceComponent},
        {path: 'pomoshch-v-doroge', component: PomoshchVDorogeComponent},
        {path: 'arenda-gruzovogo-transporta', component: OrendaComponent},
        {path: 'options', component: OptionsComponent},
        {path: 'options/go-pro', component: GoProComponent},
        {path: 'options/dostavka-podbor-avto', component: DostavkaComponent},
        {path: 'options/detskoe-avtokreslo', component: KresloComponent},
        {path: 'options/prokat-gps-navigatora', component: NavigatorComponent},
        {path: 'options/internet', component: InternetComponent},
        {path: 'kiev', component: KievComponent},
        {path: 'kiev/reserv/:id', component: AceptComponent},
        
        {path: 'admin', component: AdminComponent}
    ]
  },
  {path: '', component: AdminLayoutComponent, canActivate: [Auth], children:[
    {path: 'admin/add', component: AddCarComponent},
    {path: 'admin/process', component: ProcessComponent},
    {path: 'admin/process/:id', component: ProcessComponent},
    {path: 'admin/car', component: CarsComponent},
    {path: 'admin/car/:id', component: CarsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
