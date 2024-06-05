interface IEnviromentVariables {
    SCS_ENV : string;
    SCS_BASE_URL : string;
}

interface Window {
    _env_ : IEnviromentVariables;
}