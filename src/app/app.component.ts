import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { images } from '../data';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ImageGalleryComponent],
  templateUrl : './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  image:{} = images
  categories = Object.keys(this.image);
  categorySelected = ""
  selectedCategory(event:any){
    this.categorySelected = event.target.value;
  }
}