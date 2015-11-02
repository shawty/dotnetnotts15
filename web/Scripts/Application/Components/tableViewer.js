define(["require", "exports", "jquery", "knockout", "knockout.postbox", "text!application/components/tableViewer.html"], function (require, exports, $, ko, postbox, TableViewerTemplate) {
    var TableRow = (function () {
        function TableRow(inputRecord) {
            this.rowNumber = ko.observable(inputRecord.rowNumber);
            this.name = ko.observable(inputRecord.name);
            this.email = ko.observable(inputRecord.email);
            this.userRole = ko.observable(inputRecord.userRole);
        }
        return TableRow;
    })();
    var TableViewerViewModel = (function () {
        function TableViewerViewModel() {
            this.tableItems = ko.observableArray([]);
            this.load();
        }
        TableViewerViewModel.prototype.load = function () {
            var _this = this;
            $.ajax({
                type: "GET",
                url: "/tabledata/",
                success: function (data) {
                    _this.tableItems(ko.utils.arrayMap(data, function (item) { return new TableRow(item); }));
                    postbox.publish("tableLoaded");
                },
                error: function (xhr) {
                    alert("Error " + xhr.status + " Occurred while loading table rows");
                }
            });
        };
        return TableViewerViewModel;
    })();
    return { viewModel: TableViewerViewModel, template: TableViewerTemplate };
});
