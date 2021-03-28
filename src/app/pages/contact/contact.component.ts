import { contactForm } from './../../../assets/_content/contact';
import { fade } from './../../_animations/animations';
import { LanguageService } from './../../_services/language.service';
import { ToastService } from './../../_services/toast.service';
import { Component, OnInit } from '@angular/core';
import {Email} from "../contact/smtp.js";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { contactInfo } from 'src/assets/_content/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fade]
})
export class ContactComponent implements OnInit {
  public contactInfo = contactInfo;
  public contactForm = contactForm;
  public form: FormGroup;
  public isLoading: boolean;
  public isSent: boolean;
  public Email = Email;

  constructor(private toastService: ToastService,
              private languageService: LanguageService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100), Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(300)]),
      message: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)])
    })
  }

  submitForm() {
    this.isLoading = true;
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "wagermatchtest@gmail.com",
      Password : "C816EAFA8DB102C3E14B28DC7B4E07D665C1",
      To : "vgladchenko1710@gmail.com",
      From : "wagermatchtest@gmail.com",
      Subject : this.form.get('subject').value,
      Body : `<h4>Имя: ${this.form.get('name').value}</h4>
              <h4>Email: ${this.form.get('email').value}</h4>
              <h4>Тема: ${this.form.get('subject').value}</h4>
              <br><br>
              <p>${this.form.get('message').value}</p>`
      }).then( message => {
        if (message == 'OK') {
          this.toastService.success(this.contactForm.sendMessage[this.languageService.getLang()]);
          this.form.reset();
          this.isLoading = false;
          this.isSent = true;
        } else {
          this.toastService.error('Упс.. Что то пошло не так!');
          this.isLoading = false;
        }
    });
  }

}
