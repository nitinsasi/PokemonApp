import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule,MatTableModule,MatCardModule,
  MatFormFieldModule,MatInputModule,MatSelectModule,
  MatToolbarModule,MatDialogModule,
  MatListModule,MatPaginatorModule,MatSortModule,
  MatIconModule,MatProgressSpinnerModule} from '@angular/material';
import { PokemonService } from './Service/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,MatCardModule,
    MatFormFieldModule,MatInputModule,
    MatSelectModule,MatToolbarModule,
    MatDialogModule,MatListModule,
    MatPaginatorModule,MatSortModule,MatIconModule,
    MatButtonModule,MatProgressSpinnerModule,MatTableModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
