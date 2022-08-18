import { start } from './methods';

process.on('SIGTERM', () => {
  process.exit(0);
});

start();