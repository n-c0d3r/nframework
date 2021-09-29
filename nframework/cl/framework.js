var NFramework=class{
    constructor(){
        
    }

    IOConnectToServer(){
        var socket = io();
        this.socket=socket;
    }

}

var app=new NFramework();

window.NFramework=app;