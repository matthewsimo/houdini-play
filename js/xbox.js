if (typeof registerPaint !== 'undefined') {
  class XBoxPainter {
    paint(ctx, size) {
      console.log({ ctx, size });
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#898989';

      // draw line from top left to bottom right
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(size.width, size.height);
      ctx.stroke();

      // draw line from top right to bottom left
      ctx.beginPath();
      ctx.moveTo(size.width, 0);
      ctx.lineTo(0, size.height);
      ctx.stroke();
    }
  }

  registerPaint('x-box', XBoxPainter);
}
