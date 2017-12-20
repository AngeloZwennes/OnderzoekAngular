import {TestBed, async} from '@angular/core/testing';

import {BrowserModule} from '@angular/platform-browser';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import {PhotoComponent} from './dashboard/photo/photo.component';
import { TaskComponent } from './dashboard/task/task.component';
import { FamilyComponent } from './dashboard/family/family.component';
import { GroceriesComponent } from './groceries/groceries.component';
import {GroceryService} from './grocery.service';
import { CalendarService } from './calendar.service';
import {APP_BASE_HREF} from "@angular/common";

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                LoginComponent,
                DashboardComponent,
                SettingsComponent,
                NavbarComponent,
                CalendarComponent,
                PhotoComponent,
                TaskComponent,
                FamilyComponent,
                GroceriesComponent
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
            providers: [{provide: APP_BASE_HREF, useValue : '/' },UserService,GroceryService, CalendarService]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
});
