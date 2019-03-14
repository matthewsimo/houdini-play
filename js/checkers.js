if (typeof registerPaint !== 'undefined') {
  class CheckersPainter {
    validBoards = {
      classic: ['red', 'black'],
      chess: ['black', 'white'],
      wood: ['saddlebrown', 'blanchedalmond']
    };

    static get inputProperties() {
      return ['--c-spacing', '--c-size', '--c-type'];
    }

    paint(ctx, size, properties) {
      const sizing = parseInt(properties.get('--c-size').toString()) || 80;
      const spacing = parseInt(properties.get('--c-spacing').toString()) || 0;

      const typeProp =
        properties
          .get('--c-type')
          .toString()
          .trim() || 'classic';

      const colors = this.validBoards[typeProp];
      for (let y = 0; y < size.height / sizing; y++) {
        for (let x = 0; x < size.width / sizing; x++) {
          ctx.fillStyle = colors[(x + y) % colors.length];
          ctx.beginPath();
          ctx.rect(
            x * (sizing + spacing),
            y * (sizing + spacing),
            sizing,
            sizing
          );
          ctx.fill();
        }
      }
    }
  }

  registerPaint('checkers', CheckersPainter);
}
