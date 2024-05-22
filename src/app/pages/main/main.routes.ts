import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from '../home/home.component';
import { Component } from '@angular/core';

export const MAIN_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('../home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../about-us/about-us.component').then((m) => m.AboutUsComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
];
