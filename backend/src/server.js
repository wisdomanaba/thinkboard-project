import express from "express"
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes", notesRoutes);


app.listen(4001, () => {
    console.log("Server running on PORT: 4001")
});



// mongodb+srv://wisdomanaba83_db_user:GUwuKAzbTgY8hMx0@cluster0.nkalocn.mongodb.net/?appName=Cluster0