const urls=[
    {url:'profile-page.html'},
    {url:'contacts-page.html'},
    {url:'general-chat-page.html'}
]



const navbar=document.getElementById('navbar');

const icon = document.createElement('i');
icon.className='fa fa-user';

urls.forEach(link=>{
    const anchortag=document.createElement('a');
    anchortag.href=link.url;
    anchortag.textContent = '';
    navbar.appendChild(anchortag);
    anchortag.prepend(icon);
    navbar.appendChild(anchortag);
})