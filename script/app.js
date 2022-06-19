addEventListener('DOMContentLoaded', ()=>{
  const btn_menu = document.querySelector('.btn_menu');
  
  if (btn_menu){
    btn_menu.addEventListener('click', () =>{
      const menu_item = document.querySelector('.menu_item');
      menu_item.classList.toggle('show');
      btn_menu.classList.toggle('giro');
    })
  }

const btn_locales = document.querySelector('.btn_locales');

if (btn_locales){
  btn_locales.addEventListener('click', () =>{
    const local1 = document.querySelector('.local1');
    local1.classList.toggle('cambio1');
    const local2 = document.querySelector('.local2');
    local2.classList.toggle('cambio2');
    const btn_locales1 = document.querySelector('.btn_locales');
    btn_locales.classList.toggle('btn_locales1');
  })
}
})

function disabletext(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
document.onmousedown=disabletext
document.onclick=reEnable
}

function deshabilitar(){
console.log ("Funcion Inabilitada")
return false
}
document.oncontextmenu=deshabilitar