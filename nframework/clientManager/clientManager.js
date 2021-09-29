var ClientManager=class{
    constructor(){
        this.clientSockets=[];
    }

    PushClient(client){
        this.clientSockets.push(client);
    }

    RemoveClient(client){
        var i = this.clientSockets.indexOf(client);
        this.clientSockets.splice(i,1);
    }

}


module.exports=ClientManager;