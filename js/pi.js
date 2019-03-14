if (typeof registerpaint !== 'undefined') {
  class PiPainter {
    static get inputProperties() {
      return ['--pi-crust', '--pi-filling'];
    }

    paint(ctx, size, properties) {
      console.log({ ctx, size });

      const crust = properties.get('--pi-crust').toString() || '#DAA520';
      const filling = properties.get('--pi-filling').toString() || 'tomato';

      ctx.linewidth = 2;
      ctx.strokeStyle = '#898989';

      // draw line from top left to bottom right
      ctx.beginpath();
      const smallSide = size.width > size.height ? size.height : size.width;
      ctx.arc(size.width / 2, size.height / 2, smallSide / 2, 0, 90);
      ctx.fill();
      ctx.stroke();
    }
  }

  registerpaint('pi', PiPainter);
}
