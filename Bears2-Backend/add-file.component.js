//look in the html for this component
import { Component, OnInit, AfterViewInit, Inject, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FileUploader, FileItem } from 'ng2-file-upload';
import {AuthService, ProjectAPIService} from '../../../../services';
import { SystemService } from '../../../../services/system.service';
import {TestFile} from "../../../../models";


@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit, AfterViewInit {

  private static readonly FILE_SIZE_LIMIT = 10000
  private static readonly FILE_NAME_LENGTH_LIMIT = 255;
  private static readonly FILE_TYPES = ['csv', 'jmx', 'txt', 'properties'];

  @Input() projectId: number;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('fileModal') fileModal;

  public modalRef: BsModalRef;
  public uploader:FileUploader;
  public hasBaseDropZoneOver:boolean = false;
  public errorFilesCount: number = 0;
  public invalidFileCount: number = 0;
  public valMap: { [itemIndex: number]: string[]; } = { };
  testFiles: TestFile[];

  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private systemService: SystemService,
    private projectAPI: ProjectAPIService
  ) {

  }

  ngOnInit() {


    this.systemService.getEnvironment().subscribe(
      data => {
        this.updateTestFiles();
        console.log('this is the test files', this.testFiles)
        this.uploader = new FileUploader({ url: `${data.apiEndpoint}/api/v1/projects/${this.projectId}/testfiles`, authToken: 'Bearer ' + this.authService.authToken });
        console.log('this is the uploader', data);
        this.uploader.onErrorItem = (fileItem: FileItem, response, status, headers) => {
          this.errorFilesCount = ++this.errorFilesCount;
          console.log('hellllooooooo1')

        }

        this.uploader.onAfterAddingAll = (fileItems: FileItem[]) => {
          console.log('hellllooooooo1')
          fileItems.forEach(fileItem => {
            let valMessages = this.validateFiles(fileItem);

            if (valMessages.length > 0) {
              fileItem.isError = true;
              this.valMap[fileItem.index] = valMessages;
              this.invalidFileCount = ++this.invalidFileCount;
            }
          })
        }
          console.log('hellllooooooo2')
        this.uploader.onAfterAddingFile = (fileItem: FileItem) => {
          console.log('hellllooooooo1')
          fileItem.withCredentials = false;
          let valMessages = this.validateFiles(fileItem);

          if (valMessages.length > 0) {
            fileItem.isError = true;
            this.valMap[fileItem.index] = valMessages;
            this.invalidFileCount = ++this.invalidFileCount;
          }
        }
      }
    )

  }

  ngAfterViewInit() {

    if (this.uploader) {
      this.uploader.onAfterAddingFile = (item => {
        item.withCredentials = false;
     });
    }
  }


 public closeModal() {
   this.errorFilesCount = 0;
   this.invalidFileCount = 0;
   this.valMap = { };
   this.fileModal.hide();
   this.onClose.emit();
 }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public uploadFiles() {
    this.uploader.uploadAll();
  }

  public updateValOnFileRemove(item: FileItem) {
    if (item.isError == true) {
      this.invalidFileCount = --this.invalidFileCount;
    }
  }

  private validateFiles(fileItem: FileItem) {
    let valMessages = [];

    // TODO: Enable at a later date
    // Check file size
    // if (fileItem.file.size > AddFileComponent.FILE_SIZE_LIMIT) {
    //   valMessages.push('File exceeds max file size limit.')
    // }

    // Check file name length
    if (fileItem.file.name.length > AddFileComponent.FILE_NAME_LENGTH_LIMIT) {
      valMessages.push('File name cannot exceed 255 characters.');
    }

    //Check file name duplicates
    console.log('this is the file name', fileItem.file.name);
    if (this.testFiles.filter(thing => {thing.fileName === fileItem.file.name})){
      console.log('do i get in this mofooo');
      valMessages.push('no duplicate files allowed.')
    }

    // Check file type
    let nameSplit = fileItem.file.name.split('.');

    if (nameSplit.length > 0) {
      let fileType = nameSplit[nameSplit.length - 1];

      if (!AddFileComponent.FILE_TYPES.includes(fileType)) {
        valMessages.push('File type not supported.');
      }

    }

    return valMessages;
  }

   updateTestFiles() {
    console.log("this is the project id and the test files", this.projectId, this.testFiles)
    this.projectAPI.getTestFiles(this.projectId).subscribe((testFiles: TestFile[]) => {
      this.testFiles = testFiles;
      console.log("this is the project id and the test files", this.projectId, this.testFiles)

    });
  }

}
