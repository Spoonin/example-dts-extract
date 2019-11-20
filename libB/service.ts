import { AbstractService } from "./interface";

export class ConcreteService implements AbstractService {
    doSmth(x: string): void {
        console.log(`Concrete.doSmth(${x})`);
    }    
}