/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SHEET_JSON_URL?: string;
  readonly VITE_GOOGLE_SHEET_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
