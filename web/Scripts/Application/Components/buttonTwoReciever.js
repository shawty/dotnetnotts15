define(["require", "exports", "knockout", "knockout.postbox", "text!application/components/buttonTwoReciever.html"], function (require, exports, ko, postbox, ButtonTwoRecieverTemplate) {
    var ButtonTwoRecieverViewModel = (function () {
        function ButtonTwoRecieverViewModel() {
            var _this = this;
            this.theMessage = ko.observable("I'm button two reciever");
            postbox.subscribe("buttonTwoClicked", function (data) {
                _this.theMessage("Message received from button two");
                postbox.publish("inboundButtonMessage", "Button Two Receiver");
            });
        }
        return ButtonTwoRecieverViewModel;
    })();
    return { viewModel: ButtonTwoRecieverViewModel, template: ButtonTwoRecieverTemplate };
});
