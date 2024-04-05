const seeMoreProjectsBtn = document.querySelector('.projects__btn');

seeMoreProjectsBtn.addEventListener("click", () => seeMoreProjects())

export default function seeMoreProjects() {
    const projectsItems = document.querySelectorAll(".projects__list li")

    projectsItems.forEach((projectItem, index) => {
        const length = projectsItems.length;

        if(index >= length/2 && projectItem.classList.contains("display--none")) {
            console.log(projectItem.classList)
            projectItem.classList.remove("display--none")
            seeMoreProjectsBtn.textContent = "Veja menos Projetos"
        } else if(index >= length/2 && !projectItem.classList.contains("display--none")) {
            projectItem.classList.add("display--none")
            seeMoreProjectsBtn.textContent = "Veja mais Projetos"
        }
    })
}