import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  isLoading!: Observable<boolean>;

  personalList!: Observable<User[]>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.personalList = this.adminService.getPersonalList();
    this.personalList = this.activatedRoute.data.pipe(
      map((data) => data?.['users'])
    );
  }
}
