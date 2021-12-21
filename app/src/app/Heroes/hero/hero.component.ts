import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})

export class HeroComponent {
    title = "Hero component work";

    name = "Iron Man";
    armon = "Mark 45";

    getNameHero(): string{
        return this.name + " - "+ this.armon;
    }
    
    get NameHero(){
        return this.armon.toUpperCase();
    }
}