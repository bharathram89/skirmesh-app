const REGISTER = 0x01;
const QUERY    = 0x02;
const PAIR_UID = 0x03;
const CAPTURE  = 0x0A;
const MEDIC    = 0x0E;
const BOMB     = 0xBB;


export class DeviceSettings {

    id:             number;
    enabled:        boolean;
    address:        string;
    location:       string;
    medTime:        number;
    medic:          MedicSettings;
    bomb:           BombSettings;
    capture:        CaptureSettings;
    queryPlayer:    QueryPlayerSettings;
    registerPlayer: RegisterPlayer;

    constructor(
        id:             number,
        enabled:        boolean         = true,
        address:        string,
        location:       string,
        medTime:        number          = 6,
        medic:          MedicSettings,
        bomb:           BombSettings,
        capture:        CaptureSettings,
        registerPlayer: RegisterPlayer,
        queryPlayer:    QueryPlayerSettings
    ) {
        this.id             = id;
        this.enabled        = enabled;
        this.address        = address;
        this.location       = location;
        this.medic          = medic;
        this.medTime        = medTime;
        this.bomb           = bomb;
        this.capture        = capture;
        this.registerPlayer = registerPlayer;
        this.queryPlayer    = queryPlayer;
    }

    toJSON() {

        return {
            id:          this.id,
            enabled:     this.enabled,
            address:     this.address,
            location:    this.location,
            teamID:      this.registerPlayer.teamID,

            med_time:    this.medTime,
            // teamID:      this.registerPlayer.teamID,  TODO: Really need to get this in!
            config:      this.medic.enabled              ? MEDIC    :
                             this.capture.enabled        ? CAPTURE  :
                             this.bomb.enabled           ? BOMB     :
                             this.registerPlayer.enabled ? REGISTER :
                             this.queryPlayer.enabled    ? QUERY    :
                             CAPTURE,

            cap_time:    this.capture.cap_time,
            cap_asst:    this.capture.cap_asst,
            point_scale: this.capture.point_scale,
            allow_medic: this.capture.allow_medic,

            bomb_time:   this.bomb.bomb_time,
            arm_time:    this.bomb.arm_time,
            diff_time:   this.bomb.diff_time
        }

    }
}


export class MedicSettings {

    enabled: boolean;

    constructor(
        enabled: boolean
    ) {
        this.enabled = enabled;
    }
}


export class BombSettings {

    enabled:   boolean;
    arm_time:  number;
    bomb_time: number;
    diff_time: number;

    constructor(
        enabled:   boolean,
        arm_time:  number   = 1,
        bomb_time: number   = 12,
        diff_time: number   = 3
    ) {
        this.enabled   = enabled;
        this.arm_time  = arm_time;
        this.bomb_time = bomb_time;
        this.diff_time = diff_time;
    }
}


export class CaptureSettings {

    enabled:     boolean;
    cap_time:    number;
    cap_asst:    number;
    point_scale: number;
    allow_medic: boolean;

    constructor(
        enabled:     boolean,
        cap_time:    number   = 12,
        cap_asst:    number   = 5,
        point_scale: number   = 60,
        allow_medic: boolean  = true,
    ) {
        this.enabled     = enabled;
        this.cap_time    = cap_time;
        this.cap_asst    = cap_asst;
        this.point_scale = point_scale;
        this.allow_medic = allow_medic;
    }
}


export class RegisterPlayer {

    enabled: boolean;
    teamID:  number;

    constructor(
        enabled: boolean,
        teamID:  number,
    ) {
        this.enabled = enabled;
        this.teamID  = teamID;
    }
}


export class QueryPlayerSettings {

    enabled: boolean;

    constructor(
        enabled: boolean
    ) {
        this.enabled = enabled;
    }
}



export function makeDeviceModals(devices): DeviceSettings[] {

    let arr: DeviceSettings[]=[];

    devices.forEach(device => {
    // console.log(device,"exisitng config? ")
        let med   = new MedicSettings(device.allow_medic)
        let bmb   = new BombSettings(false,device.arm_time,device.bomb_time,device.diff_time)
        let cap   = new CaptureSettings(false,device.cap_time,device.cap_asst,device.point_scale,device.allow_medic)
        let query = new QueryPlayerSettings(false)
        let reg   = new RegisterPlayer(false,null)
        let ds    = new DeviceSettings(device.id,false,device.address,null,device.med_time,med,bmb,cap,reg,query)
        arr.push(ds)
    });

    return arr;
}


export function apiToUiModel(device){

    console.log("::apiToUiModel::",device)

    let med,cap,bomb,query,reg;

    med   = new MedicSettings(false)
    cap   = new CaptureSettings(false,device.cap_time,device.cap_asst,device.point_scale,device.allow_medic)
    bomb  = new BombSettings(false,device.arm_time,device.bomb_time,device.diff_time)
    query = new QueryPlayerSettings(false)
    reg   = new RegisterPlayer(false,device.teamID) //TODO: This needs to grab the teamID!!

    switch(device.config){

        case CAPTURE:
            cap.enabled   = true;
            break;
        case MEDIC:
            med.enabled   = true;
            break;
        case BOMB:
            bomb.enabled  = true;
            break;
        case QUERY:
            query.enabled = true;
            break;
        case REGISTER:
            reg.enabled   = true;
            break;
        default:
            cap.enabled   = true;
    }

    let id, loc, en, addr, medT;

    id = device.id;
    en = device.enabled;
    addr = device.address;
    loc = device.location;
    medT = device.med_time;

    let ds = new DeviceSettings(id,en,addr,loc,device.med_time,med,bomb,cap,reg,query)

    return ds;
}
