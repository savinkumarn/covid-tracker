import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  configUrl: string = "https://covid19.mathdro.id/api/countries/";

  constructor(private http: HttpClient) {}

  public getCountries(): Observable<any> {
    return this.http.get(this.configUrl).pipe(map((data) => data["countries"]));
  }

  public getCountryDetails(country: string): Observable<any> {
    this.configUrl = "https://covid19.mathdro.id/api/";
    if (country != "GLOBAL") {
      this.configUrl += "countries/" + country;
    }
    return this.http.get(this.configUrl);
  }
}
