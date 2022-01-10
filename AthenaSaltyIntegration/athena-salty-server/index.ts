import * as alt from 'alt-server';
import { PluginSystem } from '../../server/systems/plugins';

import './src/events';

const SALTYCHAT = 'Athena SaltyChat Integration';
PluginSystem.registerPlugin(SALTYCHAT, () => {
    alt.log(`~lg~${SALTYCHAT} successfully loaded.`);
});