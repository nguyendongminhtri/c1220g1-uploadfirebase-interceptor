import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/storage";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  selectedFile: File;
  ref: AngularFireStorageReference;
  downloadURL: string;
  checkUloadFile = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private httpClient: HttpClient,
              private afStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.checkUloadFile = true;
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(downloadURL => {
        this.downloadURL = downloadURL;
        this.giveURLtoCreate.emit(this.downloadURL);
        this.checkUloadFile = false;
        return downloadURL;
      })
      .catch(error => {
        console.log(`Failed to upload file and get link -${error}`);
      });
  }
}
