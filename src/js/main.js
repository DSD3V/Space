import { solarSystem, starLifecycle, socialMedia } from './data';

main();

function main() {
  handleNavbar();
  createSolarSystemGrid();
  createStarLifecycleCarousel();
  renderSocialMedia();
}

function handleNavbar() {
  const navBtns = document.getElementsByClassName('navBtn');

  navBtns[0].classList.add('currNavBtn');
  let currNavBtnIdx = 0;

  for (let i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener('click', () => {
      navBtns[currNavBtnIdx].classList.remove('currNavBtn');
      navBtns[i].classList.add('currNavBtn');
      currNavBtnIdx = i;
    });
  }

  const sections = document.querySelectorAll('section');
  const navbar = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 400) {
      navbar.style.height = '60px';
      navbar.style.fontSize = '0.7rem';
      for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].style.height = '20px';
        navBtns[i].style.width = '80px';
      }
    } else {
      navbar.style.height = '85px';
      navbar.style.fontSize = '0.9rem';
      for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].style.height = '35px';
        navBtns[i].style.width = '90px';
      }
    }

    for (let i = 0; i < sections.length; i++) {
      const sectionHeight = sections[i].offsetHeight;
      const sectionTop = sections[i].offsetTop - 300;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navBtns[currNavBtnIdx].classList.remove('currNavBtn');
        navBtns[i].classList.add('currNavBtn');
        currNavBtnIdx = i;
      } else if (
        window.innerHeight + scrollY + 200 >=
        document.body.offsetHeight
      ) {
        navBtns[currNavBtnIdx].classList.remove('currNavBtn');
        navBtns[navBtns.length - 1].classList.add('currNavBtn');
        currNavBtnIdx = navBtns.length - 1;
      }
    }
  });
}

function createSolarSystemGrid() {
  const solarSystemGrid = document.getElementById('solarSystemGrid');

  if (!solarSystemGrid.children.length) {
    solarSystem.forEach(
      entity =>
        (solarSystemGrid.innerHTML += `
          <div class="entityCard" id="${entity.id}">
            <span>${entity.entity}</span>
            <br />
            <img class="entityImg" src="${entity.img}"" />
            <button class="viewModalBtn">View Details</button>
            <div class="entityModal">
              <span class="modalX">X</span>
              <h3>${entity.entity}</h3>
              <div class="imgsDiv">
                <img class="entityImg" src="${entity.img}" />
                <img class=${
                  entity.entity === 'Pluto' || entity.entity === 'Planet X'
                    ? 'entityImg'
                    : 'modalEntityImg'
                } src="${entity.modalImg}" />
              </div>
              <p>${entity.modalTxt}</p>
              <a href="${
                entity.link
              }" target="_blank" rel="noopener noreferrer">
                <span>View Details on Nasa.gov</span>
                <img id="svg" src="https://img.icons8.com/material-outlined/24/ffffff/external-link.png"/>
              </a>
            </div>
          </div>`)
    );
  }

  const body = document.querySelector('body');
  const viewDetailsBtns = document.getElementsByClassName('viewModalBtn');
  const modals = document.getElementsByClassName('entityModal');
  const modalXs = document.getElementsByClassName('modalX');

  let modalIsOpen = false;

  for (let i = 0; i < viewDetailsBtns.length; i++) {
    viewDetailsBtns[i].addEventListener('click', () => {
      if (!modalIsOpen) {
        modalIsOpen = true;
        modals[i].style.animation = 'modalFadeIn 0.7s forwards';
        modals[i].style.display = 'block';
        body.style.overflow = 'hidden';
      }
    });

    modalXs[i].addEventListener('click', () => {
      modals[i].style.animation = 'modalFadeOut 0.5s forwards';
      body.style.overflow = 'auto';
      setTimeout(() => {
        modals[i].style.display = 'none';
        modalIsOpen = false;
      }, 500);
    });
  }
}

