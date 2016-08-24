import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SelectComponent} from './select.component';
import {EasyFormsComponent} from './easy-forms.component';
import {QuestionComponent} from '../lib/question.component';
import {ControlGroupService} from './control-group.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        EasyFormsComponent,
        QuestionComponent
    ],
    providers: [ControlGroupService],
    exports: [EasyFormsComponent]
})
export class EasyFormsModule {}