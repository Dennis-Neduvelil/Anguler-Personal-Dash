import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path:'bookmarks',component:BookmarksComponent},
  {path:'todos',component:TodosComponent},
  {path:'notes',component:NotesComponent},
  {path:'notes/add-notes',component:AddNoteComponent},
  {path:'notes/:id',component:EditNoteComponent},
  {path:'todos/add-todo',component:AddTodoFormComponent},
  {path:'todos/:id',component:EditTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
