import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  gameModeForm: FormGroup;

  @Input() gameMode;
  @Output() saveGameMode = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.gameModeForm = this.fb.group({
      id: '',
      name: '',
      numNodes: '',
      nodeModes: '',
      map:''
    });
  }
  setNodes(){
    // document.getElementById("backdrop").style.display = "block"
    document.getElementById("exampleModal").style.display = "block"
    document.getElementById("exampleModal").className += "show"
  }
  closeModal(){
    // document.getElementById("backdrop").style.display = "none"
    document.getElementById("exampleModal").style.display = "none"
    document.getElementById("exampleModal").className += document.getElementById("exampleModal").className.replace("show", "")
  }
  ngOnInit() {
    this.gameModeForm.setValue({
      id: this.gameMode.id || -1,
      name: this.gameMode.name || '',
      numNodes: this.gameMode.numNodes || '',
      nodeModes: this.gameMode.nodeModes || '',
      map: this.gameMode.map || ''
    });
  }

  onNewGameModeFormSubmit() {
    let dataModel = this.gameModeForm.value;
    this.saveGameMode.emit(dataModel);
  }

}
