function getDotsCoordsForWindow(elem){
 const elemCoords = elem.getBoundingClientRect()
 console.log(elemCoords)
 const result = {
 topLeftOuter: {
  top: elemCoords.top,
  left: elemCoords.left
 },
 bottomRightOuter: {
  bottom: elemCoords.top + elem.clientTop + elem.clientHeight,
  right: elemCoords.left + elem.clientLeft + elem.clientWidth,
 },
 topLeftInner: {
  top: elemCoords.top + elem.clientTop, 
  left: elemCoords.left + elem.clientLeft, 
 },
  get bottomRightInner() {
   return {
   bottom: this.topLeftInner.top + elem.clientHeight - elem.clientTop,
   right: this.topLeftInner.left + elem.clientWidth - elem.clientLeft
   }
  }
 }
 console.log(result, result.bottomRightInner)
 return result
}
getDotsCoordsForWindow(document.querySelector('.field'))

