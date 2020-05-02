import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ConfirmedComponent } from "./components/confirmed/confirmed.component";
import { DeathComponent } from "./components/death/death.component";
import { RecoveredComponent } from "./components/recovered/recovered.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CountrydropdownComponent } from "./components/countrydropdown/countrydropdown.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfirmedComponent,
    DeathComponent,
    RecoveredComponent,
    FooterComponent,
    CountrydropdownComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
