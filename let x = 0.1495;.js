let x = 0.1495;
let p = 3.1415;
let y1,y2,y3 = 0;
do{
    y1 = (1**3)/(1**2 + p**2);
    y2 = Math.sqrt(Math.sqrt(1**4 + (4*p**2 * 1**2))-p**2-1**2);
    y3 = 1/(p**2);
    console.log(y1 + " | " + y2 + " | " + y3 + " | " + p);
    p += x;
}
while(p <= 3.1415)
