import { Canvas, createCanvas, loadImage } from 'canvas';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

interface SeparatedText {
  line: string;
  remaining: string;
}

const createTextLine = (canvas: Canvas, text: string): SeparatedText => {
  const context = canvas.getContext('2d');
  const MAX_WIDTH = 800 as const;

  for (let i = 0; i < text.length; i += 1) {
    const line = text.substring(0, i + 1);

    if (context.measureText(line).width > MAX_WIDTH) {
      return {
        line,
        remaining: text.substring(i + 1),
      };
    }
  }

  return {
    line: text,
    remaining: '',
  };
};

const createTextLines = (canvas: Canvas, text: string): string[] => {
  const lines: string[] = [];
  let currentText = text;

  while (currentText !== '') {
    const separatedText = createTextLine(canvas, currentText);
    lines.push(separatedText.line);
    currentText = separatedText.remaining;
  }
  return lines;
};

const createOgp = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { text } = req.query;
  const WIDTH = 1200 as const;
  const HEIGHT = 630 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);

  const ctx = canvas.getContext('2d');
  // registerFont(path.resolve('./fonts/NotoSansJP-Regular.otf'), {
  //   family: 'Noto',
  // });

  ctx.fillRect(DX, DY, WIDTH, HEIGHT);
  ctx.fillStyle = '#333c5f';
  ctx.font = '100px ipagp';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const backgroundImage = await loadImage(path.resolve('./images/top.jpg'));
  ctx.drawImage(backgroundImage, 0, 0, WIDTH, HEIGHT);

  ctx.font = '60px ipagp';
  const lines = createTextLines(canvas, text as string);
  lines.forEach((line, index) => {
    const y = 314 + 80 * (index - (lines.length - 1) / 2);
    ctx.fillText(line, 600, y);
  });
  ctx.font = '40px ipagp';
  ctx.fillText('細かすぎる占い', 850, 550);

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': buffer.length,
  });
  res.end(buffer, 'binary');
};

export default createOgp;
