import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.scss'],
})
export class AddReclamationComponent implements OnInit {
  titre: any;
  content: any;
  constructor(
    private toaster: ToastrService,
    private auth: AuthService,
    private reclamationService: ReclamationService
  ) {}

  ngOnInit(): void {}

  reclamer() {
    const rec = {
      user: this.auth.user,
      titre: this.titre,
      content: this.content,
    };
    this.reclamationService.reclamer(rec).subscribe({
      next: (res) => {
        this.toaster.success('Done'  )
        console.log(res , 'result from the server ')
      },
      error: (err) => {
        this.toaster.error(err.message , 'oops !!')
      },
    });
  }
}
