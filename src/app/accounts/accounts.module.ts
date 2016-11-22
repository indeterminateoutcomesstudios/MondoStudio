import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: 'accounts/login', component: LoginComponent },
            { path: 'accounts/register', component: RegisterComponent }
        ])
    ],
    exports: [RouterModule]
})
export class AccountsModule {}
