using MinimalTS.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MinimalTS.ApiControllers
{
    public class SomeDataController : ApiController
    {
        [HttpPost]
        public IHttpActionResult FirstTest(TestPayload data)
        {
            List<DataStorage> list = new List<DataStorage>();
            list.Add(new DataStorage { Id = 7, SomeNumber = 12 });
            list.Add(new DataStorage { Id = 22, SomeNumber = 42.5F });

            return Json(list, JsonHelper.JavaScriptJsonSerializerSettings);
        }
    }

    public class DataStorage
    {
        public int Id { get; set; }
        public float SomeNumber { get; set; }
    }

    public class TestPayload
    {
        public int Id { get; set; }
        public string SomeValue { get; set; }
    }
}
