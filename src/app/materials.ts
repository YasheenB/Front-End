import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatTableModule
    ],
})

export class MaterialModule{

}
