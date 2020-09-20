import { Component, OnInit } from '@angular/core';
import { Vinho } from '../../model/vinho';

@Component({
  selector: 'vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;
  constructor() { }

  ngOnInit(): void {
    this.vinhos = new Array<Vinho>();
    this.vinhos.push(this.criarVinho('Canção','Cabernet','Tinto Seco', 'Bella Via',
    2020,'Brasil'))
    this.vinhos.push(this.criarVinho('Canção2','Suave','Tinto de Mesa', 'Bella Via',
    2020,'Brasil'))
  }

    private criarVinho(nome: string, uva: string, classification: string,
                       fabricante: string, anoSafra: number,
                       paisOrigem: string): Vinho {
        let vinho = new Vinho();
        vinho.nome = nome;
        vinho.classification = classification;
        vinho.paisOrigem = paisOrigem;
        vinho.anoSafra = anoSafra;
        vinho.fabricante = fabricante;
        vinho.uva = uva;

        return vinho;

    }

}
