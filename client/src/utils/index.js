import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver'

export function getRandomPrompt (promt) {
    const randomInex = Math.floor(Math.random() * surpriseMePrompts.length) ;

    const randomPrompt = surpriseMePrompts[randomInex] ;

    if(randomPrompt === promt) return getRandomPrompt(promt) ;

    return randomPrompt
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download_${_id}.jpg`)
}