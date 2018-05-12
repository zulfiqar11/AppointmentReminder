export class User{
    email: string;
    name: string;
    mobile: string;
    uid: string;

    constructor(email: string, name: string, mobile: string, uid: string) {
        this.email = email;
        this.name = name;
        this.mobile = mobile;
        this.uid = uid;
    }
}
