/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly SCS_ENV: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }