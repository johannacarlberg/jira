import {Injectable} from '@angular/core';

// do whatever you want for logging here, add methods for log levels etc.
@Injectable()
export class MyLogger {

    public log(logMsg:string) {
        console.log(logMsg);
    }
}
