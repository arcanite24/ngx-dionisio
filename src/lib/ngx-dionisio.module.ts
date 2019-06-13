import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxDionisioComponent } from './ngx-dionisio.component';
import { NgxDionisioConfig, NGX_DIONISIO_CONFIG } from './models/ngx-dionisio.models';
import { DionisioService } from './dionisio.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const socketConfig: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [NgxDionisioComponent],
  imports: [
    HttpClientModule,
    SocketIoModule.forRoot(socketConfig),
  ],
  providers: [
    DionisioService
  ],
  exports: [NgxDionisioComponent]
})
export class NgxDionisioModule {

  static forRoot(config?: NgxDionisioConfig): ModuleWithProviders {
    return {
      ngModule: NgxDionisioModule,
      providers: [
        {
          provide: NGX_DIONISIO_CONFIG,
          useValue: config
        }
      ]
    };
  }

}
