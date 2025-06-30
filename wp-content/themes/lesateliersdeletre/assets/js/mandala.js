const canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let height = 900;
let width = 900;
canvas.style.width = width + "px";
canvas.style.height = height + "px";

//let scale = window.devicePixelRatio;
let scale = Math.min(window.devicePixelRatio, 1.5);

canvas.width =  width * scale;
canvas.height = height * scale;
ctx.scale(scale, scale);

const center = {x: width / 2 , y: height / 2};
const radius = (width / 2);
const slices = 10;
const _angle = 360 / slices;
let _start = 0;

const colors = ['#d4af37', '#c49b2e', '#e6c76e', '#f7e7be', '#a67c00', '#8b6b00']

const d2r = (deg) => deg * (Math.PI/180);

const getX = (radius, angle) => {
  return radius * Math.cos(d2r(angle))
}

const getY = (radius, angle) => {
  return radius * Math.sin(d2r(angle))
}

const syncDraw = (draw, clockWise) => {
  _start = 0;
  for(let i = 0; i < slices; i++ ) {
        const tempCount = clockWise ? count : -count
        ctx.rotate(d2r(_start + tempCount));
        draw();
        ctx.rotate(-d2r(_start + tempCount));
        _start += _angle;
  }
}

ctx.translate(center.x, center.y);

