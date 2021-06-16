import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.component.html',
  styleUrls: ['./pass-reset.component.scss']
})
export class PassResetComponent implements OnInit {

    resetPass: FormGroup;
    fields = {  email: '' }

    constructor(
        private nonSecAPIsvc : NonSecureAPIService
    ) { }

    ngOnInit(): void {

        this.resetPass = new FormGroup({

            "email": new FormControl(this.fields.email, [
                Validators.required,
                Validators.email
            ]),

        })

    }

    get email() { return this.resetPass.get('email'); }

    onSubmit(){

        console.log(this.resetPass.value.email)
        let data = {'email':this.resetPass.value.email}
        this.nonSecAPIsvc.requestPasswordReset(data).subscribe(
            resp => {console.log(resp)},
            err => {},
        )
  }

}
