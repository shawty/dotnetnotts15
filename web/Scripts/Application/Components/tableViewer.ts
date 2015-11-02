import $ = require("jquery");
import ko = require("knockout");
import postbox = require("knockout.postbox");
import TableViewerTemplate = require("text!application/components/tableViewer.html");

class TableRow {
  
  constructor(inputRecord: any)
  {
    this.rowNumber = ko.observable<number>(inputRecord.rowNumber);
    this.name = ko.observable<string>(inputRecord.name);
    this.email = ko.observable<string>(inputRecord.email);
    this.userRole = ko.observable<string>(inputRecord.userRole);
  }

  public rowNumber: KnockoutObservable<number>;
  public name: KnockoutObservable<string>;
  public email: KnockoutObservable<string>;
  public userRole: KnockoutObservable<string>;

}

class TableViewerViewModel {

  constructor()
  {
    this.tableItems = ko.observableArray<TableRow>([]);

    this.load();
  }

  public tableItems: KnockoutObservableArray<TableRow>;

  public load()
  {
    $.ajax({
      type: "GET",
      url: "/tabledata/",

      success: data => {
        this.tableItems(ko.utils.arrayMap(data, item => new TableRow(item)));
        postbox.publish("tableLoaded");
      },

      error: xhr => {
        alert(`Error ${xhr.status} Occurred while loading table rows`);
      }

    });
  }

}

export = { viewModel: TableViewerViewModel, template: TableViewerTemplate }

