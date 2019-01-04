export class ConfigurationProperty<T>{

    public readonly Value: T | undefined;

    private readonly propertyPrefix: string = "REACT_APP_";

    constructor(private name: string, private wholeName: boolean = false) {
        const propertyName = this.wholeName ? this.name : `${this.propertyPrefix}${this.name}`;
        if(process.env[propertyName] !== undefined){
            this.Value = (process.env[propertyName] as unknown) as T;
        }
        else {
            this.Value = undefined;
        }
    }
}