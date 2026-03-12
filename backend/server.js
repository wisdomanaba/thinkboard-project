import express from "express"
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes", notesRoutes);


app.listen(4001, () => {
    console.log("Server running on PORT: 4001")
});


// What is an Endpoint?
// An Endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource.