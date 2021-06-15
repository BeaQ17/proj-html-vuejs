//alert("test alert")

//jumbotron slideshow
const slideshow = new Vue ({
    el: "#slideshow",
    data: {
        counter: 0,
        divs: [
            "#first_div",
            "#second_div"
        ]

    },
    methods: {
        slidePrev(){
            console.log("you clicked prev");
            
            if(this.counter === 0){
                return this.divs.length - 1;
            }
            return this.counter -= 1;
        },
        slideNext(){
            console.log("you clicked next");
            if (this.counter === this.divs.length - 1) {
                return this.counter = 0;
            }
            return this.counter += 1;
        }
    },
    mounted(){

        //slide interval
        setInterval(this.next, 6000)

    }
}) 
