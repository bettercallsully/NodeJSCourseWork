var userSchema = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObectId)
    firstName: {
    type: String,
    required: true
    minlength: 2
    lastName: {
    type: String
    required({minlength, 2})
    email: {
    type: String,
    required({minlength, 3})
    about:  String
    dateOfBirth: {
     required({date})
    })