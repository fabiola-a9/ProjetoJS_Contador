let conta = 0;
const valor= document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("subtrair")){
            conta --;
        }else if (styles.contains("adicionar")){
            conta ++;
        }else{
            conta = 0;
        }
        if(conta > 0){
            valor.style.color = "green";
        } if( conta < 0){
            valor.style.color = "red";
        }if (conta === 0 ){
            valor.style.color = "black";
        }
        valor.textContent = conta;
    })

});

