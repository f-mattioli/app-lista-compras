import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, 
  IonCol, IonRow, IonGrid, IonInput, IonItem, 
  IonList, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ItemCompra } from '../model/item-compra';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { checkmarkOutline, closeOutline } from 'ionicons/icons';
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

  constructor() {
    addIcons({ checkmarkOutline, closeOutline });
  }

  cadastrar() {
    this.lista.push(this.novoItem);
    this.novoItem = new ItemCompra();
  }

  toggleConcluido(i: ItemCompra) {
    i.compraRealizada = !i.compraRealizada;
  }

}
