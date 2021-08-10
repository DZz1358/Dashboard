import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/app-routing.module';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './core/entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { defaultDataServiceConfig } from './core/default-data-service.config';

@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    SharedModule.forRoot(), 
    EntityDataModule.forRoot(entityConfig), 
    EffectsModule.forRoot([]), StoreModule.forRoot({}, {}),
  ],
  providers: [{ provide: DefaultDataServiceConfig, 
    useValue: defaultDataServiceConfig }],  
  bootstrap: [AppComponent],
})
export class AppModule {}
