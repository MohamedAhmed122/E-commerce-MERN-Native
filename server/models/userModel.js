import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        default:''
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    street:{
        type: String,
        default:''
    },
    zipCode:{
        type: String,
        default:''
    },
    city:{
        type: String,
        default:''
    },
    country:{
        type: String,
        default:''
    },
    apartment:{
        type: String,
        default:''
    },
})

const User = mongoose.model('User', userSchema);

export default User;