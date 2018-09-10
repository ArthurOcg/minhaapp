import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  contactPage = ContactPage;

  constructor(public navCtrl: NavController, public actionSheetController: ActionSheetController, public alertController: AlertController ) {

  }

  mostrarActionSheet() {
    const actionSheet = this.actionSheetController.create({
      title: 'Lista de Ações',
      buttons: [
        {
          text: 'Opção 1',
          handler: () => {
            console.log('Opção 1');
          }
        },{
          text: 'Opção 2',
          handler: () => {
            console.log('Opção 2');
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });
    actionSheet.present();
  }


  Alerta() {
    const alert = this.alertController.create({
      title: 'Titulo!',
      subTitle: 'Subtitulo!',
      buttons: ['OK']
    });
    alert.present();
  }

}

