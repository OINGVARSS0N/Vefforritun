import './style.css';

function route() {
  const params = new URLSearchParams(window.location.search);
  const teikna = params.get('teikna');
  if (teikna) {
    document.querySelector('#app').innerHTML = `
    <div>
    <p>wow svaka flottur blár kassi</p>
      <canvas id="canvas"></canvas>
    </div>
    `;
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');
    c.strokeStyle = 'white';
    c.fillStyle = 'blue';
    c.rect(100, 20, 150, 100);
    c.stroke();
    c.fill();
    c.fillStyle = 'red';
    c.fillRect(400, 500, 300, 250);
  } else {
    document.querySelector('#app').innerHTML = `
    <h1>Welcome to your nightmare</h1>
    <div class="player">
  <video controls>
    <source src="malao.mp4" type="video/mp4" />
  </video>
  </div>
</div>
    <div>
        <a href="/?teikna=yes">
        <div>Fyrirgefðu, ýta hér fyrir flotta teikningu</div>
      </a>
      </div>
    `;
  }
}
route();
