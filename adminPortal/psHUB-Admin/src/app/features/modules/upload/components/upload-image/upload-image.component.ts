import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NetworkService } from '@core/services/network/network.service';
import { IErrorCodes } from '@utils/ErrorCodes';

interface IUploadResponse {
  error: IErrorCodes,
  url: string,
  status: true
}

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  @Output() fileUrl = new EventEmitter<string>();
  @Input() btnTitle: string;

  fileToUpload: File = null;

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    
    var url = 'http://localhost:8282/upload';
    var formData: FormData = new FormData();
    formData.append('file', files.item(0), files.item(0).name);
    this.networkService.upload(url, formData, (response: IUploadResponse) => {
      if(response.status) {
        this.fileUrl.emit(response.url);
      }else {
        this.fileUrl.emit(null);
      }  
    })
  } 

  selectFile() {
    document.getElementById('file').click();
  }
}
