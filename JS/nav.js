const urls=[
    {url:'profile-page.html'},
    {url:'contacts-page.html'},
    {url:'general-chat-page.html'}
]



const navbar=document.getElementById('navbar');



urls.forEach(link=>{

    const anchortag=document.createElement('a');
    anchortag.href=link.url;
    anchortag.textContent='namesoflinks ';
    navbar.appendChild(anchortag)
})