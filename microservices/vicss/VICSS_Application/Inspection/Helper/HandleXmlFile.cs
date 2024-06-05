using System.Xml.Serialization;

namespace VICSS.Service.Inspection.Helper
{
    public static class HandleXmlFile
    {
        public static T DeserializeFromXml<T>(string xml)
        {
            T result;
            XmlSerializer ser = new(typeof(T));
            using (TextReader tr = new StringReader(xml))
            {
                result = (T)ser.Deserialize(tr);
            }
            return result;
        }
    }
}
