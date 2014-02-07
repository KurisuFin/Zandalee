var initCanvas;

initCanvas = function() {
  var canvas, ctx;
  $("<canvas id=\"canvas\"></canvas>").appendTo("body");
  canvas = $("#canvas")[0];
  canvas.width = $(document).width();
  canvas.height = $(document).height();
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF00FF";
  return ctx.fillRect(0, 0, canvas.width, canvas.height);
};

$(document).ready(function() {
  return initCanvas();
});
