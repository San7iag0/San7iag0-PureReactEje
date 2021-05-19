import React from 'react';
import CompJokes from './CompJokes';

export default function Jokes(){
    return(
        <div>
            <CompJokes 
                bg = 'info'
                type = 'Dark'
                jokeTitle = 'wife'
                joke = "My wife told me she'll slam my head on the keyboard if I don't get off the computer. I'm not too worried, I think she's jokinlkjhfakljn m,.nbziyoao78yv87dfaoyuofaytdf"
            />,
            <CompJokes 
                bg = 'danger'
                type = 'light'
                jokeTitle = 'monkey'
                joke = "It turns out a major new study recently found that humans eat more bananas than monkeys. It's true. I can't remember the last time I ate a monkey."
            />
        </div>
    )
}
