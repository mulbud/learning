using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MinimalTS.Helpers
{
    public class JsonHelper
    {
        public static JsonSerializerSettings JavaScriptJsonSerializerSettings { get; } =
            new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

    }
}