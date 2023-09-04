import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarintoComponent } from './components/navbarinto/navbarinto.component';
import { LoginComponent } from './components/login/login.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { UsersComponent } from './components/users/users.component';
import { ModalPasswordComponent } from './components/modal-password/modal-password.component';
import { ServicesComponent } from './components/services/services.component';
import { QRCodeModule } from 'angularx-qrcode';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContentsComponent } from './components/contents/contents.component';
import { GuideComponent } from './components/guide/guide.component';
import { GuideContentsComponent } from './components/guide-contents/guide-contents.component';
import { SafePipe } from './safe.pipe';
import { StartComponent } from './components/start/start.component';
import { MenuinsideComponent } from './components/menuinside/menuinside.component';
import { ShareComponent } from './components/share/share.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { AcknowledgmentsComponent } from './components/acknowledgments/acknowledgments.component';
import { CommunityComponent } from './components/community/community.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    NavbarintoComponent,
    LoginComponent,
    SubmenuComponent,
    UsersComponent,
    ModalPasswordComponent,
    ServicesComponent,
    CategoriesComponent,
    ContentsComponent,
    GuideComponent,
    GuideContentsComponent,
    SafePipe,
    StartComponent,
    MenuinsideComponent,
    ShareComponent,
    ProfileComponent,
    ChatComponent,
    AcknowledgmentsComponent,
    CommunityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
