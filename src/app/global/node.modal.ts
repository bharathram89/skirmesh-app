
export class DeviceSettings {
    enabled:boolean;
    address: string;
    location: string;
    medic: MedicSettings;
    bomb: BombSettings;
    capture: CaptureSettings;
    queryPlayer:QueryPlayerSettings;
    registerPlayer:RegisterPlayer;
    config:string;
    constructor(
      enabled:boolean,
      address: string,
      location: string,
      medic: MedicSettings,
      bomb: BombSettings,
      capture: CaptureSettings,
      registerPlayer:RegisterPlayer,
      queryPlayer:QueryPlayerSettings
    ) {
        this.enabled =enabled;
      this.address = address;
      this.location = location;
      this.medic = medic;
      this.bomb = bomb;
      this.capture = capture;
      this.registerPlayer = registerPlayer;
      this.queryPlayer = queryPlayer;
    }
  }
  export class MedicSettings {
    enabled:boolean;
    team: string;
    constructor(
        enabled:boolean,
      team: string
    ) {
        this.enabled =enabled;
      this.team = team;
    }
  }
  export class BombSettings {
    enabled:boolean;
    arm_time: number;
    bomb_time: number;
    diff_time: number;
    constructor(
        enabled:boolean,
        arm_time: number,
        bomb_time: number,
        diff_time: number
    ) {
        this.enabled =enabled;
      this.arm_time = arm_time;
      this.bomb_time = bomb_time;
      this.diff_time = diff_time;
    }
  }
  export class CaptureSettings {

    enabled:boolean;
    cap_time: number;
    cap_asst: number;
    point_scale: number;
    allow_medic: boolean;
    constructor(
        enabled:boolean,
        cap_time: number,
        cap_asst: number,
        point_scale: number,
        allow_medic: boolean,
    ){
        this.enabled =enabled;
      this.cap_time = cap_time;
      this.cap_asst = cap_asst;
      this.point_scale = point_scale;
      this.allow_medic = allow_medic;
    }
  }
  export class RegisterPlayer {
    enabled:boolean;
    team:string;
    constructor(
      enabled:boolean,
    team: string
  ) {
      this.enabled =enabled;
    this.team = team;
  }
  }


  export class QueryPlayerSettings {
    enabled:boolean;
    team:string;
    constructor(
      enabled:boolean,
    team: string
  ) {
      this.enabled =enabled;
    this.team = team;
  }
  }