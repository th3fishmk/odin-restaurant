import './style.css';

const header = document.querySelector<HTMLDivElement>('#header');
const pageContent = document.querySelector<HTMLDivElement>('#app');

// HTML
const showcase = `
<div>
    <img src='https://cdn-icons-png.freepik.com/256/3274/3274083.png?semt=ais_white_label'>
    <div>
        <h3>Food name</h3>
        <p>This is the description of the food!</p>
    </div>
</div>
`;

const home = `
<div id="home">
    <div>
        <h1>Welcome to</h1><h2>the odin restaurant!</h2>
        <p> This place may not be as good as the Valhalla <br> but we're as close as it can get! </p>
    </div>
    <div>
        <img
            src="https://imgs.search.brave.com/ho8LsK8r_CelQAEpOWHaTdUuWw_V-vdkxxnNSD6-DXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvcmVzdGF1/cmFudHMtYXJlLWNs/b3NlZC1mb3ItdGhl/LWVpZC1jZWxlYnJh/dGlvbi1pbGx1c3Ry/YXRpb24tc3ZnLWRv/d25sb2FkLXBuZy0x/MDA0NTYxMS5wbmc"
            alt="Actual picture of the odin restaurant"
            width="700px"
            height="auto" />
    </div>
</div>
<div>
    <h2>Here are just a few of our most distinguish meals</h2>
    <div id="show-case">
        ${showcase}
        ${showcase}
        ${showcase}
        ${showcase}
    </div>
</div>
`;

const contact = `
<div id="contact">
    <div>
        <img
            src="https://imgs.search.brave.com/ho8LsK8r_CelQAEpOWHaTdUuWw_V-vdkxxnNSD6-DXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvcmVzdGF1/cmFudHMtYXJlLWNs/b3NlZC1mb3ItdGhl/LWVpZC1jZWxlYnJh/dGlvbi1pbGx1c3Ry/YXRpb24tc3ZnLWRv/d25sb2FkLXBuZy0x/MDA0NTYxMS5wbmc"
            alt="Actual picture of the odin restaurant"
            width="500px"
            height="auto" />
    </div>
    <div>
        <h2> Get in touch with us! </h2>
        <form>
            <label for="fname">First name</label>
            <input type="text" id="fname"><br>
            <label for="lname">Last name</label>
            <input type="text" id="lname"><br>
            <label for="yesno">Yes or no</label>
            <input type="checkbox" id="yesno"><br>
        </form>
    </div>
</div>
`;

const about = `
<h1> About the Odin Restaurant</h1>
<p>Thank you for coming to this !amazing totally legit, and </p>
`;

// Logic

if (header) {
  header.innerHTML = `
    <div id='header-items'>
        <button type="button" id="btn-home">Home</button>
        <button type="button" id="btn-contact">Contact</button>
        <button type="button" id="btn-about">About</button>
    </div>
  `;
}

if (pageContent) {
  pageContent.innerHTML = home;
}

const btnHome = document.querySelector<HTMLButtonElement>('#btn-home');
const btnContact = document.querySelector<HTMLButtonElement>('#btn-contact');
const btnAbout = document.querySelector<HTMLButtonElement>('#btn-about');

if (btnHome) {
  setHome(btnHome);
}
if (btnContact) {
  setContact(btnContact);
}
if (btnAbout) {
  setAbout(btnAbout);
}
function setHome(element: HTMLButtonElement) {
  element.addEventListener('click', () => {
    if (pageContent) {
      pageContent.innerHTML = home;
    }
  });
}
function setContact(element: HTMLButtonElement) {
  element.addEventListener('click', () => {
    if (pageContent) {
      pageContent.innerHTML = contact;
    }
  });
}
function setAbout(element: HTMLButtonElement) {
  element.addEventListener('click', () => {
    if (pageContent) {
      pageContent.innerHTML = about;
    }
  });
}
