import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleService extends IMensagem {

  constructor() {
    super();
  }
  info(mensagem: string): void {
    console.log("Informação: ", mensagem);
  }
  sucesso(mensagem: string): void {
    console.log("Sucesso: ", mensagem);
  }
  erro(mensagem: string): void {
    console.log("Erro: ", mensagem);
  }
}
