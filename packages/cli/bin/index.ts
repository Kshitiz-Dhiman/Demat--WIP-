#!/usr/bin/env node

import { Command } from 'commander';
import { add } from './commands/add';

const program = new Command();

program
  .name('dematui')
  .version('1.0.0');

program
  .command('add')
  .argument('<component>', 'component to add')
  .action(add);

program.parse();
