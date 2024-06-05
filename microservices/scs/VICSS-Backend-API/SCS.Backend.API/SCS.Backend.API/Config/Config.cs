namespace SCS_Backend_API.Config
{
    public class Config
    {
        private static string _DirectoryPath = Environment.CurrentDirectory;

        public static string FilesPath
        {
            get
            {
                return _DirectoryPath + "\\" + @"Files";
            }
        }

        public static string AttachmentFile
        {
            get
            {
                string filePath = FilesPath;

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }
                return filePath;
            }
        }
    }
}
