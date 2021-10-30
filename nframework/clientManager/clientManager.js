class ClientManager {
    constructor(){
        this.clientSockets=[];
    }

    PushClient(client){
        this.clientSockets.push(client);
    }

    RemoveClient(client){
        let i = this.clientSockets.indexOf(client);
        this.clientSockets.splice(i,1);
    }

}


module.exports = new ClientManager;
