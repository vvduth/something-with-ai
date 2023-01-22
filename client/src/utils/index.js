import { surpriseMePrompts } from "../constants";
export function getRandomPrompt (promt) {
    const randomInex = Math.floor(Math.random() * surpriseMePrompts.length) ;

    const randomPrompt = surpriseMePrompts[randomInex] ;

    if(randomPrompt === promt) return getRandomPrompt(promt) ;

    return randomPrompt
}