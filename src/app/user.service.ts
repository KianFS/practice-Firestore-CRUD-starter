import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore = inject(Firestore);
  // It uses AngularFire's collection function to get a reference to the users collection
  private userCollection = collection(this.firestore, 'users');

  // It uses AngularFire's collectionData function to get the data from the users collection
  // It uses RxJS's Observable to return the data as an observable
  getUsers(): Observable<User[]> {
    return collectionData(this.userCollection, { idField: 'id' }) as Observable<
      User[]
    >;
  }

  addUser(newUser: User) {
    const userRef = doc(this.userCollection);
    const id = userRef.id;
    newUser.id = id;
    setDoc(userRef, newUser);
  }

  updateUser(user: User) {
    const userRef = doc(this.firestore, `users/${user.id}`);
    updateDoc(userRef, { ...user });
  }

  // It uses AngularFire's deleteDoc function to delete a user from the users collection
  // It uses AngularFire's doc function to get a reference to the user document
  deleteUser(id: string) {
    const userRef = doc(this.firestore, `users/${id}`);
    deleteDoc(userRef);
  }
}
