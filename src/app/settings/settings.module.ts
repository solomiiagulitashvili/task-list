import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {}
