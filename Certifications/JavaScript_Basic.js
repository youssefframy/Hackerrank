// JavaScript StaffList
class StaffList {
    //add your code here
    staff = [];
    add(name, age){
        if (age > 20){
            this.name = name;
            this.age = age;
            this.staff.push(name);
        } else {
            throw 'Error: Staff member age must be greater than 20';
        }
    }
    remove(name){
        if (this.staff.includes(name)){
           let index = this.staff.indexOf(name);
           this.staff.splice(index, 1);
           return true;
        } else {
            return false
        }
    }
    getSize(){
        return this.staff.length
    }
}

// case 3
// 10000
// 11000
// get balance
// 1000
// get balance
