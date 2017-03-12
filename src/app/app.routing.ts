import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
export const appRoutes: Routes = [
    {path:'', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'main', component: MainComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}