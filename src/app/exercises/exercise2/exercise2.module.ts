import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise2Component } from './exercise2.component';
import { InvertedParentComponentComponent } from './inverted-parent-component/inverted-parent-component.component';
import { InvertedChildComponentComponent } from './inverted-child-component/inverted-child-component.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Exercise2Component,
    ParentComponent,
    ChildComponent,
    InvertedParentComponentComponent,
    InvertedChildComponentComponent,
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: Exercise2Component,
    //   },
    // ]),
  ],
})
export class Exercise2Module {}
