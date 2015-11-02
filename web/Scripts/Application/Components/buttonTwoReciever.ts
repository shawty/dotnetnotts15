import ko = require("knockout");
import postbox = require("knockout.postbox");
import ButtonTwoRecieverTemplate = require("text!application/components/buttonTwoReciever.html");

class ButtonTwoRecieverViewModel {

  constructor()
  {
    this.theMessage = ko.observable<string>("I'm button two reciever");

    postbox.subscribe("buttonTwoClicked", (data) =>
    {
      this.theMessage("Message received from button two");
      postbox.publish("inboundButtonMessage", "Button Two Receiver");
    });
  }

  public theMessage: KnockoutObservable<string>;

}

export = { viewModel: ButtonTwoRecieverViewModel, template: ButtonTwoRecieverTemplate }
