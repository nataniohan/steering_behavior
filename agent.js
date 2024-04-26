class Agent{
  constructor(p ,v){
    this.p = p;
    this.v = v;
    this.vmax = 0.9;
  }
  
  update(){
  //zerar a velocidade
  this.v.set(0, 0);
    //calcular o vetor q que liga o agente ao objetivo
    
  var q = p5.Vector.sub(obj, this.p);
    //construir o versor
  q.normalize();
  //construir a velocidade desejada
  var vdes = p5.Vector.mult(q, this.vmax);
  //calcular a steering force
  var sf = p5.Vector.sub(vdes, this.v);
  //atualizar a velocidade e a posição
  this.v.add(sf);
  this.p.add(this.v);
  }
  show(){
    fill(0, 100, 0);
    push();
    translate(this.p.x, this.p.y);
    rotate(this.v.heading());
    triangle(-2, -7, -2, 2, 21, 0);
    pop();
  }
}