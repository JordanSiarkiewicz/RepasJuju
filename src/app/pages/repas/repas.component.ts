import { Component } from '@angular/core';

class Menu {
  date: string;
  entree: string;
  plat: string;
  produitLaitier: string;
  dessert: string;

  constructor(date: string, entree: string, plat: string, produitLaitier: string, dessert: string){
    this.date = date;
    this.entree = entree;
    this.plat = plat;
    this.produitLaitier = produitLaitier;
    this.dessert = dessert;
  }
}

@Component({
  selector: 'app-repas',
  standalone: true,
  imports: [],
  templateUrl: './repas.component.html',
  styleUrl: './repas.component.css'
})
export class RepasComponent {

  menu : Menu = {
    date: "",
    entree: "",
    plat: "",
    produitLaitier: "",
    dessert: "",
  }

menuList : Menu[] = [
  {
    date: "23/10/2024",
    entree: "Taboulé BIO",
    plat: "Saucisse de Strasbourg (ou végétale) / Choucroute et pomme de terre vapeur",
    produitLaitier: "Pont l'evêque AOP",
    dessert: "Crème dessert saveur chocolat"
  },

  {
    date: "24/10/2024",
    entree: "Salade iceberg aux dès de fromage vinaigrette à l'ail",
    plat: "Sauté de boeuf sauce milanaise ( ou Filet de Hoki MSC sauce milanaise ) / TORSADE BIO",
    produitLaitier: "Fromage blanc aux fruits",
    dessert: "Fruit de saison"
  },

  {
    date: "25/10/2024",
    entree: "Potage légumes",
    plat: "Chili sin carne (Maïs, haricots rouges,tomate, carottes) / Riz de Camargue IGP",
    produitLaitier: "Coulommiers",
    dessert: "Muffin"
  },

  {
    date: "28/10/2024",
    entree: "Carottes régionales râpées",
    plat: "Lasagne au thon",
    produitLaitier: "Yaourt nature sucré",
    dessert: "Pomme HVE"
  },

  {
    date: "29/10/2024",
    entree: "Chou rouge régional râpé aux pommes",
    plat: "Boulettes de boeuf façon hongroise ( ou Boulettes végétales + sauce ) / Macaronis BIO",
    produitLaitier: "Gouda BIO",
    dessert: "Flan nappé carame"
  },

  {
    date: "30/10/2024",
    entree: "Haricots verts BIO vinaigrette",
    plat: "Omelette aux herbes Ketchup / Frites",
    produitLaitier: "Emmental BIO",
    dessert: "Fruit de saison"
  },

  {
    date: "01/11/2024",
    entree: "Potion magique du chaudron ( Velouté de potiron )",
    plat: "Sauté de la sorcière ( Sauté de dinde sauce curry et lait de coco ) ou Filet de colin MSC / Gratin ensorcelé ( Gratin de carottes et pomme de terre régionales )",
    produitLaitier: "La part de la souris ( Mimolette )",
    dessert: "Gâteau du chat noir ( Donut au chocolat )"
  },
]

todayMenu: any;

  constructor() {}

  ngOnInit(): void {
    const today = new Date();
    const todayStr = today.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    this.todayMenu = this.menuList.find(menu => menu.date === todayStr);
  }

}
