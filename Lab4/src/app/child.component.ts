import { Input, Component, OnChanges } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `
        <div *ngIf="numbers.length > 0">
            <p>Середнє арифметичне кубів максимального та мінімального: {{ arithmeticMean }}</p>
            <p>Середнє геометричне модулів чисел: {{ geometricMean }}</p>
        </div>
        <div *ngIf="numbers.length === 0">
            <p>Введіть масив чисел у головному компоненті</p>
        </div>
    `
})
export class ChildComponent implements OnChanges { 
    @Input() numbers: number[] = [];
    arithmeticMean: number = 0;
    geometricMean: number = 0;

    ngOnChanges() {
        if (this.numbers.length > 0) {
            const max = Math.max(...this.numbers);
            const min = Math.min(...this.numbers);

            // Середнє арифметичне кубів максимального та мінімального
            this.arithmeticMean = (Math.pow(max, 3) + Math.pow(min, 3)) / 2;

            // Середнє геометричне модулів чисел
            const product = this.numbers.reduce((acc, num) => acc * Math.abs(num), 1);
            this.geometricMean = Math.pow(product, 1 / this.numbers.length);
        } else {
            this.arithmeticMean = 0;
            this.geometricMean = 0;
        }
    }
}
