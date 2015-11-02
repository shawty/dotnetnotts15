define(["require", "exports", "knockout", "knockout.postbox", "text!application/components/buttonOneReciever.html"], function (require, exports, ko, postbox, ButtonOneRecieverTemplate) {
    var ButtonOneRecieverViewModel = (function () {
        function ButtonOneRecieverViewModel() {
            var _this = this;
            this.theMessage = ko.observable("I'm button one receiver");
            postbox.subscribe("buttonOneClicked", function (data) {
                _this.theMessage("Message recieved from button one");
                postbox.publish("inboundButtonMessage", "Button One Receiver");
            });
        }
        return ButtonOneRecieverViewModel;
    })();
    return { viewModel: ButtonOneRecieverViewModel, template: ButtonOneRecieverTemplate };
});
