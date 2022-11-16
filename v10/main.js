import './styles.scss';

function route() {
  const params = new URLSearchParams(window.location.search);
  const teikna = params.get('teikna');
  if (teikna) {
    document.querySelector('#app').innerHTML = `
    <div>
    <h1>Hér fáum við að sjá svakalega flotta teikningu</h1>
    <canvas id="canvas" width="1400" height="1000"></canvas>
    <p>Höfundur er enginn annar en Óskar Pablo Diego José Francisco de Paula 
    Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso</p>
    </div>
    `;
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');
    c.lineWidth = 5;
    c.strokeStyle = 'white';

    c.beginPath();
    c.moveTo(400, 400);
    c.lineTo(400, 300);
    c.quadraticCurveTo(450, 250, 500, 300);
    c.lineTo(500, 400);
    c.stroke();

    c.beginPath();
    c.moveTo(800, 400);
    c.bezierCurveTo(800, 150, 1200, 700, 1200, 400);
    c.stroke();
    // Húsið okkar
    c.lineWidth = 10;
    c.strokeStyle = 'red';
    c.fillStyle = 'red';
    // Veggir
    c.strokeRect(800, 500, 300, 200);
    // Hurð
    c.fillRect(925, 600, 50, 100);
    // Þak
    c.beginPath();
    c.moveTo(700, 500);
    c.lineTo(1200, 500);
    c.lineTo(950, 300);
    c.lineTo(700, 500);
    c.stroke();
    c.font = '30px Times-New-Roman';
    c.fillText('Hello Zook,this could be ours but you playin', 100, 500);
  } else {
    document.querySelector('#app').innerHTML = `
    <h1>Welcome to your nightmare</h1>
    <div class="player">
    <video controls>
    <source src="/malao.mp4" type="video/mp4" />
    </video>
    </div>
    </div>
    <div>
    <button><a href="/?teikna=yes">
    <div>Fyrirgefðu, ýta hér fyrir flotta teikningu
    </div></button>
    </a>
    </div>
    `;
  }
}
route();
