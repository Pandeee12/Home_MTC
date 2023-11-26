import { Image,img } from "react-native";
import './App.css'
import dot1 from './assets/xichtamtuanthien_dot1.png'
import dot2 from './assets/luanhoithuongde_dot2.jpg'
import dot3 from './assets/tabanhutieutaidigioi_dot3.jpg';
import dot4 from './assets/thinhthedienninh_dot4.jpg';
import dot5 from './assets/hungcadaiviet_dot5.jpg';
function App() {
  return (
    <section id="Slider">
    <div class="aspect-ratio-169">
        <a href="#"><img src={dot1}></img></a>
        <a href="#"><img src={dot2}></img></a>
        <a href="#"><img src={dot3}></img></a>
        <a href="#"><img src={dot4}></img></a>
        <a href="#"><img src={dot5}></img></a>
        
    </div>

    <div class="dot-container">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        
    </div>
    </section>
    
    
  );
}

    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
    const imgContainer = document.querySelector('.aspect-ratio-169')
    const dotItem = document.querySelectorAll(".dot")
    let imgNumber = imgPosition.length
    let index = 0
    imgPosition.forEach(function(image,index){
        image.style.left = index*100 + "%"
        dotItem[index].addEventListener("click",function(){
            slider(index)
        })
    })

    function imgSlide(){
        index++;
        console.log(index)
        if(index>=imgNumber){index=0}
        imgContainer.style.left = "-" +index*100+ "%"
        slider(index)
    }

    function slider(index){
        imgContainer.style.left = "-" +index*100+ "%"
        const dotActive = document.querySelector('.active')
        dotActive.classList.remove("active")
        dotItem[index].classList.add("active")
    }

    setInterval(imgSlide,5000)


export default App;