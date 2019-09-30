import { Component, OnInit, Input } from '@angular/core';
import { AufzaehlungService } from './aufzaehlung.service';

@Component({
  selector: 'app-aufzaehlung',
  templateUrl: './aufzaehlung.component.html',
  styleUrls: ['./aufzaehlung.component.scss']
})
export class AufzaehlungComponent implements OnInit {
  @Input() werteListe: string[];

  constructor(private aufzaehlungService: AufzaehlungService) {}

  ngOnInit() {
    this.aufzaehlung = this.aufzaehlungService.getValues();
  }

  aufzaehlung = ['Leer'];
}
