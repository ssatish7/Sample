import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//  import {  FormGroup, FormControl ,FormBuilder } from '@angular/forms';
// import '@angular/compiler';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthGuard} from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
// import { MatTableDataSource } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    InfiniteScrollModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    MatPaginatorModule, MatCardModule,
    // MatTableDataSource,MatTableModule,

    //  Validators,
    //  FormBuilder, FormGroup, FormControl,
    RouterModule.forRoot([
      
      { path: '2ndpage', component: SecondPageComponent,canActivate: [AuthGuard]},
      { path:  'login'   ,component: LoginPageComponent,},
      {
        path: '',
    redirectTo: 'login',
    pathMatch: 'full'
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
