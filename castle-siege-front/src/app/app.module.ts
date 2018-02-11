import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import { UserDataService } from './data/user-data.service';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SecureComponent} from './secure/secure.component';
import {AdminComponent} from './secure/admin/admin.component';
import {CardCreatorComponent} from './secure/admin/card-creator/card-creator.component';
import {BaseDeckCreatorComponent} from './secure/admin/base-deck-creator/base-deck-creator.component';
import {UserManagementComponent} from './secure/admin/user-management/user-management.component';
import {MyCardsComponent} from './secure/my-cards/my-cards.component';
import {MyDecksComponent} from './secure/my-decks/my-decks.component';
import {MarketplaceComponent} from './secure/marketplace/marketplace.component';
import {QuickGameComponent} from './secure/quick-game/quick-game.component';
import {TournamentsComponent} from './secure/tournaments/tournaments.component';
import {UserSettingsComponent} from './secure/user-settings/user-settings.component';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { NavbarTopComponent } from './secure/components/navbar-top/navbar-top.component';
import { HomeComponent } from './secure/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/dist';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'secure', component: SecureComponent},
  {path: 'secure/admin', component: AdminComponent},
  {path: 'secure/admin/base-deck-creator', component: BaseDeckCreatorComponent},
  {path: 'secure/admin/card-creator', component: CardCreatorComponent},
  {path: 'secure/admin/user-managemet', component: UserManagementComponent},
  {path: 'secure/marketplace', component: MarketplaceComponent},
  {path: 'secure/my-cards', component: MyCardsComponent},
  {path: 'secure/my-decks', component: MyDecksComponent},
  {path: 'secure/quick-game', component: QuickGameComponent},
  {path: 'secure/tournaments', component: TournamentsComponent},
  {path: 'secure/user-settings', component: UserSettingsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SecureComponent,
    AdminComponent,
    CardCreatorComponent,
    BaseDeckCreatorComponent,
    UserManagementComponent,
    MyCardsComponent,
    MyDecksComponent,
    MarketplaceComponent,
    QuickGameComponent,
    TournamentsComponent,
    UserSettingsComponent,
    LoginComponent,
    NavbarTopComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
     AngularFontAwesomeModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
