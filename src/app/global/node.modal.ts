


// export class APITOUIDeviceSettings {
//   deviceSettings:DeviceSettings;

//   private REGISTER = 0x01;
//   private QUERY = 0x02;
//   private PAIR_UID = 0x03;
//   private CAPTURE = 0x0A;
//   private MEDIC = 0x0E;
//   private BOMB = 0xBB;

//   constructor(
//     enabled: boolean,
//     address: string,
//     id: number,
//     location: string,
//     config: number,
//     arm_time: number,
//     bomb_time: number,
//     diff_time: number,
//     cap_time: number,
//     cap_asst: number,
//     point_scale: number,
//     allow_medic: boolean,
//   ) {
//     let med:MedicSettings;
//     let bomb:BombSettings;
//     let cap:CaptureSettings;
//     let reg:RegisterPlayer;
//     let query:QueryPlayerSettings;
//     if(config == this.MEDIC){
//       med = new MedicSettings(true,'')//no team for now for medic
//     }else{
//       med = new MedicSettings(false,null)
//     }

//     if(config == this.BOMB){
//       bomb = new BombSettings(true,arm_time,bomb_time,diff_time)
//     }else{
//       bomb = new BombSettings(false,null,null,null)
//     }

//     if(config == this.CAPTURE){
//       cap = new CaptureSettings(true,cap_time,cap_asst,point_scale,allow_medic)
//     }else{
//       cap = new CaptureSettings(false,null,null,null,null)

//     }

//     if(config == this.REGISTER){
//       reg = new RegisterPlayer(true,'')
//     }else{
//       reg = new RegisterPlayer(false,null)
//     }

//     if(config == this.QUERY){
//       query = new QueryPlayerSettings(true,'')
//     }else{
//       query = new QueryPlayerSettings(false,null)
//     }


//     this.deviceSettings= new DeviceSettings(enabled,address,location,'',med,bomb,cap,reg,query);

//   }
// }

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
    team:    string;

    constructor(
        enabled: boolean,
        team:    string
    ) {
        this.enabled = enabled;
        this.team    = team;
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
