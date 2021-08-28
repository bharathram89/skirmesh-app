import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-weapons",
  templateUrl: "./weapons.component.html",
  styleUrls: ["./weapons.component.scss"],
})
export class WeaponsComponent implements OnInit {
  id = 1;
  showMainWeapon = true;
  showSecondaryWeapon = false;
  showExplosive = false;
  constructor() {}

  ngOnInit(): void {}

  items = ["Main Weapon", "Secondary Weapon", "Knife"];

  mainWeapons = [
    { type: 1, name: "M416", imageUrl: "../../../assets/gunImages/m416.png" },
    { type: 1, name: "Akm", imageUrl: "../../../assets/gunImages/akm.png" },
    { type: 1, name: "Bison", imageUrl: "../../../assets/gunImages/bison.png" },
    { type: 1, name: "Ump", imageUrl: "../../../assets/gunImages/ump.png" },
  ];
  secondaryWeapons = [
    { type: 2, name: "Groza", imageUrl: "../../../assets/gunImages/groza.png" },
    { type: 2, name: "Mk14", imageUrl: "../../../assets/gunImages/mk14.png" },
    { type: 2, name: "m762", imageUrl: "../../../assets/gunImages/m762.png" },
    { type: 2, name: "m16a4", imageUrl: "../../../assets/gunImages/m16a4.png" },
  ];
  explosive = [
    {
      type: 3,
      name: "stan granade",
      imageUrl: "../../../assets/gunImages/stan-granade.png",
    },
    {
      type: 3,
      name: "grenade",
      imageUrl: "../../../assets/gunImages/grenade.png",
    },
  ];

  loadOutList = [];
  drop(event: CdkDragDrop<any[]>, type) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (
        event.container.data.includes(
          event.previousContainer.data[event.previousIndex]
        )
      ) {
        return;
      } else {
        if (type === event.previousContainer.data[0].type) {
          if (event.container.data.length === 0) {
            copyArrayItem(
              event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex
            );
          } else {
            alert("Already Weapon Present");
          }
        } else if (type === event.previousContainer.data[0].type) {
          if (event.container.data.length === 0) {
            copyArrayItem(
              event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex
            );
          } else {
            alert("Already Weapon Present");
          }
        } else if (type === event.previousContainer.data[0].type) {
          if (event.container.data.length === 0) {
            copyArrayItem(
              event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex
            );
          } else {
            alert("Already Weapon Present");
          }
        }
      }
      console.log(this.loadOutList);
    }
  }

  addLoadOut() {
    this.loadOutList.push({
      id: this.id,
      mainloadOut: [],
      secondaryloadOut: [],
      explosiveloadOut: [],
    });
    this.id = this.id + 1;
  }

  removeItem(item, loadOut, type) {
    this.loadOutList.forEach((e) => {
      if (e.id === loadOut) {
        switch (type) {
          case 1:
            e.mainloadOut = [];

            break;

          case 2:
            e.secondaryloadOut = [];

            break;

          case 3:
            e.explosiveloadOut = [];

            break;

          default:
            break;
        }
      }
    });
  }

  removeLoadOut(loadOut) {
    this.loadOutList = this.loadOutList.filter((e) => e.id !== loadOut);
  }

  showWeapons(data) {
    if (data === "main") {
      this.showMainWeapon = true;
      this.showSecondaryWeapon = false;
      this.showExplosive = false;
    } else if (data === "secondary") {
      this.showSecondaryWeapon = true;
      this.showMainWeapon = false;
      this.showExplosive = false;
    } else if (data === "explosives") {
      this.showExplosive = true;
      this.showSecondaryWeapon = false;
      this.showMainWeapon = false;
    }
  }
}
