using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJsExam.Startup))]
namespace AngularJsExam
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
