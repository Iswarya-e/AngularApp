import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../Model/Album';
import { AlbumService } from '../Services/album.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

  albums:Album[];
  constructor(private albumObj:AlbumService,private router:Router) {
    this.albumObj.getAlbumData().subscribe(i=>{this.albums=i;})
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }
   }


}
