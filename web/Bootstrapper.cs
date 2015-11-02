using Nancy;
using Nancy.Bootstrapper;
using Nancy.Conventions;
using Nancy.TinyIoc;

namespace web
{
  public class Bootstrapper : DefaultNancyBootstrapper
  {
    protected override void ConfigureConventions(NancyConventions nancyConventions)
    {
      base.ConfigureConventions(nancyConventions);

      Conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("/scripts", @"scripts"));
      Conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("/styles", @"styles"));
      Conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("/images", @"images"));
      Conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("/fonts", @"fonts"));

      Conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddFile("/requirejs", @"scripts/require.js"));
      Conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddFile("/requireconfig", @"scripts/application/require.config.js"));
    }

    protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
    {
      base.ApplicationStartup(container, pipelines);

      pipelines.AfterRequest += context =>
      {
        if (string.IsNullOrEmpty(context.ViewBag.ViewName))
        {
          context.ViewBag.ViewNamePresent = false;
        }
        else
        {
          context.ViewBag.ViewName = "~/scripts/application/views/" + context.ViewBag.ViewName + ".js";
          context.ViewBag.ViewNamePresent = true;
        }
      };
    }

    protected override void RequestStartup(TinyIoCContainer container, IPipelines pipelines, NancyContext context)
    {
      base.RequestStartup(container, pipelines, context);

      //CORS Enable
      pipelines.AfterRequest.AddItemToEndOfPipeline((ctx) =>
      {
        ctx.Response.WithHeader("Access-Control-Allow-Origin", "*") // <-- You probably don't want to use * here if you care about security :-)
                    .WithHeader("Access-Control-Allow-Methods", "POST,GET")
                    .WithHeader("Access-Control-Allow-Headers", "Accept, Origin, Content-type");

      });

    }

  }

}
