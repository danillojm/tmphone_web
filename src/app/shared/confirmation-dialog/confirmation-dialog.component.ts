import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../../pages/modal-overlays/dialog/showcase-dialog/showcase-dialog.component';

@Component({
  selector: 'ngx-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() title: string;
  @Input() msg: string;
  confirm: boolean = true;
  constructor(protected ref: NbDialogRef<ConfirmationDialogComponent>) { }

  ngOnInit(): void {
  }


  dismiss() {
    this.ref.close(false);
  }

  onConfirm() {

    this.ref.close(confirm);

  }
}
