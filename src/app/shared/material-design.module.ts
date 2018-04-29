import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
} from '@angular/material';

const MODULES = [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES,
})
export class MaterialDesignModule { }