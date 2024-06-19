'use strict';
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema( {
    name:{ String,
    required: true
},
email : {
    type: String,
    required: true,
    uniqe: true,
},
password: {
    type: String,
    required: true
},
role: {
    type: String,
    default: 'user',
    enum: ['user', guest, 'admin']
}
})
userSchema.pre('save', async function (incomingPassword) {
    
})

return await bcrypt.compare(incomingPassword, this,oassword, salt);
