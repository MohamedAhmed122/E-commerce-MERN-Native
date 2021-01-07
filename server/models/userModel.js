import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

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


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
  }

  userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next()
    }
  
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    
})

const User = mongoose.model('User', userSchema);

export default User;