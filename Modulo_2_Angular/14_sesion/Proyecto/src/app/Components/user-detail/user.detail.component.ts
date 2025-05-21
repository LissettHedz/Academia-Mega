import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FullNamePipe } from '../../Pipes/full-name.pipe';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
@Input() user:any;
}