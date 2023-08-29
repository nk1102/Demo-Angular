import {Pipe , PipeTransform} from '@angular/core';

@Pipe({
    
        name: "showLenPipe"
})


export class ShowLen implements PipeTransform{

    transform(value:any):number
{
    return (value.length);

}

}