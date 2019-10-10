import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
