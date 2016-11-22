import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule {

}
