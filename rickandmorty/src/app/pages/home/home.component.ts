import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import {  Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pages: number | undefined;
  characters: any[] = [];
  favs: any[]= [];
  isFav: boolean = false;
  count: Number[] =[];
  isInFavs: boolean = false;

  constructor(
    private charactersService: CharactersService,
    private loginService: LoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getCharacters('1');
  }

  getCharacters(page: string): any {
    if(this.characters.length > 0) this.characters = [];

    this.charactersService.getAllCharacters(page)
      .subscribe((resp: any) => {
        this.pages = resp.info.pages;
        if(this.pages) this.arrayOfNumbers(this.pages);

        resp.results.forEach((element: any) => {
          this.characters.push(element);
        });
        console.log(this.characters);
      });      
  }

  favorite(id: string, ev: any): void {
    let inFavs = this.favs.filter(el => el.id === id);
   
    let item = this.characters.filter(item => item.id===id); 

    if(inFavs.length === 0) this.favs.push(item[0]);       
        
    if (ev.target.attributes.src.value === '/assets/icons/heart.png') {
        ev.target.attributes.src.value = '/assets/icons/red-heart.png'}
    else {
        ev.target.attributes.src.value = '/assets/icons/heart.png';
    }
    
    inFavs = [];
  } 
  isInFavorites(id: string) {
    let checkArr = this.favs.filter(el => el.id === id);
    if(checkArr.length ===0) this.isInFavs = true;
    else this.isInFavs = false;
    return this.isInFavs;
  }
 

  arrayOfNumbers(num: Number): void {
    this.count = Array(num).fill(0).map((x,i)=>i+1);   
  }

  getPage(numPage:Number): void {
    this.getCharacters(numPage.toString());
  }

  logout(): void {
    this.loginService.logout();
    this.route.navigate(['/']);
  }

}
