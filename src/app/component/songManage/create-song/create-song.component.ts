import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/Song';
import {SongService} from '../../../service/song.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {
  status = 'Please fill the out form to create a Song';
  form: any = {};
  song: Song;
  success: any = {
    message: "ok"
  }
  constructor(private songService: SongService) { }

  ngOnInit(): void {
  }
ngSubmit(){
    this.song = new Song(
      this.form.nameSong,
      this.form.lyrics,
      this.form.avatarUrl,
      this.form.mp3Url
    )
  this.songService.createSong(this.song).subscribe(data =>{
    if(JSON.stringify(data)==JSON.stringify(this.success)){
      this.status = 'Create Song Success!'
    }
  }, error => {
    this.status = 'Please login before create! '
  })
}
  onChangeAvatar($event){
    this.form.avatarUrl = $event
  }
  onChangeFile($event){
    this.form.mp3Url = $event
  }
}
