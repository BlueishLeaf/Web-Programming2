
export class Detail{
    name: string;
    address: string;
    studentID: string;
    phoneNo: string;
    notes: string;

    constructor(nameI: string, addressI: string, studentIDI: string, phoneNoI: string, notesI: string){
        this.name = nameI;
        this.address = addressI;
        this.studentID = studentIDI;
        this.phoneNo = phoneNoI;
        this.notes = notesI;
    }
}