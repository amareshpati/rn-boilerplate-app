// src/config/env.ts
//
// Central accessor for all environment variables.
// All other files should import from here — never import react-native-config directly.
//
// To add a new variable:
//   1. Add it to .env, .env.example, and .env.local
//   2. Declare it in the NativeConfig interface in src/types/global.d.ts
//   3. Expose it here with a sensible fallback

import Config from 'react-native-config';

export const ENV = {
    /** Base URL for all API requests.  */
    API_BASE_URL: Config.API_BASE_URL,

    /** Current app environment. */
    APP_ENV: (Config.APP_ENV) as 'development' | 'staging' | 'production',
} as const;
