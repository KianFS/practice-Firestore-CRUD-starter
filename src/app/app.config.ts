import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDxNlg_MRUAOLXZdFSKBW22hurhd8Z6154',
  authDomain: 'user-demo-ab709.firebaseapp.com',
  projectId: 'user-demo-ab709',
  storageBucket: 'user-demo-ab709.firebasestorage.app',
  messagingSenderId: '1098565474068',
  appId: '1:1098565474068:web:65b7313c0c4d186af61401',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
