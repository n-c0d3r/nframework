class NFramework {
    constructor() {}

    IOConnectToServer() {
        const socket = io();
        this.socket=socket;
    }
}

let app = new NFramework();

window.NFramework = app;
