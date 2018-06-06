
export class Contact {
    cid: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    timezone: string;
    image: string;

    constructor ( cid: string, firstname: string, lastname: string,  phone: string, email: string, timezone: string, image: string)  {
        this.cid = cid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.timezone = timezone;
        this.image = image;
    }
}
