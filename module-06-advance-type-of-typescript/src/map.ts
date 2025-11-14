type AreaOfNumbers = {
    height: number;
    width: number;
}

type AreaOfString = {
    [key in keyof AreaOfNumbers ] : string;
}

type Area<T> = {
    [key in keyof T ] : T[key];
}

const area1: Area<{height: string; width: number}> = {
    height: '50', 
    width: 50
}


