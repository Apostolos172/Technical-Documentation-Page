const selectSectionsAndGiveThemId = () => {
  let headersOfSections = document.querySelectorAll("h2");
  let sections = document.querySelectorAll("section");
  headersOfSections = Array.prototype.slice.call(headersOfSections);
  sections = Array.prototype.slice.call(sections);
  // console.log(headersOfSections);
  // console.log(sections);

  headersOfSections = headersOfSections.map((h2Element) => {
    //return "bla";
    return h2Element.innerHTML;
  });
  // console.log(headersOfSections);

  sections.forEach((section, index) => {
    section.id = headersOfSections[index].replaceAll(" ", "_");
  });
};

const createLinksInNavbar = (navbar) => {
  let sections = document.querySelectorAll("section");
  sections = Array.prototype.slice.call(sections);

  sections = sections.map((section) => {
    return section.id;
  });
  console.log(sections);

  sections.forEach((sectionId) => {
    const a = document.createElement("a");
    a.classList.add("nav-link");
    a.href = "#" + sectionId;
    const textNode = document.createTextNode(sectionId.replaceAll("_", " "));
    a.appendChild(textNode);
    console.log(a);
    navbar.appendChild(a);
  });
};

const createCredits = (navbar) => {
  const pCredits = document.createElement("p");
  let textNode = document.createTextNode("Info retrieved from ");
  pCredits.appendChild(textNode);
  let a = document.createElement("a");
  a.target = "_blank";
  a.href = "https://github.com/lukehoban/es6features";
  textNode = document.createTextNode(
    "https://github.com/lukehoban/es6features"
  );
  a.appendChild(textNode);
  pCredits.appendChild(a);
  navbar.appendChild(pCredits);

  const pCreatedBy = document.createElement("p");
  textNode = document.createTextNode("Created by ");
  pCreatedBy.appendChild(textNode);
  a = document.createElement("a");
  a.target = "_blank";
  a.href = "https://github.com/Apostolos172/";
  textNode = document.createTextNode("Apostolos172");
  a.appendChild(textNode);
  pCreatedBy.appendChild(a);
  navbar.appendChild(pCreatedBy);
};

let navbar = document.querySelector("nav");

selectSectionsAndGiveThemId();
createLinksInNavbar(navbar);
createCredits(navbar);
