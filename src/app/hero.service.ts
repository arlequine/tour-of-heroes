import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    console.log(localStorage.getItem('heroes'))
    if (localStorage.getItem('heroes')) {
      let arrHeroes: any = localStorage.getItem('heroes')
      return JSON.parse(arrHeroes)
    } else {
      this.saveData('heroes', HEROES)
      return HEROES
    }
  }

  saveData(key: string, value: Hero[]) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
