import generateStupidName from "sillyname";

const GenerateRandomName = ()=>{
    let randomName1 = "";
    randomName1 = generateStupidName();

    let randomName2 = "";
    randomName2 = generateStupidName();
    return `Los 2 nombres randoms son: ${randomName1} y ${randomName2}`;
}

console.log(GenerateRandomName());
