import * as functions from 'firebase-functions';

const universal = require(`${process.cwd()}/../dist/server`).run();
export const ssr = functions.https.onRequest(universal);
