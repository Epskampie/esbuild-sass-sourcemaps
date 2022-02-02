#!/usr/bin/env node
import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

esbuild
    .build({
      plugins: [
        sassPlugin({
          loadPaths: [ 'scss_utils', ],
        }),
      ],
      outdir: 'dist',
      entryPoints: [
        'src/with_use.scss',
        'src/without_use.scss',
      ],
      sourcemap: true,
      metafile: true,
    })
    .catch((e) => console.error('esbuild', e.message));