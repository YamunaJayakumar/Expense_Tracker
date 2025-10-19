const employee=[
    [101,"alice",'HR',50000,5,3],
    [102,"Bob",'IT',75000,7,5],
    [103,"Charlie",'Finance',60000,6,4],
    [104,"David",'IT',80000,8,6],
    [105,"Emma",'HR',52000,4,2],
]
console.log("----------------------1.list all employee in the it department-----------------------");
employee.filter((item)=>item[2]=='IT').forEach((item)=>console.log(item[1],item[2]))


console.log("--------------2.count employee with salary >70000-----------------------");
let count=0;
for(let i of employee){
   if(i[3]>70000){
    count++
   }
}
console.log(count)


console.log("---------------------3.total number of project completed by all employee------------------------")
let total_project=employee.map((item)=>item[5]).reduce((prev,curr)=>prev+curr)
console.log(`total_project=${total_project}`)


console.log('-----------------------4.create array of [ename,department,salary] for all employee-------------------------')
let newe= employee.map((item)=>[item[1],item[2],item[3]])
console.log(newe)


console.log('-------------------------5.sort employee by project ascending------------------------------------')
employee.sort((a,b)=>b[5]-a[5]).forEach((item)=>console.log(`${item[1]}:${item[3]}`))

