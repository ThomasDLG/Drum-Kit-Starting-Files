let buttons = document.querySelectorAll(".drum")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let audio = new Audio('sounds/'+[i]+'.mp3')
        audio.play()
    })
    document.addEventListener('keypress', function(keyPressed) {
        let keyResult = keyPressed.key
        switch (keyResult){
            case "a":
                if(keyResult == 'a') {
                    keyResult = 0
                    let audio = new Audio('sounds/'+keyResult+'.mp3')
                    audio.play()
                }
                break;
            case "z":
                if(keyResult == 'z') {
                    keyResult = 1
                    let audio = new Audio('sounds/'+keyResult+'.mp3')
                    audio.play()
                }
                break;
            case "e":
                if(keyResult == 'e') {
                    keyResult = 2
                    let audio = new Audio('sounds/'+keyResult+'.mp3')
                    audio.play()
                }
                break;
            case "r":
                if(keyResult == 'r') {
                    keyResult = 3
                    let audio = new Audio('sounds/'+keyResult+'.mp3')
                    audio.play()
                }
                break;
            case "t":
                if(keyResult == 't') {
                    keyResult = 4
                    let audio = new Audio('sounds/'+keyResult+'.mp3')
                    audio.play()
                }
                break;
            case "y":
                if(keyResult == 'y') {
                    keyResult = 5
                    let audio = new Audio('sounds/'+keyResult+'.mp3')
                    audio.play()
                }
                break;
            case "u":
                if(keyResult == 'u') {
                    keyResult = 6
                    let audio = new Audio('sounds/'+keyResult+'.mp3')
                    audio.play()
                }
                break;
            default:
                break;
        }
    })
}