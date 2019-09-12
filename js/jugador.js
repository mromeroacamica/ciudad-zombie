/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  movimientos: function(tecla,movX, movY){
    if(tecla=='izq'||tecla=='der'){
      this.x+=movX;
      this.ancho=30;
      this.alto=15;
      // console.log(this);
      // console.log(movX);
      if(tecla=='izq'){
        this.sprite='imagenes/auto_rojo_izquierda.png';
      }else if(tecla=='der'){
        this.sprite='imagenes/auto_rojo_derecha.png';

      }
    }else{
      this.y+=movY;
      if(tecla=='arriba'){
        this.sprite='imagenes/auto_rojo_arriba.png';
        this.ancho=15;
        this.alto=30;
      }else if(tecla=='abajo'){
        this.sprite='imagenes/auto_rojo_abajo.png';
        this.ancho=15;
        this.alto=30;
      }

    }  
  },
  perderVidas:function(cantidadVidas){
    this.vidas-=cantidadVidas;
  }
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}
