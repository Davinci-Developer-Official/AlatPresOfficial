export default class Members{
    constructor(name,number,idnumber,role){
        this.name=name;
        this.number=number;
        this.idnumber=idnumber;
        this.role=role;
    }

    create(){
        return this.name;
    }

    join(){
        return this.number;
    }
    delete(){
        return this.idnumber;
    }
}