let hourHand =  document.getElementById('hour-hand')
let minuteHand =  document.getElementById('rotate-minute-hand')
let secondHand =  document.getElementById('rotate-second-hand')


let inlineStylehour = document.createAttribute('transform:rotate('+ (hourHand /2) * 30 + ')')

let inlineStyle = document.createAttribute('transform:rotate('+ minuteHand * 6 + ')')

minuteHand.append(inlineStyle)