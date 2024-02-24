import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Character {
  name: string;
  image: string;
  // Otros campos necesarios...
}

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {

  characters: Character[] = [];


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res => {
      console.log(res); 
      this.characters = res.results;
    })
  }

}
