import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    logLevel: number = 2; //1,2,3,4

    logError(err, msg) {
        if (this.logLevel == 1 || this.logLevel == 4) {
            console.log(msg, err);
        }
    }

    logEvent(msg) {
        if (this.logLevel == 2 || this.logLevel == 4) {
            console.log(msg);
        }
    }

    logInfo(...args) {
        if (this.logLevel == 3 || this.logLevel == 4) {
            for (var i = 0; i < arguments.length; i++) {
                console.log(arguments[i]);
            }
        }
    }

}
