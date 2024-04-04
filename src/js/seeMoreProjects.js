const seeMoreProjectsBtn = document.querySelector('.projects__btn');

seeMoreProjectsBtn.addEventListener("click", () => seeMoreProjects())

export default function seeMoreProjects() {
    const projectsItems = document.querySelectorAll(".projects__list li")

    projectsItems.forEach((projectItem, index) => {
        const length = projectsItems.length

        if(index >= length/2 && projectItem.style.display === "none") {
            projectItem.style.display = "block"
            seeMoreProjectsBtn.textContent = "Veja menos Projetos"
        } else if(index >= length/2 && projectItem.style.display === "block") {
            projectItem.style.display = "none"
            seeMoreProjectsBtn.textContent = "Veja mais Projetos"
        }
    })
}