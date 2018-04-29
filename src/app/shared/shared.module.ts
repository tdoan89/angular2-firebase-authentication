import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from './material-design.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        MaterialDesignModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialDesignModule
    ],
    providers: [],
})
export class AppSharedModule { }