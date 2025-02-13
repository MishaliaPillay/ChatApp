const urls=[
    {url:'profile-page.html',iconClass:'fa fa-user'},
    {url:'contacts-page.html',iconClass:'fa fa-address-book'},
    {url:'general-chat-page.html',iconClass:'fa fa-comments'}
]



const navbar=document.getElementById('navbar');




urls.forEach(link=>{
    const anchortag=document.createElement('a');
    const icon = document.createElement('i');
    icon.className= link.iconClass;
    anchortag.href=link.url;
    anchortag.textContent = '';
    navbar.appendChild(anchortag);
    anchortag.appendChild(icon);
    navbar.appendChild(anchortag);
})


///to implement this add this to html <section class="navbar" id="navbar"></section>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">