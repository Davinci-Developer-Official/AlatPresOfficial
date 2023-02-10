export default class Providers{
    constructor(name,number){
        this.name=name;
        this.number=number;
        
    }

    create(){
        return this.name;
    }

    join(){
        return this.number;
    }
    
}