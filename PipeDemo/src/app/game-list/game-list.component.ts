import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {


  today: number = Date.now();

  pageTitle = 'Dynamic! Game List';
  imageWidth = 45;
  imageMargin = 1;
  showImage = true;
  searchKeyWord = '';
  games = [
    {
      "gameId": 1,
      "gameName": "Castlevania",
      "gameCode": "AAA-0101",
      "releaseDate": "September 26, 1986",
      "description": "Action-adventure game series created and developed by Konami.",
      "price": 19.99554,
      "thumbRating": 5.0,
      "imageUrl": "./assets/images/castlevania.jpg"
    },
    {
      "gameId": 2,
      "gameName": "Dr Mario",
      "gameCode": "AAA-1100",
      "releaseDate": "July 27, 1990",
      "description": "Action puzzle game produced by Gunpei Yokoi and published by Nintendo.",
      "price": 15.99,
      "thumbRating": 3,
      "imageUrl": "./assets/images/drmario.png"
    },
    {
      "gameId": 3,
      "gameName": "Kid Icarus",
      "gameCode": "AAA-0048",
      "releaseDate": "December 19, 1986",
      "description": "Kid Icarus revolves around protagonist Pit's quest for three sacred treasures.",
      "price": 20.99,
      "thumbRating": 4,
      "imageUrl": "./assets/images/kidicarus.png"
    },
    {
      "gameId": 4,
      "gameName": "Legend Of Zelda",
      "gameCode": "AAA-0049",
      "releaseDate": "February 21, 1986",
      "description": "Link is often given the task of rescuing Princess Zelda and the kingdom of Hyrule from Ganon.",
      "price": 29.95,
      "thumbRating": 5,
      "imageUrl": "./assets/images/Legend Of Zelda.jpg"
    },
    {
      "gameId": 7,
      "gameName": "Super Mario Bros",
      "gameCode": "AAA-3325",
      "releaseDate": "September 13, 1985",
      "description": "Mario finds power-ups and items that give him special magic powers such as fireball-throwing and size-changing into giant and miniature sizes.",
      "price": 40.95,
      "thumbRating": 5,
      "imageUrl": "./assets/images/Bros.jpg"
    }
  ];



  constructor() { }

  ngOnInit() {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
}



}
