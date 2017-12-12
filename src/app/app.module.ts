import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SettingsComponent} from './settings/settings.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import {PhotoComponent, PhotoDialog} from './dashboard/photo/photo.component';
import {PhotoService} from './photo.service';
import { TaskComponent, TaskDialog } from './dashboard/task/task.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        SettingsComponent,
        NavbarComponent,
        CalendarComponent,
        PhotoComponent,
        PhotoDialog,
        TaskDialog,
        TaskComponent
    ],
    entryComponents: [
        PhotoDialog,
        TaskDialog
    ],
    exports: [
        MatDialogModule
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        HttpClientModule
    ],
    providers: [UserService, PhotoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
