import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { provideHttpClient } from '@angular/common/http';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import { PokemonbattlecomponentComponent } from './components/pokemonbattlecomponent/pokemonbattlecomponent.component';
import { PokemonComponent } from './components/pokemoncomponent/pokemoncomponent.component';
import { CustomUrlImagePipe } from './pipes/custom-url-image.pipe';

@NgModule({
  declarations: [AppComponent, PokemonbattlecomponentComponent, PokemonComponent, CustomUrlImagePipe],
  imports: [BrowserModule, AppRoutingModule, NgbModule, LottieComponent],
  providers: [
    provideHttpClient(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}