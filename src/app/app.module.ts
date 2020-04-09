import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksModule } from './tasks/tasks.module';
import { CompletedTasksModule } from './completed-tasks/completed-tasks.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { AddTaskModule } from './add-task/add-task.module';
import { TasksComponent } from './tasks/tasks.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    SettingsComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
