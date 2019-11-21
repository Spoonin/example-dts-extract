
export declare class A{
    do(x: number) {                                     // <-- Why implementation here on package dependencies
        console.log(`A.do(${x})`);
    }
}

export declare interface AbstractService {
    doSmth(x: string): void;
}

export declare class ConcreteService implements AbstractService {
    doSmth(x: string): void {                           // <-- Why implementation here on package dependencies
        console.log(`Concrete.doSmth(${x})`);
    }    
}

export declare class ConcreteUseCase{
    constructor(private instance: AbstractService) { }  // <-- Why implementation here on package dependencies
    use(x: string) {                                    // <-- Why implementation here on package dependencies
        this.useInternal(x);
    }

    private useInternal(x: string) {                    // <-- Why implementation here on package dependencies
        this.instance.doSmth(x);
    }
}

export declare const CONFIG_A = "ABC";

export declare function doFunction(p: string): void;    // <-- On internal dependencies there's no implementation

export declare class SomeUtil { 
    doUtil(a: string): string;                          // <-- On internal dependencies there's no implementation
}

export { }
