namespace SCS_Backend_API.Data
{
    public class WaiverData
    {
        public string Waiver()
        {
            List<string> data = new List<string>()
        {
            "This vehicle is under the scheme of exam fee waiver 'VEF2020'",
            "This vehicle is under the scheme of subsciption 'VEF54'",
            "This vehicle is under the scheme of subscription 'VEF300'",
            "This vehicle is under the scheme of subscription 'VEF8969'",
            "This vehicle is eligible to exam fee waiver 'VEF2020'",
            "This vehicle is eligible to exam fee waiver 'VEF50'",
            "This vehicle is eligible to exam fee waiver 'VEF80'",
            "This vehicle is eligible to exam fee waiver 'VEF100'",

        };
            Random random = new Random();
            int randomIndex = random.Next(0, data.Count);
            return data[randomIndex];
        }
    }
}
