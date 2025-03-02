function asteroidCollision(asteroids: number[]): number[] {
    const stack:number[]=[];

    for(let asteroid of asteroids){
        let destroyed = false;

        while(stack.length && stack[stack.length-1]>0 && asteroid<0){
            const top =stack[stack.length-1];

            if(-asteroid >top) stack.pop();
            else if(-asteroid === top){
                stack.pop();
                destroyed=true;
                break;
            }
            else{
                destroyed=true;
                break;
            }
        }

        if(!destroyed)stack.push(asteroid);
        
    }
    return stack;
};
