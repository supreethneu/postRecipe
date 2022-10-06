//append_imports_start

import * as sd_NUu58pgp0tCcrtyd from 'app/sd-services/itemService'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(private sd_NUu58pgp0tCcrtyd: sd_NUu58pgp0tCcrtyd.itemService) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
