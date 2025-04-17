import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice-firestore-crud';

  // Injecting UserService from user.service.ts
  userService = inject(UserService);

  // This is the user object that will be used in the form
  user: User = {
    id: '',
    name: '',
    email: '',
  };

  // This is the array of users that will be displayed in the template
  users: User[] = [];
  editUserId: string | null = null;

  // This is the hook method that will be called when the component is initialized
  ngOnInit() {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  addUser() {
    this.userService.addUser(this.user);
  }
  setEditUser(editUser: User) {
    this.editUserId = editUser.id;
    this.user = { ...editUser };
  }

  deleteUser(delUser: User) {
    this.userService.deleteUser(delUser.id);
  }
  updateUser() {
    this.userService.updateUser(this.user);
    this.resetForm();
  }

  resetForm() {
    this.user = {
      id: '',
      name: '',
      email: '',
    };
    this.editUserId = null;
  }
}
