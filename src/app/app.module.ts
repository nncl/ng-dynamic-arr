import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxCpfCnpjModule } from 'ngx-cpf-cnpj';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgxCpfCnpjModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
