const quotes = [
    {
        quote: "Liberty is not a means to a higher political end. It is itself the highest political end.",
        author: "Lord Acton"
    },
    {
        quote: "I've never known any trouble that an hour's reading didn't assuage.",
        author: "Charles De Secondat",
    },
    {
        quote: "Talk low, talk slow, and don't say too much.",
        author: "John Wayne",
    }, 
    {
        quote: "I call him free who is led solely by reason.",
        author: "Baruch Spinoza",
    }, 
    {
        quote: "The higher the buildings, the lower the morals.",
        author: "Noel Coward",   
    },
    {
        quote: "Those that know, do. Those that understand, teach.",
        author: "Aristotle",
    },
    {
        quote: "The greatest griefs are those we cause ourselves.",
        author: "Sophocles",
    },
    {
        quote: "He who desires is always poor.", 
        author: "Claudianus",
    },
    {
        quote: "Self-respect is the cornerstone of all virtue.",
        author: "John Herschel",
    },
    {
        quote: "You can't separate peace from freedom because no one can be at peace unless he has his freedom.",
        author: "Malcolm X",
    }
]

const quote = document.querySelector("#quote p:first-child")
const author = document.querySelector("#quote p:last-child")
const todayQuote = quotes[Math.floor(Math.random()* quotes.length)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author