import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, 
  IonCol, IonRow, IonGrid, IonInput, IonItem, 
  IonList, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ItemCompra } from '../model/item-compra';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { checkmarkOutline, closeOutline, trashBin } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, 
    IonCol, IonRow, IonGrid, IonInput, IonItem, IonList,
    IonButton, IonIcon,
    NgFor, NgIf, FormsModule],
})
export class HomePage {

  lista: ItemCompra[] = [];

  novoItem: ItemCompra = new ItemCompra();

  total: number = 0;

  proximoid: number = 1;

  constructor() {
    addIcons({ checkmarkOutline, closeOutline, trashBin });
  }

  cadastrar() {
    this.novoItem.id = this.proximoid++;
    this.lista.push(this.novoItem);

    this.novoItem = new ItemCompra();
  }

  toggleConcluido(i: ItemCompra) {
    i.compraRealizada = !i.compraRealizada;
    this.totalmente();
  
  }

  totalmente(){
    this.total=0;
    for (let i of this.lista){
      if(i.compraRealizada){
        if(i.precoUnitario !=null){
        this.total+= i.precoUnitario;
        }
      }
    }
  }
  
  deletar(i :ItemCompra){
    for(var x = 0 ; x<this.lista.length; x++){
      console.log(x);
      console.log(this.lista[x].id);
      console.log(i.id);
     if (this.lista[x].id == i.id){
       this.lista.splice(x,1);
       this.totalmente();
       break;
       

     }
    }
  }

}
