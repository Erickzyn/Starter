const reviews = [
    {
        id: 1,
        name: "Morty",
        job: "Web Developer",
        image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
    },
    {
        id: 2,
        name: "Connor",
        job: "Web Designer",
        image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
        text: "Helvetica artisam kindfolk thundercats. Disrupt glosier gastroup deep v vice frazen...",
    },
    {
        id: 3,
        name: "Petter Jordan",
        job: "Intern",
        image: "https://images2.imgbox.com/56/88/ojvFN3l5_o.jpeg",
        text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
    },
    {
        id: 4,
        name: "Bill.G",
        job: "The Boss",
        image: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
        text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.",
    },
];

const name = document.getElementById("author");
    console.log(name);

const job = document.getElementById("job");
    console.log(job);

const text = document.getElementById("text");
    console.log(text);

const button1 = document.getElementById("button1");

let index = 1

buttonNext.addEventListener("click", function(){
    if(index > 3){
        index = 0
    }
    name.innerText = reviews[index].name
    job.innerText = reviews[index].job
    text.innerText = reviews[index].text  
    index++
    console.log(index)
})

buttonBack.addEventListener("click", function(){
    name.innerText = reviews[index].name
    job.innerText = reviews[index].job
    text.innerText = reviews[index].text  
    index--
    console.log(index)
})