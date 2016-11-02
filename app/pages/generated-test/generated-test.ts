import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConnectionService} from './../../providers/connection-service/connection-service';

@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html',
})

export class GeneratedTestPage {
  constructor(private nav: NavController, private connectionService: ConnectionService) {}

  buscarCep(cep: string) : void {
    this.connectionService.getCep(cep.toString())
      .then((resp) => {
        let json = resp.json();
        console.log(json.localidade);
      }).catch((err) => {
        console.log(err);
      })
  }

  onBlur(cep: string) : void {
    console.log(cep);
  }

}
