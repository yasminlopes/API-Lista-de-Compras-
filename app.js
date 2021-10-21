const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yasmin');

const db = mongoose.connection;

require("./models/Produto");
const Produto = mongoose.model('produto');

const app = express();

    app.use(express.json());

mongoose.connect('mongodb://localhost/yasmin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

//Mostrar lista completa
    app.get("/", (req, res) => {
    Produto.find({}).then((produto) => {
        return res.json(produto);
        }).catch((erro) => {
        return res.status(400).json({
        error: true,
        message: "Nenhum produto encontrado."
        })
        })
        //soma
        db.collection('produto').aggregate();([
            { $group: { _id: "$item", total: { $sum: "$valor" } } },
            { $sort: { total: -1 } }
          ])
});
//



//mostrar um item
    app.get("/produto/:id", (req, res) => {
    //console.log(req.params.id);
    Produto.findOne({_id:req.params.id}).then((produto) => {
    return res.json(produto);
    }).catch((erro) => {
    return res.status(400).json({
    error:true,
    message: "Nenhum produto encontrado"
        })
       })
    });
//Editar um item
    app.put("/produto/:id", (req, res) => {
    const produto = Produto.updateOne({ _id: req.params.id}, req.body, (err) => {
    if (err) return res.status(400).json({
    error: true,
    message: "ERRO: Produto não foi editado."
    });

    return res.json({
    error: false,
    message: "Produto editado com sucesso!"
    }) 
})
    });
// apagar
    app.delete("/produto/:id", (req, res) => {
    const produto = Produto.deleteOne({ _id: req.params.id}, (err) => {
       if (err) return res.status(400).json({
       error: true,
       message: "ERRO: Produto não foi excluído."
       });
   
       return res.json({
       error: false,
       message: "Produto excluído com sucesso!"
       }) 
    })
    });
    //Inserir item
    app.post("/produto", (req, res) => {
        const produto = Produto.create(req.body, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: "ERRO: Produto não foi cadastrado"
            });     
            return res.status(200).json({
                error: false,
                message: "Produto cadastrado com sucesso!"
            })
        });
    });   

//servidor
    app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});