let count = 0
const init = () => {
  // setup base for Mandala
  count += 0.2;
  if(count > 360) {
    count = 0
  }
ctx.clearRect(-center.x, -center.y, width, height);

  //ctx.rotate(d2r(_angle/2))

  // splitting circle into 16 slices for reference, to be removed once done.
  ctx.strokeStyle = '#efefef';
  const r1 = 30;
  const r2 = 80;
  const r3x1 = 110;
  const r3x2 = 170;
  const r4 = 230;
  const r5 = 290;
  const r6 = 370;
  syncDraw(() => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(335, 0);
    ctx.stroke();
  }, true)
  
  // 1st circle
  syncDraw(() => {
    ctx.fillStyle = colors[1];
    ctx.beginPath();
    ctx.arc(0, 0, r1, 0, d2r(_angle));
    ctx.lineTo(0, 0);
    ctx.fill();
    
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(getX(5, _angle/2), getY(5, _angle/2));
    ctx.bezierCurveTo(r1 + 5, 0, getX(r1 + 5, _angle), getY(r1 + 5, _angle), getX(5, _angle/2), getY(5, _angle/2));
    ctx.fill();
  }, false)
  
  // 2nd circle
  syncDraw(() => {
    ctx.fillStyle = colors[2];
    ctx.beginPath();
    ctx.arc(0, 0, r2, d2r(-_angle/2), d2r(_angle/2));
    ctx.lineTo(getX(r1, _angle / 2), getY(r1, _angle / 2));
    ctx.arc(0, 0, r1, d2r(_angle/2), d2r(-_angle/2), true);
    ctx.lineTo(getX(r2, -_angle / 2), getY(r2, -_angle / 2));
    ctx.fill();
    
    
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(0, 0, r2 - 4, d2r(-_angle/4), d2r(_angle/4));
    ctx.lineTo(getX(r1 + 4, _angle / 4), getY(r1 + 4, _angle / 4));
    ctx.arc(0, 0, r1 + 4, d2r(_angle/4), d2r(-_angle/4), true);
    ctx.lineTo(getX(r2 -4, -_angle / 4), getY(r2 - 4, -_angle / 4));
    ctx.fill();
    
    ctx.fillStyle = colors[2];
    ctx.beginPath();
    ctx.moveTo(r1 + 4, 0);
    ctx.bezierCurveTo(getX(r2 - 20, -_angle/4), getY(r2 - 20, -_angle/4), getX(r2 - 20, _angle/4), getY(r2 - 20, _angle/4), r1 + 4, 0);
    ctx.fill();
  }, true)
  
  // 3rd 2nd half
  //syncDraw(() => {
  //  ctx.fillStyle = colors[4];
  //  ctx.strokeStyle = colors[4];
  //  ctx.beginPath();
  //  ctx.arc(0, 0, r3x2, 0, d2r(_angle))
  //  ctx.stroke()
  //  
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(r3x2, 0);
  //  ctx.quadraticCurveTo(getX(r3x1, -_angle/2), getY(r3x1, -_angle/2), getX(r3x1, -_angle/4), getY(r3x1, -_angle/4));
  //  ctx.lineTo(r3x1, 0);
  //  ctx.fill();
  //  
  //  ctx.strokeStyle = colors[4];
  //  ctx.beginPath();
  //  ctx.moveTo(r3x2, 0);
  //  ctx.quadraticCurveTo(getX(r3x1, _angle/2), getY(r3x1, _angle/2), getX(r3x1, _angle/4), getY(r3x1, _angle/4));
  //  ctx.lineTo(r3x1, 0);
  //  ctx.stroke();
  //  
  //  ctx.fillStyle = colors[4];
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r3x2, _angle/2), getY(r3x2, _angle/2));
  //  ctx.quadraticCurveTo(r3x1, 0, getX(r3x1, _angle/4), getY(r3x1, _angle/4));
  //  ctx.lineTo(getX(r3x1, _angle/2), getY(r3x1, _angle/2));
  //  ctx.fill();
  //  
  //  ctx.strokeStyle = colors[4];
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r3x2, _angle/2), getY(r3x2, _angle/2));
  //  ctx.quadraticCurveTo(getX(r3x1, _angle), getY(r3x1, _angle), getX(r3x1, 3*_angle/4), getY(r3x1, 3*_angle/4));
  //  ctx.lineTo(r3x1, 0);
  //  ctx.stroke();
  //  
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(r3x1 + 12, 0)
  //  ctx.lineTo(r3x1 + 12, 12);
  //  ctx.moveTo(r3x1 + 16, 0)
  //  ctx.lineTo(r3x1 + 16, 12);
  //  ctx.moveTo(r3x1 + 20, 0)
  //  ctx.lineTo(r3x1 + 20, 12);
  //  ctx.moveTo(r3x1 + 24, 0)
  //  ctx.lineTo(r3x1 + 24, 11);
  //  ctx.moveTo(r3x1 + 28, 0)
  //  ctx.lineTo(r3x1 + 28, 10);
  //  ctx.moveTo(r3x1 + 32, 0)
  //  ctx.lineTo(r3x1 + 32, 9);
  //  ctx.moveTo(r3x1 + 36, 0)
  //  ctx.lineTo(r3x1 + 36, 8);
  //  ctx.moveTo(r3x1 + 40, 0)
  //  ctx.lineTo(r3x1 + 40, 7);
  //  ctx.moveTo(r3x1 + 44, 0)
  //  ctx.lineTo(r3x1 + 44, 6);
  //  ctx.stroke();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r3x1 + 12, _angle/2), getY(r3x1 + 12, _angle/2))
  //  ctx.lineTo(getX(r3x1 + 12, _angle/2),  getY(r3x1 + 12, 1.6*_angle/2));
  //  ctx.moveTo(getX(r3x1 + 16, _angle/2), getY(r3x1 + 16, _angle/2))
  //  ctx.lineTo(getX(r3x1 + 16, _angle/2),  getY(r3x1 + 16, 1.5*_angle/2));
  //  ctx.moveTo(getX(r3x1 + 20, _angle/2), getY(r3x1 + 20, _angle/2))
  //  ctx.lineTo(getX(r3x1 + 20, _angle/2),  getY(r3x1 + 20, 1.5*_angle/2));
  //  ctx.moveTo(getX(r3x1 + 24, _angle/2), getY(r3x1 + 24, _angle/2))
  //  ctx.lineTo(getX(r3x1 + 24, _angle/2),  getY(r3x1 + 24, 1.4*_angle/2));
  //  ctx.moveTo(getX(r3x1 + 28, _angle/2), getY(r3x1 + 28, _angle/2))
  //  ctx.lineTo(getX(r3x1 + 28, _angle/2),  getY(r3x1 + 28, 1.4*_angle/2));
  //  ctx.moveTo(getX(r3x1 + 32, _angle/2), getY(r3x1 + 32, _angle/2))
  //  ctx.lineTo(getX(r3x1 + 32, _angle/2),  getY(r3x1 + 32, 1.3*_angle/2));
  //  ctx.moveTo(getX(r3x1 + 36, _angle/2), getY(r3x1 + 36, _angle/2))
  //  ctx.lineTo(getX(r3x1 + 36, _angle/2),  getY(r3x1 + 36, 1.3*_angle/2));
  //  ctx.moveTo(getX(r3x1 + 40, _angle/2), getY(r3x1 + 40, _angle/2))
  //  ctx.lineTo(getX(r3x1 + 40, _angle/2),  getY(r3x1 + 40, 1.2*_angle/2));
  //  ctx.moveTo(getX(r3x1 + 44, _angle/2), getY(r3x1 + 44, _angle/2))
  //  ctx.lineTo(getX(r3x1 + 44, _angle/2),  getY(r3x1 + 44, 1.2*_angle/2));
  //  ctx.stroke();
  //  
  //  
  //  ctx.beginPath();
  //  ctx.arc(getX(r3x2 - 10, _angle/4), getY(r3x2 - 10, _angle/4), 4, 0, d2r(360));
  //  ctx.fill();
  //  
  //  ctx.beginPath();
  //  ctx.arc(getX(r3x2 - 10, 3*_angle/4), getY(r3x2 - 10, 3*_angle/4), 4, 0, d2r(360));
  //  ctx.fill();
  //}, false)
  
  // 3rd 1st half
  syncDraw(() => {
    ctx.fillStyle = colors[2];
    ctx.beginPath();
    ctx.arc(0, 0, r3x1, 0, d2r(_angle));
    ctx.lineTo(getX(r2, _angle), getY(r2, _angle));
    ctx.arc(0, 0, r2, d2r(_angle/2), 0, true);
    ctx.lineTo(r3x1, 0);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(getX(r3x1, _angle/4), getY(r3x1, _angle/4), 12, 0, d2r(360));
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(getX(r3x1, 3*_angle/4), getY(r3x1, 3*_angle/4), 12, 0, d2r(360));
    ctx.fill();
    
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(getX(r3x1, _angle/4), getY(r3x1, _angle/4), 7, 0, d2r(360));
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(getX(r3x1, 3*_angle/4), getY(r3x1, 3*_angle/4), 7, 0, d2r(360));
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(0, 0, r3x1, d2r(2), d2r(_angle/2 - 2));
    ctx.lineTo(getX(r2, _angle/2 - 2), getY(r2, _angle/2 - 2));
    ctx.arc(0, 0, r2, d2r(_angle/2 - 2), d2r(2), true);
    ctx.lineTo(getX(r3x1, 2), getY(r3x1, 2));
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(0, 0, r3x1, d2r(_angle/2 + 2), d2r(_angle - 2));
    ctx.lineTo(getX(r2, _angle - 2), getY(r2, _angle - 2));
    ctx.arc(0, 0, r2, d2r(_angle - 2), d2r(_angle/2 + 2), true);
    ctx.lineTo(getX(r3x1, _angle/2 + 2), getY(r3x1, _angle/2 + 2));
    ctx.fill();
    
    
    ctx.fillStyle = colors[1];
    ctx.beginPath();
    ctx.arc(getX(r2 + 5, _angle/4), getY(r2 + 5, _angle/4), 2, 0, d2r(360));
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(getX(r2 + 12, _angle/4), getY(r2 + 12, _angle/4), 3, 0, d2r(360));
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(getX(r2 + 20, _angle/4), getY(r2 + 20, _angle/4), 4, 0, d2r(360));
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(getX(r2 + 5, 3*_angle/4), getY(r2 + 5, 3*_angle/4), 2, 0, d2r(360));
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(getX(r2 + 12, 3*_angle/4), getY(r2 + 12, 3*_angle/4), 3, 0, d2r(360));
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(getX(r2 + 20, 3*_angle/4), getY(r2 + 20, 3*_angle/4), 4, 0, d2r(360));
    ctx.fill();
  }, true) 
  
  
  // 5th circle only
  syncDraw(() => {
    ctx.fillStyle = colors[5];
    ctx.beginPath();
    ctx.arc(0, 0, r5, 0, d2r(_angle));
    ctx.lineTo(getX(r4, _angle), getY(r4, _angle));
    ctx.arc(0, 0, r4, d2r(_angle), 0, true);
    ctx.lineTo(r5, 0);
    ctx.fill();
  }, false)
  // 5th circle elements
  syncDraw(() => {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(getX(r4, _angle/2), getY(r4, _angle/2), 46, -d2r(84), d2r(106));
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(r5-15, 0, 4, 0, d2r(360));
    ctx.fill();
    
    ctx.strokeStyle = colors[5];
    ctx.beginPath();
    ctx.moveTo(getX(r4, _angle/2), getY(r4, _angle/2));
    ctx.bezierCurveTo(getX(r4 + 35, _angle/2 -3), getY(r4 + 35, _angle/2-3), getX(r4 +35, _angle/2 + 3), getY(r4+35, _angle/2 + 3), getX(r4, _angle/2), getY(r4, _angle/2));
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(getX(r4+6, _angle/2 - 2.5), getY(r4+6, _angle/2 - 2.5));
    var tempR = 0;
    var tempA = 0;
    for (let n = 0; n < 40; n++) {
        tempR += 0.10;
        tempA += (Math.PI * 2) / 50;
        const x = getX(r4+6, _angle/2 - 2.5) + tempR * Math.cos(tempA);
        const y = getY(r4+6, _angle/2 - 2.5) + tempR * Math.sin(tempA);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(getX(r4+6, _angle/2 + 2.5), getY(r4+6, _angle/2 + 2.5));
    var tempR = 0;
    var tempA = 0;
    for (let n = 0; n < 40; n++) {
        tempR += 0.10;
        tempA += (Math.PI * 2) / 50;
        const x = getX(r4+6, _angle/2 + 2.5) + tempR * Math.sin(tempA);
        const y = getY(r4+6, _angle/2 + 2.5) + tempR * Math.cos(tempA);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
  }, false)
  
  // 4th circle only
  syncDraw(() => {
    ctx.fillStyle = colors[4];
    ctx.beginPath();
    ctx.arc(0, 0, r4, 0, d2r(_angle));
    ctx.lineTo(getX(r3x2, _angle), getY(r3x2, _angle));
    ctx.arc(0, 0, r3x2, d2r(_angle), 0, true);
    ctx.lineTo(r4, 0);
    ctx.fill();
  }, true)
  // 4th circle elements
  syncDraw(() => {  
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(r3x2, 0);
    ctx.bezierCurveTo(r3x2 + 30, 0, getX(r3x2 + 30, _angle/2), getY(r3x2 + 30, _angle/2), getX(r4, _angle/2), getY(r4, _angle/2));   
  
    ctx.moveTo(getX(r4, _angle/2), getY(r4, _angle/2));
    ctx.bezierCurveTo(getX(r3x2 + 30, _angle/2), getY(r3x2 + 30, _angle/2), getX(r3x2 + 30, _angle), getY(r3x2 + 30, _angle), getX(r3x2, _angle), getY(r3x2, _angle));
    
    ctx.arc(0,0, r3x2, d2r(_angle), 0, true);
    ctx.fill();
    
    ctx.fillStyle = colors[4];
    ctx.beginPath();
    ctx.arc(getX(r4 - 20, _angle/2), getY(r4 - 20, _angle/2), 4, 0, d2r(360));
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(r3x2 + 8, getY(r3x2+5, _angle/2));
    var tempR = 0;
    var tempA = 0;
    for (let n = 0; n < 40; n++) {
        tempR += 0.14;
        tempA += (Math.PI * 2) / 30;
        const x = r3x2+8 + tempR * Math.cos(tempA);
        const y = getY(r3x2+8, _angle/2) + tempR * Math.sin(tempA);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(r4, 0);
    ctx.bezierCurveTo(getX(r4 - 35, _angle/8), getY(r4 - 35, _angle/8), getX(r4 -35, -_angle/8), getY(r4-35, -_angle/8), r4, 0);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(r4, 0);
    ctx.bezierCurveTo(getX(r4 -20, -_angle/4), getY(r4-20, -_angle/4), getX(r4-20, -_angle/10), getY(r4-20, -_angle/15), r4, 0);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(r4, 0);
    ctx.bezierCurveTo(getX(r4 -20, _angle/4), getY(r4 -20, _angle/4), getX(r4 -20, _angle/10), getY(r4 -20, _angle/15), r4, 0);
    ctx.fill();
  }, true)
  
  
  //6th Circle elements
  //syncDraw(() => {
  //  
  //  ctx.strokeStyle = colors[2]
  //  ctx.beginPath();
  //  ctx.moveTo(r5, 0);
  //  ctx.lineTo(r5 +20, 0)
  //  ctx.lineTo(getX(r5 + 40, _angle/4), getY(r5 + 40, _angle/4))
  //  ctx.lineTo(getX(r5 + 20, _angle/2), getY(r5 + 20, _angle/2))
  //  ctx.lineTo(getX(r5, _angle/2), getY(r5, _angle/2))
  //  ctx.arc(0, 0, r5, d2r(_angle/2), 0, true)
  //  ctx.stroke();
  //  
  //  ctx.strokeStyle = colors[2]
  //  ctx.beginPath();
  //  ctx.moveTo(r5, 0);
  //  ctx.lineTo(r5 +20, 0)
  //  ctx.lineTo(getX(r5 + 40, -_angle/4), getY(r5 + 40, -_angle/4))
  //  ctx.lineTo(getX(r5 + 20, -_angle/2), getY(r5 + 20, -_angle/2))
  //  ctx.lineTo(getX(r5, -_angle/2), getY(r5, -_angle/2))
  //  ctx.arc(0, 0, r5, d2r(-_angle/2), 0)
  //  ctx.stroke();
  //
  //  ctx.fillStyle = colors[1]
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5 + 40, -_angle/4), getY(r5 + 40, -_angle/4));
  //  ctx.lineTo(getX(r5 + 60, -_angle/4), getY(r5 + 60, -_angle/4))
  //  ctx.lineTo(getX(r5 + 80, 0), getY(r5 + 80, 0))
  //  ctx.lineTo(getX(r5 + 60, _angle/4), getY(r5 + 60, _angle/4))
  //  ctx.lineTo(getX(r5+ 40, _angle/4), getY(r5+ 40, _angle/4))
  //  ctx.lineTo(getX(r5+ 40, _angle/4), getY(r5+ 40, _angle/4))
  //  ctx.lineTo(r5+ 20, 0)
  //  ctx.fill();
  //  
  //  ctx.strokeStyle = colors[2]
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5 + 60, _angle/4), getY(r5 + 60, _angle/4));
  //  ctx.lineTo(getX(r5 + 80, _angle/2), getY(r5 + 80, _angle/2))
  //  ctx.lineTo(getX(r5 + 60, 3*_angle/4), getY(r5 + 60, 3*_angle/4));   
  //  ctx.stroke();
  //  
  //  ctx.fillStyle = colors[2]
  //  ctx.beginPath();
  //  ctx.moveTo(r5 + 80, 0);
  //  ctx.arc(0, 0, r5 + 80, 0, d2r(_angle/2))
  //  ctx.lineTo(getX(r5 + 60, _angle/4), getY(r5 + 60, _angle/4));
  //  ctx.fill();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5 + 80, _angle/2), getY(r5 + 80, _angle/2));
  //  ctx.arc(0, 0, r5 + 80, d2r(_angle/2), d2r(_angle))
  //  ctx.lineTo(getX(r5 + 60, 3*_angle/4), getY(r5 + 60, 3*_angle/4));
  //  ctx.fill();
  //  
  //  ctx.fillStyle = '#fff';
  //  ctx.beginPath();
  //  ctx.moveTo(r5+30, 0);
  //  ctx.bezierCurveTo(getX(r5 + 70, _angle/10), getY(r5+70, _angle/10), getX(r5+70, -_angle/10), getY(r5+60, -_angle/10), r5+30, 0);
  //  ctx.fill();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(r5+30, 0);
  //  ctx.bezierCurveTo(getX(r5 + 50, -_angle/4), getY(r5 + 50, -_angle/4), getX(r5 + 50, -_angle/10), getY(r5 + 50, -_angle/15), r5+30, 0);
  //  ctx.fill();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(r5+30, 0);
  //  ctx.bezierCurveTo(getX(r5 + 50, _angle/4), getY(r5 + 50, _angle/4), getX(r5 + 50, _angle/10), getY(r5 + 50, _angle/15), r5+30, 0);
  //  ctx.fill();
  //  
  //  
  //  ctx.fillStyle = colors[1];
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5+30, _angle/2), getY(r5+30, _angle/2));
  //  ctx.bezierCurveTo(getX(r5 + 70, _angle/2 -2), getY(r5+70, _angle/2 - 2), getX(r5+70, _angle/2 +2), getY(r5+60, _angle/2+2), getX(r5+30, _angle/2), getY(r5+30, _angle/2));
  //  ctx.fill();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5+30, _angle/2), getY(r5+30, _angle/2));
  //  ctx.bezierCurveTo(getX(r5 + 50, _angle/2-5), getY(r5 + 50, _angle/2-5), getX(r5 + 50, _angle/2 - 1), getY(r5 + 50, _angle/2 -1), getX(r5+30, _angle/2), getY(r5+30, _angle/2));
  //  ctx.fill();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5+30, _angle/2), getY(r5+30, _angle/2));
  //  ctx.bezierCurveTo(getX(r5 + 50, _angle/2+5), getY(r5 + 50, _angle/2+5), getX(r5 + 50, _angle/2 + 1), getY(r5 + 50, _angle/2 +1), getX(r5+30, _angle/2), getY(r5+30, _angle/2));
  //  ctx.fill();
  //  
  //  ctx.strokeStyle = colors[2];
  //  ctx.beginPath();
  //  ctx.moveTo(r5 + 10, getY(r5+5, _angle/4));
  //  var tempR = 0;
  //  var tempA = 0;
  //  for (let n = 0; n < 99; n++) {
  //      tempR += 0.14;
  //      tempA += (Math.PI * 2) / 30;
  //      const x = r5+10 + tempR * Math.cos(tempA);
  //      const y = getY(r5+10, _angle/4) + tempR * Math.sin(tempA);
  //      ctx.lineTo(x, y);
  //  }
  //  ctx.stroke();
  //  
  //  
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5, -_angle/4), getY(r5, -_angle/4));
  //  ctx.bezierCurveTo(getX(r5 + 35, -_angle/4-2), getY(r5+ 35, -_angle/4-2), getX(r5 + 35, -_angle/4+2), getY(r5+ 35, -_angle/4+2), getX(r5, -_angle/4), getY(r5, -_angle/4));
  //  ctx.stroke();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5, -_angle/4), getY(r5, -_angle/4));
  //  ctx.bezierCurveTo(getX(r5 + 25, -_angle/4-4), getY(r5+ 25, -_angle/4-4), getX(r5 + 25, -_angle/4-1), getY(r5+ 25, -_angle/4-1), getX(r5, -_angle/4), getY(r5, -_angle/4));
  //  ctx.stroke();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5, -_angle/4), getY(r5, -_angle/4));
  //  ctx.bezierCurveTo(getX(r5 + 25, -_angle/4+4), getY(r5+ 25, -_angle/4+4), getX(r5 + 25, -_angle/4+1), getY(r5+ 25, -_angle/4+1), getX(r5, -_angle/4), getY(r5, -_angle/4));
  //  ctx.stroke();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5, -_angle/4), getY(r5, -_angle/4));
  //  ctx.bezierCurveTo(getX(r5 + 15, -_angle/4-5), getY(r5+ 15, -_angle/4-5), getX(r5 + 15, -_angle/4-2), getY(r5+15, -_angle/4-2), getX(r5, -_angle/4), getY(r5, -_angle/4));
  //  ctx.stroke();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r5, -_angle/4), getY(r5, -_angle/4));
  //  ctx.bezierCurveTo(getX(r5 + 15, -_angle/4+5), getY(r5+ 15, -_angle/4+5), getX(r5 + 15, -_angle/4+2), getY(r5+15, -_angle/4+2), getX(r5, -_angle/4), getY(r5, -_angle/4));
  //  ctx.stroke();
  //  
  //  ctx.fillStyle = colors[2];
  //  ctx.beginPath();
  //  ctx.arc(getX(r5 + 31, 3*_angle/4), getY(r5+31,3*_angle/4), 2, 0, d2r(360));
  //  ctx.fill();
  //  
  //  ctx.beginPath();
  //  ctx.arc(getX(r5+23, 3*_angle/4-2.5), getY(r5+23,3*_angle/4-2.5), 2, 0, d2r(360));
  //  ctx.fill();
  //  
  //  ctx.beginPath();
  //  ctx.arc(getX(r5+23, 3*_angle/4+2.5), getY(r5+23,3*_angle/4+2.5), 2, 0, d2r(360));
  //  ctx.fill();
  //  
  //  ctx.beginPath();
  //  ctx.arc(getX(r5+12, 3*_angle/4-3.5), getY(r5+12,3*_angle/4-3.5), 2, 0, d2r(360));
  //  ctx.fill();
  //  
  //  ctx.beginPath();
  //  ctx.arc(getX(r5+12, 3*_angle/4+3.5), getY(r5+12,3*_angle/4+3.5), 2, 0, d2r(360));
  //  ctx.fill();
  //
  //}, true)
  
  //7th circle
  //syncDraw(() => {
  //  
  //  ctx.strokeStyle = colors[1]
  //  ctx.beginPath();
  //  ctx.moveTo(r6, 0);
  //  ctx.bezierCurveTo(r6 + 25, 0, getX(r6 + 25, -_angle/4), getY(r6 + 25, -_angle/4), getX(r6 + 50, -_angle/4), getY(r6 + 50, -_angle/4),);
  //  ctx.stroke();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r6, -_angle/2), getY(r6, -_angle/2));
  //  ctx.bezierCurveTo(getX(r6 + 25, -_angle/2), getY(r6 + 25, -_angle/2), getX(r6 + 25, -_angle/4), getY(r6 + 25, -_angle/4), getX(r6 + 50, -_angle/4), getY(r6 + 50, -_angle/4),);
  //  ctx.stroke();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(r6, 0);
  //  ctx.bezierCurveTo(r6 + 25, 0, getX(r6 + 25, _angle/4), getY(r6 + 25, _angle/4), getX(r6 + 50, _angle/4), getY(r6 + 50, _angle/4),);
  //  ctx.stroke();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(getX(r6, _angle/2), getY(r6, _angle/2));
  //  ctx.bezierCurveTo(getX(r6 + 25, _angle/2), getY(r6 + 25, _angle/2), getX(r6 + 25, _angle/4), getY(r6 + 25, _angle/4), getX(r6 + 50, _angle/4), getY(r6 + 50, _angle/4),);
  //  ctx.stroke();
  //  
  //  
  //  ctx.strokeStyle = colors[2];
  //  ctx.beginPath();
  //  ctx.moveTo(r6 + 8, getY(r6+5, _angle/4));
  //  var tempR = 0;
  //  var tempA = 0;
  //  for (let n = 0; n < 135; n++) {
  //      tempR += 0.09;
  //      tempA += (Math.PI * 2) / 30;
  //      const x = r6+8 + tempR * Math.cos(tempA);
  //      const y = getY(r6+8, _angle/4) + tempR * Math.sin(tempA);
  //      ctx.lineTo(x, y);
  //  }
  //  ctx.stroke();
  //  
  //  ctx.beginPath();
  //  ctx.moveTo(r6 + 8, getY(r6+5, -_angle/4));
  //  var tempR = 0;
  //  var tempA = 0;
  //  for (let n = 0; n < 135; n++) {
  //      tempR += 0.09;
  //      tempA += (Math.PI * 2) / 30;
  //      const x = r6+8 + tempR * Math.cos(tempA);
  //      const y = getY(r6+8, -_angle/4) + tempR * Math.sin(tempA);
  //      ctx.lineTo(x, y);
  //  }
  //  ctx.stroke();
  //  
  //  ctx.beginPath();
  //  ctx.arc(getX(r6+27, _angle/4), getY(r6+27,_angle/4), 3, 0, d2r(360));
  //  ctx.fill();
  //  ctx.beginPath();
  //  ctx.arc(getX(r6+27, 3*_angle/4), getY(r6+27,3*_angle/4), 3, 0, d2r(360));
  //  ctx.fill();
  //}, false)
  
  
  window.requestAnimationFrame(init);
}


init();
