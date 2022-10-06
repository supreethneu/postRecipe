/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { itemService } from 'app/sd-services/itemService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-testfileuppload',
  templateUrl: './testfileuppload.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class testfileupploadComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_EZSLDBmRe7z6HBOt(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_EZSLDBmRe7z6HBOt(bh) {
    try {
      bh = this.sd_jqcwcsUKnFJTCQsF(bh);
      //appendnew_next_sd_EZSLDBmRe7z6HBOt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EZSLDBmRe7z6HBOt');
    }
  }

  imgPreviewAndSubmit(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_vLFCts4X0aXsTpjx(bh);
      //appendnew_next_imgPreviewAndSubmit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5JDXxEOjRCcwvqdc');
    }
  }

  //appendnew_flow_testfileupploadComponent_start

  sd_jqcwcsUKnFJTCQsF(bh) {
    try {
      this.page.file = undefined;
      this.page.id = undefined;
      //appendnew_next_sd_jqcwcsUKnFJTCQsF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jqcwcsUKnFJTCQsF');
    }
  }

  sd_vLFCts4X0aXsTpjx(bh) {
    try {
      const page = this.page;
      const file = bh.input.event.target.files[0];
      page.file = bh.input.event.target.files[0];
      console.log(bh.input);
      // const reader = new FileReader();
      // reader.readAsDataURL(file)
      // console.log(page.RecipeForm)
      // reader.onload = () => {
      //   page.imageURL = reader.result ;
      // }

      bh = this.sd_ha0tFVtqZ1vxDAlO(bh);
      //appendnew_next_sd_vLFCts4X0aXsTpjx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vLFCts4X0aXsTpjx');
    }
  }

  async sd_ha0tFVtqZ1vxDAlO(bh) {
    try {
      const itemServiceInstance: itemService =
        this.__page_injector__.get(itemService);

      let outputVariables = await itemServiceInstance.uploadfile(
        this.page.file,
        undefined
      );
      this.page.id = outputVariables.input.id;

      bh = this.sd_vBs7GyYoji89umie(bh);
      //appendnew_next_sd_ha0tFVtqZ1vxDAlO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ha0tFVtqZ1vxDAlO');
    }
  }

  sd_vBs7GyYoji89umie(bh) {
    try {
      const page = this.page;
      console.log(page.id);
      //appendnew_next_sd_vBs7GyYoji89umie
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vBs7GyYoji89umie');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_testfileupploadComponent_Catch
}
