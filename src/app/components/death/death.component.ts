import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-death",
  templateUrl: "./death.component.html",
  styleUrls: ["./death.component.css"],
})
export class DeathComponent implements OnInit {
  @Input()
  deathInput: string;
  constructor() {}

  ngOnInit(): void {}
}
