
export class DeviceSettings {
    enabled:boolean;
    address: string;
    location: string;
    medic: MedicSettings;
    bomb: BombSettings;
    capture: CaptureSettings;
    constructor(
      enabled:boolean,
      address: string,
      location: string,
      medic: MedicSettings,
      bomb: BombSettings,
      capture: CaptureSettings
    ) {
        this.enabled =enabled;
      this.address = address;
      this.location = location;
      this.medic = medic;
      this.bomb = bomb;
      this.capture = capture;
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
    armTime: number;
    fuseTime: number;
    defuseTime: number;
    constructor(
        enabled:boolean,
      armTime: number,
      fuseTime: number,
      defuseTime: number
    ) {
        this.enabled =enabled;
      this.armTime = armTime;
      this.fuseTime = fuseTime;
      this.defuseTime = defuseTime;
    }
  }
  export class CaptureSettings {

    enabled:boolean;
    stablizeTime: number;
    captureAssist: number;
    pointScale: number;
    allowMedic: boolean;
    constructor(
        enabled:boolean,
      stablizeTime: number,
      captureAssist: number,
      pointScale: number,
      allowMedic: boolean,
    ){
        this.enabled =enabled;
      this.stablizeTime = stablizeTime;
      this.captureAssist = captureAssist;
      this.pointScale = pointScale;
      this.allowMedic = allowMedic;
    }
  }
  