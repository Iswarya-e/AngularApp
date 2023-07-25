import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule, MetaReducer } from '@ngrx/store';
import * as fromFeedbackReducer from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FeedbackSandbox } from './store/sandbox/sandbox';
import { FeedbackEffects } from './store/effect/effect';



@NgModule({
  declarations: 
  [
    AppComponent
  ],
  imports: 
  [
    StoreModule.forRoot(),
    StoreModule.forFeature('feedback',fromFeedbackReducer.reducers),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([FeedbackEffects]),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [FeedbackSandbox],
  bootstrap: [AppComponent]
})
export class AppModule { }
