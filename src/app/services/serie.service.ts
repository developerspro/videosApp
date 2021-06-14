import { IListaSeries, ISerie } from './../models/ISerie.model';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  lingua = 'pt-BR';
  regiao = 'BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=10725e2b67db86d0cd44da9867d67b24';
  constructor(private http: HttpClient,public toastController: ToastController) { }

  buscarFilmes(busca: string): Observable<IListaSeries>{
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;
    return this.http.get<ISerie>(url).pipe(
      map(retorno => retorno),
      catchError(erro=>this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'erro ao consultar API',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }

}
