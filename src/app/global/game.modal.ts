import { DeviceSettings, makeDeviceModals } from 'node.modal';

export class GameSettings {

    id           : number;
    startTime    : Date;
    endTime      : Date;
    isPaused     : boolean;
    gameConfigID : number;

    devices      : DeviceSettings;

    constructor(
        id           : number,
        startTime    : boolean,
        endTime      : Date,
        isPaused     : Date,
        gameConfigID : number,

        devices      : DeviceSettings()
    ) {
        this.id           = id;
        this.startTime    = startTime;
        this.endTime      = endTime;
        this.isPaused     = isPaused;
        this.gameConfigID = gameConfigID;
        this.devices      = makeDeviceModals(devices);
    }

    toJSON() {

        return {
            id           : this.id,
            startTime    : this.enabled,
            endTime      : this.address,
            is_paused    : this.isPaused,
            gameConfigID : this.gameConfigID,

            devices      : this.devices
        }

    }
}
