interface IEnviromentVariables {
    VICS_ENV : string;
    VICS_BASE_URL : string;
    Inspection_Service_Url: string;
}

interface Window {
    _env_ : IEnviromentVariables;
}