
const normalPerson = {
    firstName: 'Rahim',
    lastName : 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName , this.lastName)
    },
    chargeBill: function(amount,tips, tax){
        console.log(this) 
        this.salary = this.salary - amount - tips - tax;
        // console.log(this)
        return this.salary
    }
}

// console.log(normalPerson)//object
// normalPerson.getFullName()//Rahim Uddin

// normalPerson.chargeBill(150)
// console.log(normalPerson.salary)//14850
// normalPerson.chargeBill(3000)
// console.log(normalPerson.salary)//11850


//create another object
const heroPerson = {
    firstName : 'Hero',
    lastName : "Alom",
    salary : 25000
}

const friendlyPerson = {
    firstName : 'Muntazur',
    lastName : "Rahman",
    salary : 20000
}


//bind method
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson)
// heroChargeBill(2000)//{ firstName: 'Hero', lastName: 'Alom', salary: 25000 } //result from console.log(this) at line 8 
// heroChargeBill(3000)//{ firstName: 'Hero', lastName: 'Alom', salary: 23000 }//result from console.log(this) at line 8 
// console.log(heroPerson.salary)//20000
// console.log(normalPerson.salary)//15000  no effect on salary in normalPerson obeject becasue it is not to bind

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson)
// friendlyChargeBill(2000)
// console.log(friendlyPerson.salary)//18000



//call method
// normalPerson.chargeBill.call(heroPerson, 1000,500,500)
// normalPerson.chargeBill.call(heroPerson, 8000,500,500)
// console.log(heroPerson.salary)//14000

// normalPerson.chargeBill.call(friendlyPerson,2500,300,200)
// console.log(friendlyPerson.salary)//17000

//apply method
normalPerson.chargeBill.apply(heroPerson,[5000, 1500, 500])
console.log(heroPerson.salary)//25000-7000 = 18000
normalPerson.chargeBill.apply(heroPerson,[5000, 1500, 500])
console.log(heroPerson.salary)// 18000 - 5000 -1500 -500 = 11000