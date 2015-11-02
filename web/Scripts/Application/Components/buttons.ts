import ko = require("knockout");
import postbox = require("knockout.postbox");
import ButtonsTemplate = require("text!application/components/buttons.html");

class ButtonsViewModel {

  constructor(params)
  {
    this.aTextItem = ko.observable<string>(params.aTextItem);
    this.aNumberItem = ko.observable<number>(params.aNumberItem);

    postbox.subscribe("inboundButtonMessage", (data) =>
    {
      alert("I got a reply from " + data);
    });

    postbox.subscribe("tableLoaded", () => {
      alert("Message from buttons (Table has loaded)");
    });

  }

  public aTextItem: KnockoutObservable<string>;
  public aNumberItem: KnockoutObservable<number>;

  public buttonHandlerOne() {
    postbox.publish("buttonOneClicked");
  }

  public buttonHandlerTwo() {
    postbox.publish("buttonTwoClicked");
  }

}

export = { viewModel: ButtonsViewModel, template: ButtonsTemplate }

