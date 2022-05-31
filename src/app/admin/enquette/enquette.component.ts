import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/components/dialog/dialog.service';
import { EnquetteService } from 'src/app/services/enquette.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-enquette',
  templateUrl: './enquette.component.html',
  styleUrls: ['./enquette.component.scss'],
})
export class EnquetteComponent implements OnInit {
  id!: any;

  question: any;
  type: any;
  enquette!: any;
  questions!: any;
  add = false;
  constructor(
    private toaster: ToastrService,
    private service: EnquetteService,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private Dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getEnquette();
    this.getQuestions();
  }

  deleteQuestion(id: any) {
    this.Dialog.confirm(
      'Please confirm..',
      'Do you really want to delete the question ?'
    )
      .then((ok) => {
        if (ok) {
          this.service.deleteQuestion(this.enquette.id, id).subscribe({
            next: () => {
              this.toaster.success('', 'deleted');
              this.getQuestions();
            },
            error: (err) => {
              console.error(err);
              this.toaster.error('', err.error);
            },
          });
        }
      })
      .catch(() => {
        return;
      });
  }
  Show() {
    this.add = !this.add;
  }
  getEnquette() {
    this.service.getById(this.id).subscribe({
      next: (res) => {
        this.enquette = res;
      },
      error: (err) => {
        this.toaster.error('', err);
      },
    });
  }

  getQuestions() {
    this.service.getQuestions(this.id).subscribe({
      next: (res) => {
        this.questions = res;
      },
      error: (err) => {
        this.toaster.error('', err);
      },
    });
  }

  addQuestion() {
    const data = {
      question: this.question,
      type: this.type,
      status: true,
    };
    console.log(data, 'hedha fesh nabeeth ');
    this.service.addQuestion(this.id, data).subscribe({
      next: (res) => {
        this.toaster.success('added succsefully '), this.Show();
        this.getQuestions();
        this.question = '';
        this.type = '';
      },
      error: (err) => {
        this.toaster.error('', 'something wrong please try again ');
      },
    });
  }

  changeQuestionStatus(id: any) {
    this.questionService.changeStatus(id).subscribe({
      next: (res: any) => {
        this.toaster.success(
          '',
          res.status ? 'question enabled' : 'question disabled '
        );
        this.getQuestions();
      },
      error: (err) => {
        this.toaster.error('', err.error);
      },
    });
  }
}
