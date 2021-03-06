import { GeneroService } from './../services/genero.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';
import { IFilmeApi, IListaFilmes } from '../models/IFilmeAPI.model';
import { DadosService } from '../services/dados.service';
import { FilmeService } from '../services/filme.service';
import { IGenero } from '../models/IGenero.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{
  titulo = 'Filmes';
  listaVideos: IFilme[] = [
    {
      nome: 'TakeDown',
      lancamento: '28/09/2004',
      duracao: '1h 36m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vQk9GLOjM7gAfqHdWWzt7emGP16.jpg',
      generos: ['Thriller', 'Crime', 'Ação', 'Drama'],
      pagina: '/takedown'

    },
    {
      nome: 'Ameaça Virtual',
      lancamento: '14/09/1995',
      duracao: '1h 47m',
      classificacao: 63,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1K6Y6leZwe18BydZxbkN2wvQRvA.jpg',
      generos: ['Ação', 'Crime', 'Drama'],
      pagina: '/antitrust'
    },
    {
      nome: 'Hackers: Piratas de Computador',
      lancamento: '12/01/2001',
      duracao: '1h 48m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hWSyHulb0bNThDCRvJEFvWv4J2a.jpg',
      generos: [ 'Ação', 'Crime', 'Thriller', 'Drama' ],
      pagina: ''
    },
    {
      nome: 'Revolution OS',
      lancamento: '01/01/2001 ',
      duracao: '1h 25m',
      classificacao: 67,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h7oBhsEsiHUgZ1uflyqBafB6SoB.jpg',
      generos: [ 'Documentário', 'Comédia' ],
      pagina: ''
    },
    {
      nome: 'Steve Jobs',
      lancamento: '14/01/2016',
      duracao: '2h 2m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lCzMkFxRE9IolEKSJBt2LlyQCg0.jpg',
      generos: [ 'Drama', 'História' ],
      pagina: ''
    },

  ];
  listaFilmes: IListaFilmes;
  generos: string[] = [];
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router,
  ) { }


  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
         this.listaFilmes = dados;
      });
    }
  }
  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }
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

  ngOnInit() {
    this.generoService.buscarGeneros().subscribe(dados => {
      dados.genres.forEach((genero => {
        this.generos[genero.id] = genero.name;
      }));
    });
    this.dadosService.guardarDados('generos', this.generos);
}

}
