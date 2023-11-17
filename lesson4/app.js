const music=document.querySelector('audio')
const btn=document.querySelector('button')
btn.innerHTML='play'

btn.onclick=() =>{
    if (music.paused){
        music.play()
        btn.style.background='red'
        btn.innerHTML='stop'
    }else {
        music.pause()
        music
        btn.style.background='aqua'
        btn.innerHTML='continue'


    }
}