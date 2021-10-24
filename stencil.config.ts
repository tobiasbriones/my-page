import { Config } from '@stencil/core';
import { appConfig, Mode, mode } from './config';

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
      copy: getCopy()
    }
  ],
  env: {
    routerRoot: appConfig.routerRoot,
    baseUrl: appConfig.baseUrl,
    userFile: appConfig.userFile
  }
};

function getCopy() {
  const copy = [
    {
      src: 'manifest.webmanifest'
    }
  ];

  // The file dev.user.json is used for dev mode only
  // For production the file should be served on its own
  if (mode === Mode.DEV) {
    copy.push({
      src: appConfig.userFile
    });
  }
  return copy;
}
