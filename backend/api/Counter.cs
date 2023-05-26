using Newtonsoft.Json;


namespace Company.Function
{
    public class Counter
    {
        [JsonProperty(PropertyName ="id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName ="count")]
        public int Count { get; set; }

        [JsonProperty(PropertyName = "likes")]
        public int Likes { get; set; }
    }
}