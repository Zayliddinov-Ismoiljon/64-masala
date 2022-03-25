// Masala : n ta elementdan iborat massiv berilgan. K va L sonlari orasidagi massiv elementlari yigindisini toping

let n=9;
let K=3;
let L=7;
const a=[];
const b=[];
let sum=0;

for(i=0; i<n; i++){
    a.push(i);
    for(i=K; i<=L; i++){
        b.push(i)
        sum += i;
    }
}

console.log(sum);