<<<<<<< HEAD
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/coursera-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const userSchema = new schema({
    email: { type: String, unique: true }, // Change 'types' to 'type'
    firstName: String,
    lastName: String,    
    password: String
});

const adminSchema = new schema({
    email: { type: String, unique: true }, // Change 'types' to 'type'
    firstName: String,
    lastName: String,    
    password: String,
});

const courseSchema = new schema({
    title: String,
    imgUrl: String,
    description: String,
    price: Number,
    creatorId: objectId
});

const purchaseSchema = new schema({
    userId: objectId,
    courseId: objectId
});

const userModel = mongoose.model('User', userSchema); // Consider capitalizing model names
const adminModel = mongoose.model('Admin', adminSchema);
const courseModel = mongoose.model('Course', courseSchema);
const purchaseModel = mongoose.model('Purchase', purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};
=======
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/edx-course-db');
const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const userSchema = new schema({
    email: {types: String, unique: true},
    firstName: String,
    lastName: String,    
    password: String
});

const adminSchema = new schema({
    email: {types: String, unique: true},
    firstName: String,
    lastName: String,    
    password: String,
});

const courseSchema = new schema({
    title: String,
    imgUrl: String,
    description: String,
    price: Number,
    creatorId: objectId
});

const purchaseSchema = new schema({
    userId: objectId,
    courseId: objectId
});

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports = {
    userModel: userModel,
    adminModel: adminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel
};
>>>>>>> 869f1efc9c7508d0269d1db1426f88754dcdaefa
