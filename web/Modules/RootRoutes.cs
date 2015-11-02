using System.Collections.Generic;
using Nancy;

namespace web.Modules
{
  public class RootRoutes:NancyModule
  {
    public RootRoutes()
    {
      Get["/"] = Index;
      Get["/tabledata/"] = TableData;
    }

    private dynamic Index(dynamic parameters)
    {
      string viewName = "home/index";

      Context.ViewBag.ViewName = viewName;
      return View[viewName];
    }

    private dynamic TableData(dynamic parameters)
    {
      var results = new List<TableRow>
      {
        new TableRow()
        {
          RowNumber = 1,
          Name = "Peter Shaw",
          Email = "shawty.d.ds@googlemail.com",
          UserRole = "Developer"
        },
        new TableRow()
        {
          RowNumber = 2,
          Name = "John Smith",
          Email = "j.smith@anemail.com",
          UserRole = "Marketeer"
        },
        new TableRow()
        {
          RowNumber = 3,
          Name = "Jane Doe",
          Email = "janedoe@yahoo.com",
          UserRole = "Human Resources Manager"
        },
        new TableRow()
        {
          RowNumber = 4,
          Name = "Alan Person",
          Email = "a.person@anemail.com",
          UserRole = "Accountant"
        }
      };

      return Response.AsJson(results);
    }

  }

  public class TableRow
  {
    public int RowNumber { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string UserRole { get; set; }
  }

}