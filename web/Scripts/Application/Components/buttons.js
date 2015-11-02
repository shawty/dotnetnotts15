define(["require", "exports", "knockout", "knockout.postbox", "text!application/components/buttons.html"], function (require, exports, ko, postbox, ButtonsTemplate) {
    var ButtonsViewModel = (function () {
        function ButtonsViewModel(params) {
            this.aTextItem = ko.observable(params.aTextItem);
            this.aNumberItem = ko.observable(params.aNumberItem);
            postbox.subscribe("inboundButtonMessage", function (data) {
                alert("I got a reply from " + data);
            });
            postbox.subscribe("tableLoaded", function () {
                alert("Message from buttons (Table has loaded)");
            });
        }
        ButtonsViewModel.prototype.buttonHandlerOne = function () {
            postbox.publish("buttonOneClicked");
        };
        ButtonsViewModel.prototype.buttonHandlerTwo = function () {
            postbox.publish("buttonTwoClicked");
        };
        return ButtonsViewModel;
    })();
    return { viewModel: ButtonsViewModel, template: ButtonsTemplate };
});
