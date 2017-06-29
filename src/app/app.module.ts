import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FavorisPage } from '../pages/favoris/favoris';
import { PreferencePage } from '../pages/preference/preference';
import { TrailerPage } from '../pages/trailer/trailer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TodoListComponent } from '../components/todo-list/todo-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrailerPage,
    LoginPage,
    FavorisPage,
    PreferencePage,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrailerPage,
    LoginPage,
    FavorisPage,
    PreferencePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
