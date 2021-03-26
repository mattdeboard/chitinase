// function draw(image: any) {
//   const canvas = <HTMLCanvasElement>document.getElementById("my-canvas");
//   const context = canvas.getContext("2d")!;
//   // context.fillStyle = "red";
//   // context.fillRect(0, 0, 50, 50);
//   context.strokeStyle = "black";
//   context.lineWidth = 1;
//   const width = 10;
//   const height = 10;
//   const cellSize = 50;
//   console.log("Hey");
//   for (let x = 0; x <= width; x++) {
//     context.beginPath();
//     context.moveTo(x * cellSize + 0.5, 0);
//     context.lineTo(x * cellSize + 0.5, height * cellSize);
//     context.stroke();
//   }

//   for (let y = 0; y <= height; y++) {
//     context.beginPath();
//     context.moveTo(0, y * cellSize + 0.5);
//     context.lineTo(width * cellSize, y * cellSize + 0.5);
//     context.stroke();
//   }
// }

// async function main() {
//   const lib = await import("../pkg").catch(console.error);

//   if (lib) {
//     const image = new lib.Image();
//     console.log(image);
//     draw(image);
//   }
// }

// main();

// async function main() {
//   const lib = await import("../pkg").catch(console.error);
//   console.log(lib);
// }

// main();

const lib = import("../pkg");

lib.then((m) => m.start()).catch(console.error);
