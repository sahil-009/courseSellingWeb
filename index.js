<<<<<<< HEAD
const express = require('express');
const userRouter = require('./routes/user');  
const createCourseRoutes = require('./routes/course');  
const userAdmin = require('./routes/admin');  

const app = express();

app.use(express.json());
app.use("/user", userRouter); 
app.use("/course", createCourseRoutes); 
app.use("/admin", userAdmin);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
=======
const express =require('express');
const { userRoutes } = require('./routes/user');
const { createCourseRoutes } = require('./routes/course');
const { createAdminRoutes } = require('./routes/admin');
const app = express();



app.use("/user", userRoutes);
app.use("/course", createCourseRoutes);
app.use("/admin", createAdminRoutes);


app.listen(3000);


>>>>>>> 869f1efc9c7508d0269d1db1426f88754dcdaefa
