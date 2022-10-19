function teste1() {
    var x = document.getElementById("cardCliente");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


var codigo = document.createElement("input");
    codigo.setAttribute("type", "number");
    codigo.setAttribute("value", "Codigo");
    codigo.setAttribute("placeholder", "Código");

var nome = document.createElement("input");
    nome.setAttribute("type", "text");
    nome.setAttribute("name", "NomeCompleto");
    nome.setAttribute("placeholder", "Nome Completo");

var data = document.createElement("input");
    data.setAttribute("type", "date");
    data.setAttribute("name", "DataCadastro");
    data.setAttribute("placeholder", "Data Cadastro");
