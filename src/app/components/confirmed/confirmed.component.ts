import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-confirmed",
  templateUrl: "./confirmed.component.html",
  styleUrls: ["./confirmed.component.css"],
})
export class ConfirmedComponent implements OnInit {
  @Input()
  confirmedInput: string;
  constructor() {}

  ngOnInit(): void {}
}
