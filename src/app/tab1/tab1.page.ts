import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titulo = 'Videos App';
  listaVideos: IFilme[] = [
    {
      nome: 'TakeDown',
      lancamento: '28/09/2004',
      duracao: '1h 36m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vQk9GLOjM7gAfqHdWWzt7emGP16.jpg',
      generos:['Thriller', 'Crime', 'Ação', 'Drama']

    },
    {
      nome: 'Ameaça Virtual',
      lancamento: '12/01/2001',
      duracao: '1h 48m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hWSyHulb0bNThDCRvJEFvWv4J2a.jpg',
      generos: ['Ação', 'Crime', 'Drama']
    },

  ];
  constructor(public alertController: AlertController,public toastController: ToastController) {}
  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos!',
      duration: 2000,
      color: 'kawasaki'

    });
    toast.present();
  }



}
