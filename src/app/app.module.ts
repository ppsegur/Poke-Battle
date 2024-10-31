import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonbattlecomponentComponent } from './components/pokemonbattlecomponent/pokemonbattlecomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PokemonComponent } from './components/pokemoncomponent/pokemoncomponent.component';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import { CustomUrlImagePipe } from './pipes/custom-url-image.pipe';
import { PokemonAliadoComponent } from './components/pokemon-aliado/pokemon-aliado.component';
import { CurstomUlrBackPipe } from './pipes/curstom-ulr-back.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonbattlecomponentComponent,
    PokemonComponent,
    CustomUrlImagePipe,
    PokemonAliadoComponent,
    CurstomUlrBackPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LottieComponent
  

  ],
  providers: [ provideHttpClient(),
    
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
    provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
