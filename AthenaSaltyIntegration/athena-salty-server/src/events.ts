import { Player } from 'alt-client';
import * as alt from 'alt-server';
import { PlayerEvents } from '../../../server/events/playerEvents';
import { ATHENA_EVENTS_PLAYER } from '../../../shared/enums/athenaEvents';

/* Unscripted Events
    alt.emit("SaltyChat:StartCall", player1, player2); // Starts a Phone Call between 2 Players
    alt.emit("SaltyChat:EndCall", player1, player2); // Ends a Phone Call between 2 Players
    alt.emit("SaltyChat:JoinRadioChannel", player, channelName, isPrimary) // Joins the radio channel with the given player
    alt.emit("SaltyChat:LeaveAllRadioChannel", player) // Leaves the radio channel with the given player
    alt.emit("SaltyChat:UpdateRadioTowers", radioTowersStr) // Updates the list of available radio towers.
*/ 

// Player Selected an Character -> Connect him to the specificied SaltyChat Channel.
PlayerEvents.on(ATHENA_EVENTS_PLAYER.SELECTED_CHARACTER, (player: alt.Player) => {
    alt.emit('SaltyChat:EnablePlayer', player)
});

// Player died -> Disable Microphone
PlayerEvents.on(ATHENA_EVENTS_PLAYER.DIED, (player: alt.Player) => {
    alt.emit('SaltyChat:SetPlayerAlive', player, false);
});

// Player spawned -> Reenable Microphone
PlayerEvents.on(ATHENA_EVENTS_PLAYER.SPAWNED, (player: alt.Player) => {
    alt.emit('SaltyChat:SetPlayerAlive', player, true);
});