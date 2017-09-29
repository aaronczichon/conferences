export class Car implements ICar {
    model: string;
    name: string;
    color: string;

    constructor(model: string, name: string, color: string) {
        this.model = model;
        this.name = name;
        this.color = color;
    }

    move(speed: number) {
        // Move
    }

    stop() {
        // Stop
    }
}


export interface ICar {
    model: string;
    name: string;
    color: string;

    move(speed: number);
    stop();
}