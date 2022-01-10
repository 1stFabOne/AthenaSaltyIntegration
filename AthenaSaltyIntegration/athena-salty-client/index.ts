import * as alt from 'alt-client';
import { showNotification } from '../../client/utility/notification';
import * as native from 'natives';

/* Unscripted Events (CLIENT) - From Voice Resource
    alt.on("SaltyChat:RadioChanged", (radioChannel, isPrimary) => {}) // Updates about the current radio channels.
    alt.on("SaltyChat:StateChanged", (gameInstanceState, microphoneState, speakerState) => {}) // Updates about the plugin and TeamSpeak States.
*/

/* Unscripted Events (CLIENT) - To Voice Resource 
    alt.emit("SaltyChat:PlaySound", fileName, loop, handle) // Plays a sound from the clients sound pack.
    alt.emit("SaltyChat:StopSound", handle) // Stops a sound played by SaltyChat:PlaySound
    alt.emit("SaltyChat:SetRadioVolume", volume) // Sets the volume of the clients radio.
    alt.emit("SaltyChat:ToggleRadioSpeaker") // Toggles the clients radio speaker.
    alt.emit("SaltyChat:UseRadio", primaryRadio, isSending) // Starting or ending the radio transmission on the primary or secondary channel.
    alt.emit("SaltyChat:UseMegaphone", isSending) // Enables or disables the clients megaphhone.
*/

alt.on('keydown', (key) => {
    if(key === 220) {
        alt.emit('SaltyChat:ToggleRange');
    }
});

alt.on('SaltyChat:VoiceRangeChanged', (range: number, index: number) => {
    showNotification(`New Voice Range is: ${range}`);
    native.drawMarker(1, alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z, 0, 0, 0, 0, 0, 0, range*2, range*2, 0.2, 52, 152, 102, 255, false, false, 2, false, undefined, undefined, false);
});