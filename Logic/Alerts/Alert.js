export default class Alert{
    constructor(type,responder,description,audio,video,image,file){
        this.type=type;
        this.responder=responder;
        this.description=description;
        this.audio=audio;
        this.video=video;
        this.image=image;
        this.file=file;
    }

    create(){
        return this.type;
    }
    delete(){
        return this.responder;
    }

}