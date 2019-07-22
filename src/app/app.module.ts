import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    FormsModule,RouterModule.forRoot([
      {path:"",component:LoginComponent},
      {path:"login",component:LoginComponent},
      
      {path:"product",component:ProductListComponent},
      
    ])],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
