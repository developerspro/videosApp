import { IRegistrar } from './../models/IRegistrar.Model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  nome: string;
  cpf: string;
  datanasc: string;
  genero: number;
  email: string;
  senha: string;
  confsenha: string;
  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  doRegistrar() {
    if (this.senha === this.confsenha) {
      console.log(this.confsenha);
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
