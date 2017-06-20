import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }

  getHeroes(): void{
  	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
  	this.getHeroes();
	}
}
