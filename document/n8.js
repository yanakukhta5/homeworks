// Создать уведомление
function showNotification(optionsObj){
 const notification = document.createElement('div')
 const bodyOverlay = document.createElement('div')
 const closeBtn = document.createElement('button')
 
 notification.classList.add('notification')
 notification.innerHTML = optionsObj.html
 notification.classList.add(optionsObj.className)
 bodyOverlay.style.cssText = 'width: 100vw; height: 100vh; z-index: 2; background-color: rgba(0, 0, 0, 0.5); position: fixed; left: 0; top: 0;'
 document.body.style.cssText = 'overflow: "hidden"; z-index: 1'
 document.body.prepend(bodyOverlay)
 notification.style.cssText = 'position: fixed; z-index: 3; background-color: chartreuse;'
 notification.style.top = optionsObj.top + 'px'
 notification.style.left = optionsObj.left + 'px'
 document.body.append(notification)
 closeBtn.style.cssText = 'width: 30px; height: 30px; position: fixed; z-index: 3; background-color: red; right: 0; top: 0;'
 bodyOverlay.append(closeBtn)
 closeBtn.addEventListener('click', () => {
  notification.style.display = 'none'
  bodyOverlay.style.display = 'none'
 })
}

showNotification({
 top: 10, // 10px от верхней границы окна (по умолчанию 0px)
 left: 10, // 10px от правого края окна (по умолчанию 0px)
 html: "Hlorem xretcrfvbhyunmoikpl,[ ello!", // HTML-уведомление
 className: "welcome" // дополнительный класс для div (необязательно)
})