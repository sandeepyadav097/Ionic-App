import { Component,  OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit  {
  quoteGroup: { category: string, quotes: Quote[] , icon:string}[];
  

  constructor (private navParams: NavParams ){}

    ngOnInit(){ 
    this.quoteGroup=this.navParams.data;
    }
  
  

}
