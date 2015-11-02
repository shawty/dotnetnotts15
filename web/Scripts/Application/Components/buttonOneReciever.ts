import ko = require("knockout");
import postbox = require("knockout.postbox");
import ButtonOneRecieverTemplate = require("text!application/components/buttonOneReciever.html");

class ButtonOneRecieverViewModel {

  constructor()
  {
    this.theMessage = ko.observable<string>("I'm button one receiver");

    postbox.subscribe("buttonOneClicked", (data) =>
    {
      this.theMessage("Message recieved from button one");
      postbox.publish("inboundButtonMessage", "Button One Receiver");
    });
  }

  public theMessage: KnockoutObservable<string>;

}

export = { viewModel: ButtonOneRecieverViewModel, template: ButtonOneRecieverTemplate }

