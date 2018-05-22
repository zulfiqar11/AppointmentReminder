
export class Contact {
    id: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    TimeZone: string;

    constructor ( id: string, firstName: string, lastName: string,  phone: string, email: string, timezone: string)  {
        this.id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.Phone = phone;
        this.TimeZone = timezone;
    }
}
