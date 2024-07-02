const main = document.createElement('main')
main.classList.add("main")
// Родитель


const sidebar = document.createElement("sidebar");
sidebar.classList.add("sidebar")    
const buttonOne = document.createElement("button");
buttonOne.textContent = "Рисовать";
buttonOne.classList.add("buttonOne")
const buttonTwo = document.createElement("button");
buttonTwo.classList.add("buttonTwo")
buttonTwo.textContent = "Очистить";
const buttonThree = document.createElement("button");
buttonThree.textContent = "RGB";
buttonThree.classList.add("buttonThree")
sidebar.appendChild(buttonOne);
sidebar.appendChild(buttonThree)
sidebar.appendChild(buttonTwo);
// создание и добавление кнопок в сайдбаре


main.appendChild(sidebar)
// добавление сайдбара в основной родительский блок

let display = document.createElement("div")
display.classList.add("display")

// создание основной части
const block = document.createElement("block")
block.classList.add("block")

const input = document.createElement("button")
input.classList.add("input1")
input.textContent = "16px"
sidebar.appendChild(input)





let blockCount = 16;
input.addEventListener("click", function() {
    display.classList.remove('display')
    display.classList.add("display2")
    
})

for (i = 0; i < (blockCount*blockCount); i++) {
    const block = document.createElement("block")
    block.classList.add("block")
    
let colorCount = 10;
let rgb = 220;
let color = "";
// переменные стандартных значений цвета

function activate() {       
    block.style.backgroundColor = color();
    //   добавляет переменную с цветом на блок
    
    function color() {
            rgb = rgb - colorCount;
            color = `rgb(${rgb},${rgb},${rgb})`
        
        return color}
    }
    // функция для изменения цвета при наведении
function activateRgb() {
    block.style.backgroundColor = colorRgb();

    function colorRgb() {

        let r = Math.random() * 300;
        let g = Math.random() * 300;
        let b = Math.random() * 300;
            r = r - colorCount;
            g = g - colorCount;
            b = b - colorCount;
            color = `rgb(${r},${g},${b})`;
        return color;
    }
}
    // функция для цветов RGB

    function colorCounter() {
        colorCount = colorCount + 15;
    }


buttonOne.addEventListener("click", function (){
    
    block.addEventListener("mouseenter", activate)
    // после нажатия buttonOne навещивает обработчик на блоки
        
        block.addEventListener("mouseover", colorCounter)
        // при убирании мыши плюсует к переменной изменения цвета десятку
    })
// Активация при нажатии

function rgbs () {
    block.addEventListener("mouseenter", activateRgb)
    
    block.addEventListener("mouseover", colorCounter)
}
buttonThree.addEventListener("click", rgbs)

function close () {
    block.removeEventListener("mouseenter", activateRgb)
    block.removeEventListener('mouseenter',activate)
    block.removeEventListener("mouseover", colorCounter)
    block.style.backgroundColor = "rgb(239,239,239)";
    rgb = 220;
    colorCount = 10;
}
// Задает начальные параметры и убирает обработчики

buttonTwo.addEventListener("click", close)


display.appendChild(block)

};


// Заполнение грид сетки

main.appendChild(display)
// добавление основной части в main



block.addEventListener("mouseenter", function() {
    block.style.backgroundColor = "black"
})



document.body.appendChild(main);
// Добавление родительского блока в html
    
console.log(main);