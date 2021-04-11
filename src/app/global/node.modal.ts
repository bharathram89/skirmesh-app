
export class DeviceSettings {
    address: string;
    location: string;
    medic: MedicSettings;
    bomb: BombSettings;
    capture: CaptureSettings;
    constructor(
      address: string,
      location: string,
      medic: MedicSettings,
      bomb: BombSettings,
      capture: CaptureSettings
    ) {
      this.address = address;
      this.location = location;
      this.medic = medic;
      this.bomb = bomb;
      this.capture = capture;
    }
  }
  export class MedicSettings {
    id:number;
    team: string;
    constructor(
      team: string
    ) {
      this.team = team;
    }
  }
  export class BombSettings {
    armTime: number;
    fuseTime: number;
    defuseTime: number;
    constructor(
      armTime: number,
      fuseTime: number,
      defuseTime: number
    ) {
      this.armTime = armTime;
      this.fuseTime = fuseTime;
      this.defuseTime = defuseTime;
    }
  }
  export class CaptureSettings {
    stablizeTime: number;
    captureAssist: number;
    pointScale: number;
    allowMedic: boolean;
    constructor(
      stablizeTime: number,
      captureAssist: number,
      pointScale: number,
      allowMedic: boolean,
    ){
      this.stablizeTime = stablizeTime;
      this.captureAssist = captureAssist;
      this.pointScale = pointScale;
      this.allowMedic = allowMedic;
    }
  }
  