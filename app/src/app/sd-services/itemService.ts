/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class itemService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_itemService

  async insertitems(items: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          items: items,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_ss7FcZZE3wieRDGI(bh);
      //appendnew_next_insertitems
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X5YFgT21pQLkE7Kf');
    }
  }

  async uploadfile(file: any = undefined, id: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          file: file,
          id: id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_lejf8uBOQgSSam37(bh);
      //appendnew_next_uploadfile
      return (
        // formatting output variables
        {
          input: {
            id: bh.input.id,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k5F5lbKQCT7KE0rh');
    }
  }

  //appendnew_flow_itemService_start

  async sd_ss7FcZZE3wieRDGI(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + 'items';
      bh = await this.sd_FcUdrsNZMcX7A2ps(bh);
      //appendnew_next_sd_ss7FcZZE3wieRDGI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ss7FcZZE3wieRDGI');
    }
  }

  async sd_FcUdrsNZMcX7A2ps(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.items,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_FcUdrsNZMcX7A2ps
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FcUdrsNZMcX7A2ps');
    }
  }

  async sd_lejf8uBOQgSSam37(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + 'fileupload';
      console.log(bh.input.file);
      bh.input.formData = new FormData();
      bh.input.formData.append('file', bh.input.file);
      bh = await this.sd_lDtGTKhfbsNKQAtT(bh);
      //appendnew_next_sd_lejf8uBOQgSSam37
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lejf8uBOQgSSam37');
    }
  }

  async sd_lDtGTKhfbsNKQAtT(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'text',
        headers: {},
        params: {},
        body: bh.input.formData,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_ozqGU1lpQy1ypmAy(bh);
      //appendnew_next_sd_lDtGTKhfbsNKQAtT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lDtGTKhfbsNKQAtT');
    }
  }

  async sd_ozqGU1lpQy1ypmAy(bh) {
    try {
      bh.input.id = bh.result;

      //appendnew_next_sd_ozqGU1lpQy1ypmAy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ozqGU1lpQy1ypmAy');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_itemService_Catch
}
