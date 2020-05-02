import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-countrydropdown",
  templateUrl: "./countrydropdown.component.html",
  styleUrls: ["./countrydropdown.component.css"],
})
export class CountrydropdownComponent implements OnInit {
  countries: string[];
  confirmed: number;
  recovered: number;
  death: number;
  lastUpdated: Date;
  selectedCountry: string = "GLOBAL";

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.countries = [];
    this.getCountries();
    this.getGlobalInformation();
  }

  getCountries() {
    this.service.getCountries().subscribe((countries) => {
      countries.forEach((country) => {
        this.countries.push(country.name);
      });
    });
  }

  getGlobalInformation() {
    this.service.getCountryDetails(this.selectedCountry).subscribe((data) => {
      this.confirmed = data.confirmed.value;
      this.death = data.deaths.value;
      this.recovered = data.recovered.value;
      this.lastUpdated = data.lastUpdate;
      console.log(data);
    });
  }

  countryChanged() {
    this.service.getCountryDetails(this.selectedCountry).subscribe((data) => {
      this.confirmed = data.confirmed.value;
      this.death = data.deaths.value;
      this.recovered = data.recovered.value;
      this.lastUpdated = data.lastUpdate;
    });
  }
}
