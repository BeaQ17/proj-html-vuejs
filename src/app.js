//alert("test alert")

//const { vue } = require("laravel-mix");

//jumbotron slideshow
const slideshow = new Vue({
    el: "#slideshow",

    data:{
        counter: 0,
        imgs: [
            /*
            "../src/imgs/first_slide.png",
            "../src/imgs/second_slide.png"
            */
        ]
    },

    methods:{
        prev(){
            //console.log("clicked prev");
            if(this.counter === 0){
                return this.imgs.length - 1; 
            }
            return this.counter -= 1;

        },
        next(){
            //console.log("clicked next");
            if(this.counter === this.imgs.length - 1){
                return this.counter = 0;
            }
            return this.counter += 1
        },
        mounted(){
            setInterval(this.next, 7000)
        }
    }
})