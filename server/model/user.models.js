const mongoose = require('mongoose');



const CompanySchema = mongoose.Schema({
    companyName: {
        type: String,
        required:[true, "Please insert your company name"],
        minLength:[3, "Company name must have more than three characters"]
    },
    catchPhrase: {
        type: String,
        required:[true, "Please insert your latitude"],
        minLength:[5, "Catch phrase must have more than five characters"]
    },
    bs: {
        type: String,
        required:[true, "Please insert your bs"]
    }
});



const GeoSchema = mongoose.Schema ({
    lat: {
        type: String,
        required:[true, "Please insert your latitude"]
    },
    lng: {
        type: String,
        required:[true, "Please insert your longitude"]
    }
});



const AddressSchema = mongoose.Schema ({
    street : {
        type: String,
        required:[true, "Please insert your street name"]
    },
    suite : {
        type: String,
        required:[true, "Please insert your suit"]
    },
    city : {
        type: String,
        required:[true, "Please insert your city"]
    },
    zipcode : {
        type: String,
        required:[true, "Please insert your zipcode"]
    },
    geo: GeoSchema
});


const UsersSchema = mongoose.Schema ({
    name : {
        type: String,
        required:[true, "Please insert your name"],
        minLength:[3, "Name can't be less than three characters"]
    },
    username: {
        type: String,
        required:[true, "Please insert your username"],
        minLength:[5, "username can't be less than three characters"]
    },
    email: {
        type: String,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please insert a valid email address"
          }
    },
    address: AddressSchema,
    phone: {
        type: String,
        required: [true, "please insert a valid phone number"],
        minLength:[9, "Phone number must have 9 digits or more" ]
    },
    website: {
         type: String
     },
     company: CompanySchema,
  },{ timestamps: true });



const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;
