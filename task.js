

const card=document.querySelector("div");
card.innerHTML=`<img src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?
s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" width=200px, height=200px />
<p>beautyfull girl</p>
<button>explore more</button>`

card.style.border="2px solid black";
card.style.backgroundColor="lightgray";
card.style.display="inline-block"
card.style.padding="10px"
card.style.justifycontent="center"
card.style.textAlign="center"


const newcard1=document.getElementById("card2");
newcard1.innerHTML=`<img src="https://images.unsplash.com/photo-1477239439998-839196943351?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=
M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW4lMjBpbiUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" width=200px, height=200px; />
<p>cute</p>
<button>explore more</button>`

newcard1.style.border="2px solid black";
newcard1.style.backgroundColor="lightgray";
newcard1.style.display="inline-block"
newcard1.style.padding="10px"
newcard1.style.textAlign="center"


const card3=document.createElement('div')
card3.innerHTML=`<img src="https://rukminim2.flixcart.com/image/850/1000/jw84ya80/poster/k/c/7/medium-
p40633-baby-boy-poster-cute-kids-poster-original-imafgyc8nffz6hhh.jpeg?q=90&crop=false" width=200px, height=200px;"/>
<p>baby</p>
<button>explore more</button>`
card3.style.border="2px solid black";
card3.style.backgroundColor="lightgray";
card3.style.display="inline-block"
card3.style.padding="10px"
card3.style.textAlign="center"
document.body.appendChild(card3)


const card4=document.createElement('div')
card4.innerHTML=`<img src="https://i.pinimg.com/236x/81/8f/5e/818f5eafb5c326e3cd177c931eda4569.jpg" width=200px, height=200px;"/>
<p>beautyfull boy</p>
<button>explore more</button>`
card4.style.border="2px solid black";
card4.style.backgroundColor="lightgray";
card4.style.display="inline-block"
card4.style.padding="10px"
card4.style.textAlign="center"
document.body.appendChild(card4)


document.body.style.display="flex"
document.body.style.gap="10px"
