
// --------------------------------------------------------------------- wrapper

(() => {

  // ------------------------------------------------------------------- variables

  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');
  const mouse = { x: 0, y: 0, down: false };
  const keys = [];
  const parts = [];

  // ------------------------------------------------------------------- loop

  const loop = () => {

    // ----------------------------------------------------------------- clear

    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // ----------------------------------------------------------------- parts

    for (let i = parts.length - 1; i >= 0; --i) {
      const p = parts[i];
    }

    requestAnimationFrame(loop);
  };

  // ------------------------------------------------------------------- events

  addEventListener('load', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    requestAnimationFrame(loop);
  });

  addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });

  addEventListener('mousemove', ({x, y}) => { mouse.x = x; mouse.y = y; });
  addEventListener('mousedown', () => mouse.down = true);
  addEventListener('mouseup', () => mouse.down = false);
  addEventListener('keydown', ({keyCode}) => keys[keyCode] = true);
  addEventListener('keyup', ({keyCode}) => keys[keyCode] = false);

})();