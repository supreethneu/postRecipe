let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as os from 'os'; //_splitter_
import { sep } from 'path'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
import { NIL, parse, stringify, v1, v3, v4, v5, validate, version } from 'uuid'; //_splitter_
//append_imports_end
export class addproduct {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'addproduct';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new addproduct(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_addproduct_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: addproduct');

    //appendnew_flow_addproduct_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: addproduct');

    this.app['post'](
      `${this.serviceBasePath}/items`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: (os.homedir() + '/imagessssssss').replace(/\\|\//g, sep),
        options: [],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_74TlImf2fKzkwgOo(bh);
          //appendnew_next_sd_dB1UFdrZtSurjpw2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dB1UFdrZtSurjpw2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/fileupload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'memory',
        options: [{ name: 'file', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_17V081WXgU8pMxXO(bh);
          //appendnew_next_sd_PoNRlXlGDYoctXON
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PoNRlXlGDYoctXON');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_addproduct_HttpIn
  }
  //   service flows_addproduct

  //appendnew_flow_addproduct_start

  async sd_74TlImf2fKzkwgOo(bh) {
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_iTxlvV3bnM5068pl',
        'recipe',
        bh.input.body,
        {}
      );
      bh = await this.sd_HaO3ZHWUw33YmBqQ(bh);
      //appendnew_next_sd_74TlImf2fKzkwgOo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_74TlImf2fKzkwgOo');
    }
  }

  async sd_HaO3ZHWUw33YmBqQ(bh) {
    try {
      bh.web.res.status(200).send({ message: 'Done' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HaO3ZHWUw33YmBqQ');
    }
  }

  async sd_17V081WXgU8pMxXO(bh) {
    try {
      let op = 'V4';
      let _offset = null;
      if (!(bh == bh || bh == bh.input || bh == bh.local)) {
        _offset = bh;
      }
      let _options = null;
      if (!(bh == bh || bh == bh.input || bh == bh.local)) {
        _options = bh;
      }
      let _buffer = null;
      if (!(bh == bh || bh == bh.input || bh == bh.local)) {
        _buffer = bh;
      }
      if (op == 'Nil') {
        bh.curUUID = NIL;
      } else if (op == 'Parse') {
        bh.curUUID = parse(bh);
      } else if (op == 'Stringify') {
        bh.curUUID = stringify(bh, _offset);
      } else if (op == 'V1') {
        bh.curUUID = v1(_options, _buffer, _offset);
      } else if (op == 'V3') {
        bh.curUUID = v3(bh, bh, _buffer, _offset);
      } else if (op == 'V4') {
        bh.curUUID = v4(_options, _buffer, _offset);
      } else if (op == 'V5') {
        bh.curUUID = v5(bh, bh, _buffer, _offset);
      } else if (op == 'Validate') {
        bh.curUUID = validate(bh);
      } else if (op == 'Version') {
        bh.curUUID = {
          version: version(bh),
        };
      }

      bh = await this.sd_gHpynOIbs25dYiQV(bh);
      //appendnew_next_sd_17V081WXgU8pMxXO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_17V081WXgU8pMxXO');
    }
  }

  async sd_gHpynOIbs25dYiQV(bh) {
    try {
      // console.log(bh.input.files);
      bh.input.body = bh.input.files;
      bh.input.body['uuid'] = bh.curUUID;
      bh = await this.sd_fZcnguCmDnr3bJ8T(bh);
      //appendnew_next_sd_gHpynOIbs25dYiQV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gHpynOIbs25dYiQV');
    }
  }

  async sd_fZcnguCmDnr3bJ8T(bh) {
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_iTxlvV3bnM5068pl',
        'recipeimages',
        bh.input.body,
        {}
      );
      bh = await this.sd_9eQTvBSMaZ3b6wcO(bh);
      //appendnew_next_sd_fZcnguCmDnr3bJ8T
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fZcnguCmDnr3bJ8T');
    }
  }

  async sd_9eQTvBSMaZ3b6wcO(bh) {
    try {
      bh.result.insertedId = bh.curUUID;
      bh = await this.sd_QmpmpqbeZGp5hVhC(bh);
      //appendnew_next_sd_9eQTvBSMaZ3b6wcO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9eQTvBSMaZ3b6wcO');
    }
  }

  async sd_QmpmpqbeZGp5hVhC(bh) {
    try {
      bh.web.res.status(200).send(bh.result.insertedId);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QmpmpqbeZGp5hVhC');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_addproduct_Catch
}
