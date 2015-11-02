define(["require", "exports", "knockout"], function (require, exports, ko) {
    ko.components.register('buttons', {
        require: "application/components/buttons"
    });
    ko.components.register('buttononereciever', {
        require: "application/components/buttononereciever"
    });
    ko.components.register('buttontworeciever', {
        require: "application/components/buttontworeciever"
    });
    ko.components.register('tableviewer', {
        require: "application/components/tableviewer"
    });
    ko.applyBindings();
});
