import { AbstractService } from "./interface";

export { ConcreteService } from "./service";
export class ConcreteUseCase{
    constructor(private instance: AbstractService) { }
    use(x: string) {
        this.useInternal(x);
    }

    private useInternal(x: string) {
        this.instance.doSmth(x);
    }
}

