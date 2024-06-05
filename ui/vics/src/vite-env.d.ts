/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VICS_ENV: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }