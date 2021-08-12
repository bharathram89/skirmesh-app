import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalModule } from './global/global.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig, SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { UserServiceService } from 'src/service/user-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { HttpErrorInterceptor } from './helpers/httpconfig.interceptor';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { AppService } from 'src/service/app.service';

const config: SocketIoConfig = { url: 'https://api.skirmesh.net', options: {} };

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    NgxGoogleAnalyticsModule.forRoot('Eau3tLmNdfqfQ9_oxjjmGa6QDfnPqRqQNppovPKIqNo'),
    NgxGoogleAnalyticsRouterModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    Meta,

    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    UserServiceService,
    AppService,
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '348781009877452'
            )
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '98485917851-59rpr54k2aeunme72jmhkpe625hjl3d1.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
