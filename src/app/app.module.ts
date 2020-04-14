import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksModule } from './tasks/tasks.module';
import { CompletedTasksModule } from './completed-tasks/completed-tasks.module';
import { AddTaskModule } from './add-task/add-task.module';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { StatisticsModule } from './statistics/statistics.module';
import { SettingsModule } from './settings/settings.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AddTaskModule,
    TasksModule,
    CompletedTasksModule,
    StatisticsModule,
    SettingsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
