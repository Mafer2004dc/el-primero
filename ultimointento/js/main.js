function par(){
    let numero=0,res=""
    numero = document.getElementById("num").value
    numero = parseInt(numero)
    res = document.getElementById("resp")
    if (numero % 2 == 0 ) {
       res.innerHTML = "Es Par"
    }else{
      res.innerHTML = "Es Impar"
    }
  }
  function divisor() {
    let numero1 = 0, numero2=0,res = ""
    numero1 = document.getElementById("num1").value
    numero1 = parseInt(numero1)
    numero2 = document.getElementById("num2").value
    numero2 = parseInt(numero2)
    res = document.getElementById("resp")
    if (numero1 % numero2 == 0) {
      res.innerHTML = `${numero2} Es Divisor de ${numero1}`
    } else {
      res.innerHTML = `${numero2} No es Divisor de ${numero1}`
    }
  }
  
  function tablas() {
    debugger
    let resp = "", tab = "", ini = "", fin = "", r = 0, msg = ""
    tab = document.getElementById("tabla").value
    ini = document.getElementById("vi").value
    fin = document.getElementById("vf").value
    resp = document.getElementById("resp")
    tab = parseInt(tab)
    ini = parseInt(ini)
    fin = parseInt(fin)
    while (ini <= fin) {
      r = ini * tab
      msg = msg + `${ini}*${tab}=${r}` + "\n"
      ini = ini + 1
    }
    resp.innerHTML = msg
  }
  function test() {
    debugger
    let resp = "", tab = "", ini = "", fin = "", r = 0, msg = ""
    tab = document.getElementById("tabla").value
    ini = document.getElementById("vi").value
    fin = document.getElementById("vf").value
    resp = document.getElementById("resp")
    tab = parseInt(tab)
    ini = parseInt(ini)
    fin = parseInt(fin)
    while (ini <= fin) {
      r = ini * tab
      msg = msg + `${ini}*${tab}=${r}` + "\n"
      ini = ini + 1
    }
    resp.innerHTML = msg
  }
  
  
  
  const textarea = document.getElementById("respuesta");
  const inputMensaje = document.getElementById("inputMensaje");
  const mostrarMensajeBtn = document.getElementById("mostrarMensaje");
  const limpiarBtn = document.getElementById("limpiar");
  
  mostrarMensajeBtn.addEventListener("click", () => {
      const mensaje = inputMensaje.value; 
      if (mensaje) {
          textarea.value += mensaje + "\n"; 
          inputMensaje.value = ""; 
      } else {
          alert("Por favor, escribe un mensaje."); 
      }
  });
  
  limpiarBtn.addEventListener("click", () => {
      textarea.value = ""; 
  });
  
  
  
  
  
  
  