import { setupApp } from '../dist/index.js';

let appInstance;

export default async function handler(req, res) {
  if (!appInstance) {
    const { app } = await setupApp();
    appInstance = app;
  }
  
  return appInstance(req, res);
}