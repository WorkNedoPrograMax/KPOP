import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <label>Введіть вартість покупки:</label>
        <input [(ngModel)]="purchase" placeholder="Вартість" type="number">
        <button (click)="addPurchase()">Додати покупку</button>

        <h3>Список покупок:</h3>
        <ul>
            <li *ngFor="let item of purchases">{{ item }} грн</li>
        </ul>

        <h1>Загальна сума: {{ total }} грн</h1>
    `
})
export class AppComponent { 
    purchase: number = 0;
    purchases: number[] = [];
    total: number = 0;

    addPurchase() {
        if (this.purchase > 0) {
            this.purchases.push(this.purchase);
            this.total += this.purchase;
            this.purchase = 0; // скидаємо значення після додавання
        }
    }
}
