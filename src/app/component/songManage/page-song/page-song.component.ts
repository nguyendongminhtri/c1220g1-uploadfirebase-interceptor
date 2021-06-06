import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/Song';
import {SongService} from '../../../service/song.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-page-song',
  templateUrl: './page-song.component.html',
  styleUrls: ['./page-song.component.scss']
})
export class PageSongComponent implements OnInit {
  totalElements: number = 0;
  loading: boolean;
  songs: Song[] = [];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getListRequest({page: 0, size: 3})
  }
private getListRequest(request){
    this.loading = true;
    this.songService.pageSong(request).subscribe(data =>{
      this.songs = data['content'];
      this.totalElements = data['totalElements']
      this.loading = false;
    }, error => {
      this.loading = false;
    })
}
nextPage(event: PageEvent){
    const request = {}
  request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getListRequest(request);
}
}
