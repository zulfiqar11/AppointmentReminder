
export class Reminder {
    cid: string;
    rid: string;
    contfirstname: string;
    contlastname: string;
    contmobile: string;
    time: string;
    image: string;

    constructor ( cid: string, rid: string, contfirstname: string, contlastname: string,  contmobile: string, time: string, image: string)  {
        this.cid = cid;
        this.rid = rid;
        this.contfirstname = contfirstname;
        this.contlastname = contlastname;
        this.contmobile = contmobile;
        this.time = time;
        this.image = image;
    }
}
