function Telephone(name) {
    this.name = name;
    this.pin = Math.floor(Math.random() * 101);
    this.memoryDraf = [];
    this.memoryInbox = [];
    this.memorySent = [];
    this.status = true;
    this.message;

    this.isTurnOn = function () {
        this.pinLoss();
        return this.status;
    }

    this.turnOnOff = function () {
        this.pinLoss();
        this.status = !this.status;
    }

    this.chargePin = function (pin) {
        this.pin = pin;
    }

    this.createMessage = function (drafMess) {
        this.pinLoss();
        this.message = drafMess;
        this.memoryDraf.push(drafMess);
    }

    this.receiveMess = function (message) {
        this.pinLoss();
        this.memoryInbox.push(message);
    }

    this.sendMess = function (toPhone) {
        this.pinLoss();
        toPhone.receiveMess(this.message);
        this.message = "";
        // this.drafMess.pull();
    }

    this.showAllMessage = function () {
        for (var i = 0; i < this.memoryInbox.length; i++) {
            document.write(this.memoryInbox[i] + "<br>");
        }
    }

    this.pinLoss = function () {
        this.pin--;
    }
}


var nokia = new Telephone("Nokia 9101");
var iPhone = new Telephone("iPhone XS");


nokia.createMessage("Hello iPhone XS From Nokia 9101");
nokia.sendMess(iPhone);
iPhone.showAllMessage();

iPhone.createMessage("Hello Nokia From Iphone");

iPhone.sendMess(nokia);
iPhone.createMessage("I am Iphone");
iPhone.sendMess(nokia);
nokia.showAllMessage();