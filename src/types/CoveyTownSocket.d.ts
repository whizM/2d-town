/*
To avoid ripping-off the bandaid and switching to a proper multi-module workspace setup
we are sharing type definitions only, using tsconfig.json "references" to the shared project.
We still want to prevent relative package imports otherwise using ESLint, because importing anything
besides type declarations could become problematic from a compilation perspective.
*/

import { Socket } from 'socket.io-client';
/* eslint-disable import/no-relative-packages */
import { ClientToServerEvents, ServerToClientEvents } from './CoveyTownSockets';
/* eslint-disable import/no-relative-packages */
export * from './CoveyTownSockets';

export type CoveyTownSocket = Socket<ServerToClientEvents, ClientToServerEvents>;
