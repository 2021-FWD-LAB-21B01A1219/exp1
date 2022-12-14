function add(x,y){
    return x+y
}
console.log("addition="+add(2,5));

function intosec(min){
    let sec = (min*60)
    return sec
}
console.log("conversion into sec:"+intosec(1));

function inc(num){
    return num++
}
console.log("increment="+inc(2))

function area(b,h){
    return 1/2*b*h
}
console.log("area of triangle="+area(2,5))

function indays(yrs){
    let days = 0
    let lp = Math.floor(yrs/4)
    days = yrs*365+lp
    return days
}
console.log("years into days:"+indays(4))

function rem(num1,num2){
    return num1%num2
}
console.log("reminder:"+rem(10,3))

function neg(num){
    if(num <= 0)
    {
        retuen true
    }
    else{
        return false
    }
}
console.log("True if num is negative:",+neg(19093))

function digits(num){
    let dig=1

    return dig
}console.log("number of digits:"+digits(102))

const people=["Grey","Mary","Devon","James"];
console.log("")
for(let x in people){
    console.log(people[x])
}
people.pop()
people.unshift('Matt')
people.push('priyanka')
console.log("")
 for(let y in people){
    if(people[y]!='Mary'){
        console.log(people[y]);
    }
    else{
        continue;
    }
 }
 console.log("")
 let people1=people.slice()
 for(let p in people1){
    console.log(people1[p])
 }
 console.log("")
 console.log(people.indexOf("Mary"))
 console.log("")
 console.log(people.indexOf("Foo"))
 console.log("")
 people,splice(2,1,"Elizabeth","Artie")
 for(let x in people){
    console.log(people[x])
 }
 console.log("")
 const withBob=["Bob"]
 for(let x in p){
    console.log(p[x])
 }


 const myself={
    firstname:"Naga",
    lastname:"Jahnavi",
    occupation:"student"
 }
 console.log("")
 console.log(myself.lastname)
 //myself[firstname]='Namitha'
 console,log(myself.firstname)

 myself.hobby="songs"
 delete myself.occupation
 console.log(myself.occupation)
  console.log("")
let namesandhobbies={
    elie:"Javascript",
    matt:"jogging",
    janey:"table building",
    tim:"sailing"
}
for(let keys in namesandhobbies){
    console.log(keys+"->"+namesandhobbies[keys])
};
namesandhobbies.Jahnavi="reading"
console.log("")
for(let keys in namesandhobbies){
    if(keys='Jahnavi'){
        console.log(keys+":"+namesandhobbies)
    }
    else{
        break;
    }
};

function multiples(num,len){
    const arrayofmul=[]
    for(let i=1;i<=len;i++){
        let mult=num*iarrayofmul.push(mult)
    }
    return arrayofmul
}
console.log(multiples(7,5))
console.log(multiples(12,10))
console.log(17,6)