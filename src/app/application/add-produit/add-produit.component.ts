import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProduitsService } from "../produits.service";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  id:number;
  lib:String;

  constructor(private produitsService:ProduitsService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    console.log("identifiant: "+f.value['id']+", libelle: "+f.value['lib']);
    this.produitsService.addProduit(this.id,f.value['lib']);
  }

}
