import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() url: string= '';
  id: string = '';
  character: any = {};
  
  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId['id'];     
    });
    this.getCharacter(this.id);
  }

  getCharacter(id: string): any {
     this.charactersService.getSelectedCharacter(id)
        .subscribe((resp: any) => {
          this.character = resp;
          console.log(this.character);
          
          });   
  }

}
