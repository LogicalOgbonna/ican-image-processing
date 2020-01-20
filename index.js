const Jimp = require("jimp");
let cert;
Jimp.read("cert1.png").then(function(image) {
    cert = image;
    return Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
}).then(function (font) {
    cert.print(font, 5, 0, {
        text: 'Hello world!',
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
      }, 775, 775)
    cert.print(font, 50, 50, "image Caption")
               .write("certs/new_cert.png");
}).catch(function (err) {
    console.error(err);
});