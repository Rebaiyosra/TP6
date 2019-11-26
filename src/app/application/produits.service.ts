import { Injectable } from '@angular/core';
import { Produit } from './Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  products =new Array(
    new Produit(15, 'montre'),
    new Produit(32, 'cartable'),
    new Produit(45, 'cahier'),
    new Produit(96, 'tablier')
  );

  public getProduitById(id:number){
    for (let i=0; i<this.products.length;i++){
      if (this.products[i].id==id) 
    return this.products[i];
  return null; 
  }}
  

  public addProduit(id: number, libelle:string){

    if(this.getProduitById(id)==null) 
    {
          let p=new Produit(id,libelle)
      this.products.push(p);
      return true;
    }
  return false;
    };

 constructor() { }

}
