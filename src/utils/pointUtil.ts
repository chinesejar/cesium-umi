export const generatePin = (name) => {
  const canvas = document.createElement('canvas');
  let padding = 20;
  let width = 8;
  let height = width * 20;
  canvas.width = width + padding * 2;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  var gradient = ctx.createLinearGradient(0, 0, 0, 120);
  gradient.addColorStop(0, '#00ffff');
  gradient.addColorStop(1, '#0000ff');
  ctx.font = "18px Arial";
  ctx.fillStyle = "#ff0";
  ctx.textAlign = "center";
  ctx.fillText(name, width / 2 + padding, width * 2);
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(padding, height);
  ctx.lineTo(padding, width * 6);
  ctx.lineTo(width + padding, width * 4);
  ctx.lineTo(width + padding, height - width * 2);
  ctx.lineTo(padding, height);
  ctx.fill();
  return canvas;
}
