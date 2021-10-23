import { Config } from '@stencil/core';
import { appConfig } from './config';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/main.css',
  globalScript: 'src/main.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png}'
        ]
      },
      baseUrl: appConfig.baseUrl,
      copy: [
        {
          src: 'manifest.webmanifest'
        },
        {
          src: appConfig.userFile
        }
      ]
    }
  ]
};
