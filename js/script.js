function Calculate(){
    var qty_steak = document.getElementById("steak").value;
    var qty_chicken = document.getElementById("chicken").value;
    var qty_meat = document.getElementById("meat").value;
    var qty_flour = document.getElementById("flour").value;
    var qty_salad = document.getElementById("salad").value;
    var qty_pork_belly = document.getElementById("pork_belly").value;
    var customer_name = document.getElementById("customer_name").value;
    var customer_phone = document.getElementById("customer_phone").value;
    var customer_email = document.getElementById("customer_email").value;
    
    var final_price = qty_steak*30 + qty_chicken*25 +qty_meat*22 +qty_flour*10 +qty_salad*8 + qty_pork_belly*12;

    document.getElementById("informations").innerHTML =""

    document.getElementById("informations").innerHTML +=
    `
    Caro <strong>${customer_name}</strong><br>
    
    Seguem os dados do seu pedido.<br>
    O seu pedido é:<br>`;
    
    if(qty_steak >0){
        document.getElementById("informations").innerHTML += "Prato: Bife com batata - Preço unitário: R$ 30,00 - Quantidade: "+qty_steak+" - Total: R$ "+qty_steak*30+",00 <br>";

    }
    if(qty_chicken >0){
        document.getElementById("informations").innerHTML += "Prato: Coxa de Frango Crocante - Preço unitário: R$ 25,00 - Quantidade: "+qty_chicken+" - Total: R$ "+qty_chicken*25+",00<br>";

    }
    if(qty_meat >0){
        document.getElementById("informations").innerHTML += "Prato: Carne de Panela - Preço unitário: R$ 22,00 - Quantidade: "+qty_meat+" - Total: R$ "+qty_meat*22+",00<br>";

    }
    if(qty_flour >0){
        document.getElementById("informations").innerHTML += "Prato: Farofa - Preço unitário: R$ 10,00 - Quantidade: "+qty_flour+" - Total: R$ "+qty_flour*10+",00<br>";

    }
    if(qty_salad >0){
        document.getElementById("informations").innerHTML += "Prato: Salada - Preço unitário: R$ 8,00 - Quantidade: "+qty_salad+" - Total: R$ "+qty_salad*8+",00<br>";

    }
    if(qty_pork_belly >0){
        document.getElementById("informations").innerHTML += "Prato: Torresmo - Preço unitário: R$ 12,00 - Quantidade: "+qty_pork_belly+" - Total: R$ "+qty_pork_belly*12+",00<br>";

    }



    document.getElementById("informations").innerHTML +=
    `
    <strong>Preço Final R$ ${final_price},00</strong><br>   
    
    `;



};