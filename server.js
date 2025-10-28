import express from 'express';
const app = express();

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});

app.get("/" ,(req,res) => {
    res.json({
        message:"hello world"
    })
})

app.get("/mult/:a/:b" ,(req,res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({
        result: Number(req.params.a) * Number(req.params.b)
    })
})
