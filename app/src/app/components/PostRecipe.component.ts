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
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { itemService } from 'app/sd-services/itemService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-PostRecipe',
  templateUrl: './PostRecipe.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class PostRecipeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_FY5845ebVlbHZYuH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_FY5845ebVlbHZYuH(bh) {
    try {
      bh = this.pageVariables(bh);
      //appendnew_next_sd_FY5845ebVlbHZYuH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FY5845ebVlbHZYuH');
    }
  }

  imgpreview(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.previewfunc(bh);
      //appendnew_next_imgpreview
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NvnOvzbEDr5Qgbxi');
    }
  }

  submitForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_JcwgdaVslEPRW05C(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zI3BlQPCd0AWCznU');
    }
  }

  //appendnew_flow_PostRecipeComponent_start

  pageVariables(bh) {
    try {
      this.page.imageURL = undefined;
      this.page.file = undefined;
      this.page.id = undefined;
      bh = this.sd_bH8HezBnqzv6drjH(bh);
      //appendnew_next_pageVariables
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hVwgViPy5qjmDN4D');
    }
  }

  sd_bH8HezBnqzv6drjH(bh) {
    try {
      this.page.formControl = FormControl;
      this.page.formGroup = FormGroup;
      bh = this.sd_m61hyM81b2S7IzcM(bh);
      //appendnew_next_sd_bH8HezBnqzv6drjH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bH8HezBnqzv6drjH');
    }
  }

  sd_m61hyM81b2S7IzcM(bh) {
    try {
      const page = this.page;
      page.RecipeForm = new page.formGroup({
        name: new page.formControl(''),
        description: new page.formControl(''),
        image: new page.formControl(''),
      });
      //appendnew_next_sd_m61hyM81b2S7IzcM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m61hyM81b2S7IzcM');
    }
  }

  previewfunc(bh) {
    try {
      const page = this.page;
      const file = bh.input.event.target.files[0];
      page.file = bh.input.event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      console.log(page.RecipeForm);
      reader.onload = () => {
        page.imageURL = reader.result;
      };

      //appendnew_next_previewfunc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d28ijtIk3VwbsNCl');
    }
  }

  async sd_JcwgdaVslEPRW05C(bh) {
    try {
      const itemServiceInstance: itemService =
        this.__page_injector__.get(itemService);

      let outputVariables = await itemServiceInstance.uploadfile(
        this.page.file,
        undefined
      );
      this.page.id = outputVariables.input.id;

      bh = this.sd_xyqGlV8eCxkVBsQZ(bh);
      //appendnew_next_sd_JcwgdaVslEPRW05C
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JcwgdaVslEPRW05C');
    }
  }

  sd_xyqGlV8eCxkVBsQZ(bh) {
    try {
      const page = this.page;
      console.log(page.id);
      bh = this.sd_dHH0JqHl1hcF7Dqy(bh);
      //appendnew_next_sd_xyqGlV8eCxkVBsQZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xyqGlV8eCxkVBsQZ');
    }
  }

  sd_dHH0JqHl1hcF7Dqy(bh) {
    try {
      const page = this.page;
      page.RecipeForm.value.image = page.id;
      console.log(page.RecipeForm.value);
      bh = this.sd_85xif7yj9oOPxa2r(bh);
      //appendnew_next_sd_dHH0JqHl1hcF7Dqy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dHH0JqHl1hcF7Dqy');
    }
  }

  async sd_85xif7yj9oOPxa2r(bh) {
    try {
      const itemServiceInstance: itemService =
        this.__page_injector__.get(itemService);

      let outputVariables = await itemServiceInstance.insertitems(
        this.page.RecipeForm.value
      );

      bh = this.sd_tPzn0jpi9mMKcScG(bh);
      //appendnew_next_sd_85xif7yj9oOPxa2r
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_85xif7yj9oOPxa2r');
    }
  }

  sd_tPzn0jpi9mMKcScG(bh) {
    try {
      const page = this.page;
      console.log(bh.local.id);
      //appendnew_next_sd_tPzn0jpi9mMKcScG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tPzn0jpi9mMKcScG');
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
  //appendnew_flow_PostRecipeComponent_Catch
}
