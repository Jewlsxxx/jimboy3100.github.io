//MAP AUTO START
CanvasRenderingContext2D.prototype._drawImage = CanvasRenderingContext2D.prototype.drawImage, CanvasRenderingContext2D.prototype.drawImage = function() {
  if (arguments[0].src) {
    if ("http://agar.io/img/background.png" == arguments[0].src) {
      arguments[0].src = "";
    }
  }
  this._drawImage.apply(this, arguments);
};