function createStarLifecycleCarousel() {
  const carousel = document.getElementById('carousel');

  starLifecycle.forEach(
    stage =>
      (carousel.innerHTML += `
    <div class="stage">
        <h3>${stage.stage}</h3>
        <svg class="leftArrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 226 226"><g transform="translate(4.746,4.746) scale(0.958,0.958)"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="none" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g stroke="#949494" stroke-width="10" stroke-linejoin="round"><path d="M129.24375,50.70875l76.84,58.76c1.07703,0.86516 1.695,2.15406 1.695,3.53125c0,1.37719 -0.61797,2.66609 -1.695,3.53125l-76.84,58.76c-1.35953,1.00641 -3.16047,1.16531 -4.67891,0.42375c-1.51844,-0.74156 -2.48953,-2.26 -2.52484,-3.955v-36.16h-99.44c-2.48953,0 -4.52,-2.03047 -4.52,-4.52v-36.16c0,-2.48953 2.03047,-4.52 4.52,-4.52h99.44v-36.16c-0.03531,-2.24234 1.58906,-4.16687 3.81375,-4.52c1.21828,-0.14125 2.43656,0.21187 3.39,0.98875zM131.08,94.92c0,2.48953 -2.03047,4.52 -4.52,4.52h-99.44v27.12h99.44c2.48953,0 4.52,2.03047 4.52,4.52v31.64l64.975,-49.72l-64.975,-49.72z"></path></g><path d="M0,226v-226h226v226z" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path><g stroke="none" stroke-width="1" stroke-linejoin="miter"><path d="M125.85375,49.72c-2.22469,0.35312 -3.84906,2.27766 -3.81375,4.52v36.16h-99.44c-2.48953,0 -4.52,2.03047 -4.52,4.52v36.16c0,2.48953 2.03047,4.52 4.52,4.52h99.44v36.16c0.03531,1.695 1.00641,3.21344 2.52484,3.955c1.51844,0.74156 3.31938,0.58266 4.67891,-0.42375l76.84,-58.76c1.07703,-0.86516 1.695,-2.15406 1.695,-3.53125c0,-1.37719 -0.61797,-2.66609 -1.695,-3.53125l-76.84,-58.76c-0.95344,-0.77687 -2.17172,-1.13 -3.39,-0.98875zM131.08,63.28l64.975,49.72l-64.975,49.72v-31.64c0,-2.48953 -2.03047,-4.52 -4.52,-4.52h-99.44v-27.12h99.44c2.48953,0 4.52,-2.03047 4.52,-4.52z"></path></g><path d="" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path></g></g></svg>
        <svg class="rightArrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 226 226"><g transform="translate(4.746,4.746) scale(0.958,0.958)"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="none" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g stroke="#949494" stroke-width="10" stroke-linejoin="round"><path d="M129.24375,50.70875l76.84,58.76c1.07703,0.86516 1.695,2.15406 1.695,3.53125c0,1.37719 -0.61797,2.66609 -1.695,3.53125l-76.84,58.76c-1.35953,1.00641 -3.16047,1.16531 -4.67891,0.42375c-1.51844,-0.74156 -2.48953,-2.26 -2.52484,-3.955v-36.16h-99.44c-2.48953,0 -4.52,-2.03047 -4.52,-4.52v-36.16c0,-2.48953 2.03047,-4.52 4.52,-4.52h99.44v-36.16c-0.03531,-2.24234 1.58906,-4.16687 3.81375,-4.52c1.21828,-0.14125 2.43656,0.21187 3.39,0.98875zM131.08,94.92c0,2.48953 -2.03047,4.52 -4.52,4.52h-99.44v27.12h99.44c2.48953,0 4.52,2.03047 4.52,4.52v31.64l64.975,-49.72l-64.975,-49.72z"></path></g><path d="M0,226v-226h226v226z" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path><g stroke="none" stroke-width="1" stroke-linejoin="miter"><path d="M125.85375,49.72c-2.22469,0.35312 -3.84906,2.27766 -3.81375,4.52v36.16h-99.44c-2.48953,0 -4.52,2.03047 -4.52,4.52v36.16c0,2.48953 2.03047,4.52 4.52,4.52h99.44v36.16c0.03531,1.695 1.00641,3.21344 2.52484,3.955c1.51844,0.74156 3.31938,0.58266 4.67891,-0.42375l76.84,-58.76c1.07703,-0.86516 1.695,-2.15406 1.695,-3.53125c0,-1.37719 -0.61797,-2.66609 -1.695,-3.53125l-76.84,-58.76c-0.95344,-0.77687 -2.17172,-1.13 -3.39,-0.98875zM131.08,63.28l64.975,49.72l-64.975,49.72v-31.64c0,-2.48953 -2.03047,-4.52 -4.52,-4.52h-99.44v-27.12h99.44c2.48953,0 4.52,-2.03047 4.52,-4.52z"></path></g><path d="" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path></g></g></svg>
        <div class="imgsDiv">
            <img src="${stage.img}" />
            <img src="${stage.img2}" />
        </div>
        <p>${stage.description}</p>
    </div>
    `)
  );

  const stages = document.getElementsByClassName('stage');

  let isSliding = false;
  let currStage = 0;
  let prevStage = stages.length - 1;
  let nextStage = 1;

  stages[currStage].classList.add('activeStage');
  stages[prevStage].classList.add('prevStage');
  stages[nextStage].classList.add('nextStage');

  for (let i = 0; i < stages.length; i++) {
    stages[i].children[1].addEventListener('click', () =>
      updateSlide({ goingLeft: true })
    );

    stages[i].children[2].addEventListener('click', () =>
      updateSlide({ goingLeft: false })
    );
  }

  function updateSlide({ goingLeft }) {
    if (!isSliding) {
      setTimeout(() => {
        isSliding = false;
      }, 500);

      isSliding = true;

      stages[currStage].classList.remove('activeStage');
      stages[prevStage].classList.remove('prevStage');
      stages[nextStage].classList.remove('nextStage');

      if (goingLeft) {
        if (currStage === 0) {
          currStage = stages.length - 1;
          prevStage = currStage - 1;
          nextStage = 0;
        } else if (currStage === 1) {
          currStage = 0;
          prevStage = stages.length - 1;
          nextStage = 1;
        } else {
          nextStage = currStage;
          currStage = prevStage;
          prevStage--;
        }
      } else {
        if (currStage === stages.length - 1) {
          currStage = 0;
          prevStage = stages.length - 1;
          nextStage = 1;
        } else if (currStage === stages.length - 2) {
          currStage = stages.length - 1;
          prevStage = stages.length - 2;
          nextStage = 0;
        } else {
          prevStage = currStage;
          currStage = nextStage;
          nextStage++;
        }
      }

      stages[currStage].classList.add('activeStage');
      stages[prevStage].classList.add('prevStage');
      stages[nextStage].classList.add('nextStage');
    }
  }
}

function renderSocialMedia() {
  const socialMediaDiv = document.getElementById('socialMediaDiv');

  socialMedia.forEach(
    platform =>
      (socialMediaDiv.innerHTML += `
      <div class="socialMedia">
        <p>
          <span>${platform.username}</span>
          <img
            src="https://img.icons8.com/material-outlined/24/ffffff/external-link.png"
          />
        </p>
        <img
          class="icon"
          src="${platform.icon}"
        />
      </div>
    `)
  );

  const socialMediaDivs = document.getElementsByClassName('socialMedia');

  for (let i = 0; i < socialMediaDivs.length; i++) {
    socialMediaDivs[i].addEventListener('click', () =>
      window.open(socialMedia[i].link, '_newtab')
    );
  }
}
