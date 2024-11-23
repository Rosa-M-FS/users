const listaUsuarios=document.getElementById("listaUsuarios");

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(Response=>{
    if(!Response.ok){
        throw new Error ("Error de solicitud");
    }
    return Response.json();
})
.then(usuarios=>{
    usuarios.forEach(user=> {
        const {id,name,username,phone,email,company,address}=user;
        const{street,suite,city}=address;

        const aleatoryAge = Math.floor((Math.random()*83)+18);

        const ageUser={
            ...user,
            age: aleatoryAge,
            img:`assets/img/${id}.jpeg`,
            address:` ${street},${suite},${city}`
        }

        
        const users=document.createElement("li");
        

        const nameElement=document.createElement("p");
        nameElement.innerHTML=`<strong>Nombre:</strong> ${name}`;

        
        const ageElement=document.createElement("p");
        ageElement.innerHTML=`<strong>Edad:</strong> ${ageUser.age}`;

        const usernameElement=document.createElement("p");
        usernameElement.innerHTML=`<strong>Username:</strong> ${username}`;

        const imgElement=document.createElement("img")
        imgElement.src=`${ageUser.img}`;
        imgElement.alt=`Nombre: ${name}`;

        const phoneElement=document.createElement("p");
        phoneElement.innerHTML=`<strong>Phone:</strong> ${phone}`;

        const emailElement=document.createElement("p");
        emailElement.innerHTML=`<strong>Email:</strong> ${email}`;

        const companyElement=document.createElement("p");
        companyElement.innerHTML=`<strong>Company:</strong> ${company.name}`;

        const addressElement=document.createElement("p");
        addressElement.innerHTML=`<strong>Address:</strong> ${ageUser.address}`

        users.appendChild(nameElement)
        users.appendChild(ageElement)
        users.appendChild(usernameElement)
        users.appendChild(imgElement)
        users.appendChild(phoneElement)
        users.appendChild(emailElement)
        users.appendChild(companyElement)
        users.appendChild (addressElement)

      listaUsuarios.appendChild(users);
        

    });
   
}) 
.catch(error=>{
  listaUsuarios.innerText="Error al cargar usuarios";
})
