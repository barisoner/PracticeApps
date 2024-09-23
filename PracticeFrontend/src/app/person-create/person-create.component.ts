import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent {
  person = {
    fullName: '',
    email: '',
    isActive: false
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.createPerson(this.person).subscribe({
      next: (response: any) => {
        console.log('Person created:', response);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        console.log('Error creating person:', err);
      }
    });
  }
}