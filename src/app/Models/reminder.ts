
export class Reminder {
    cid: string;
    rid: string;
    contfirstname: string;
    contlastname: string;
    contmobile: string;
    time: string;

    constructor ( cid: string, rid: string, contfirstname: string, contlastname: string,  contmobile: string, time: string)  {
        this.cid = cid;
        this.contfirstname = contfirstname;
        this.contlastname = contlastname;
        this.contmobile = contmobile;
        this.time = time;
    }
}
