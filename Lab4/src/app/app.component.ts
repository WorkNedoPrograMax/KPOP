import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    numbers: number[] = [];
    inputString: string = '';

    processInput() {
        // Перетворюємо рядок чисел на масив
        this.numbers = this.inputString.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    }
}
