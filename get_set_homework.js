let user = {
    firstName: "",
    lastName: "",


    get FirstName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set FirstName(value) {
        if (value.includes("")) {
            console.error("Ошибка")
        } else {
            this.firstName = value;
        }
    },

    get LastName(){
        return this.lastName;
    },

    set LastName(value){

        if (value.includes("")){
            console.error("Ошибка")
        }
        else {
            this.lastName = value;
        }
    }
}

user.fullName = "DimaBordiug";
console.log(user.fullName);
