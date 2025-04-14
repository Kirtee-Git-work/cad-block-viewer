//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

const USer = mongoose.model('user', userSchema);

module.exports = USer;