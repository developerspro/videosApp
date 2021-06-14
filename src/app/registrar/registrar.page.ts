import { DadosService } from './../services/dados.service';
import { IRegistrar } from '../models/IRegistrar.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  titulo = 'Registre-se';
  /*nome: string;
  cpf: string;
  datanasc: string;
  genero: number;
  email: string;
  senha: string;
  confsenha: string;
*/
  confsenha: string;
  senha: string;
  registro: IRegistrar;
  constructor(public toastController: ToastController, private route: Router, public dadosService: DadosService) { }

  ngOnInit() {

  }

  doRegistrar() {
    console.log('LOG:'+this.registro);
    if (this.senha === this.confsenha) {
      this.dadosService.guardarDados(this.registro.cpf, this.registro);
      this.route.navigateByUrl('login');
      console.log(this.registro);
      console.log('senha ok');

    } else {
      console.log('erro');
      this.presentToast('Senhas não conferem', 'danger');
    }
  }
  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000,
      color: cor,


    });
    toast.present();
  }

  doCancelar() {
    this.route.navigateByUrl('login');
  }
}
