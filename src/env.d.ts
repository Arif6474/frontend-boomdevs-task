// src/env.d.ts or @types/env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_APP_BACKEND_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  