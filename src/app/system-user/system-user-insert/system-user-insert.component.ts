import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { FormValidation } from '../../@core/utils/FormValidation';
import { SystemUser } from '../../model/system-user-model';
import { SystemUserService } from '../system-user.service';

@Component({
  selector: 'ngx-system-user-insert',
  templateUrl: './system-user-insert.component.html',
  styleUrls: ['./system-user-insert.component.scss']
})
export class SystemUserInsertComponent implements OnInit {

  systemUserForm: FormGroup
  accessProfiles: string[] = ["ADMIN", "NORMAL"]
  loading = false
  constructor(private formBuilder: FormBuilder, private systemUserService: SystemUserService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.createSystemUserForm()
  }


  createSystemUserForm() {
    let systemUser = {} as SystemUser
    this.systemUserForm = this.formBuilder.group({
      name: [systemUser.name, [Validators.required, FormValidation.isEmpty]],
      login: [systemUser.login, [Validators.required, FormValidation.isEmpty]],
      email: [systemUser.email, [Validators.email]],
      password: [systemUser.password, [Validators.required, FormValidation.isEmpty]],
      phoneNumber: [systemUser.phoneNumber,],
      accessProfile: [systemUser.accessProfile, [Validators.required]],

    })
  }

  createSystemUser(): SystemUser {

    let systemUser = {} as SystemUser
    systemUser.name = this.systemUserForm.get('name').value
    systemUser.login = this.systemUserForm.get('login').value
    systemUser.email = this.systemUserForm.get('email').value
    systemUser.password = this.systemUserForm.get('password').value
    systemUser.phoneNumber = this.systemUserForm.get('phoneNumber').value
    systemUser.accessProfile = this.systemUserForm.get('accessProfile').value

    return systemUser
  }

  insert() {
    this.loading = true;
    let systemUser = this.createSystemUser();

    setTimeout(() => {
      this.systemUserService.insert(systemUser).subscribe(() => {
        this.showToast('success');
        this.createSystemUserForm();
        this.loading = false
      })
    }, 1000)
  }
  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, "Usuario adicionado com sucesso", { status });
  }

}
