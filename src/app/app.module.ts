import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestChildComponent } from './test-child/test-child.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { VeiwChildTestDirective } from './directives/veiw-child-test.directive';
import { AsyncPipeTestComponent } from './async-pipe-test/async-pipe-test.component';
import { SharkDirective } from './viewChileExample/withDirective/shark.directive';
import { PupComponent } from './viewChileExample/withComponent/pup.component';
import { GetCategoriesComponent } from './ResolverExample/get-categories/get-categories.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TestChildComponent,
    CustomDirectiveDirective,
    VeiwChildTestDirective,
    AsyncPipeTestComponent,
    SharkDirective,
    PupComponent,
    GetCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
