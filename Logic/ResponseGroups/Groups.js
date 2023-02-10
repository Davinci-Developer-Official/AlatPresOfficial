
export default class Groups{
    constructor(groupname,hotlinenumber,purpose,category){
        this.groupname=groupname;
        this.hotlinenumber=hotlinenumber;
        this.purpose=purpose;
        this.category=category;
    }

    create(){
        return 'shoot';
    }

    join(){
        return this.hotlinenumber;
    }
    delete(){
        return this.purpose;
    }
}