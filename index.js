document.addEventListener('DOMContentLoaded', function() {
    const mediaQueryMedium = window.matchMedia("(max-width: 980px)");
    const mediaQuerySmall = window.matchMedia("(max-width: 570px)");
    const CVcontent = document.querySelector('.CV-content');
    const items = document.getElementsByClassName('items');
    const buttonImg = document.getElementById('back');
    const buttonA = document.getElementById('none');
    const logos = [
      { logo: document.querySelector('#logo-ex'), content: document.querySelector('.content-ex') },
      { logo: document.querySelector('#logo-skills'), content: document.querySelector('.content-skills') },
      { logo: document.querySelector('#logo-ed'), content: document.querySelector('.content-ed') },
      { logo: document.querySelector('#logo-lang'), content: document.querySelector('.content-lang') }
    ];
    
    function toggleLogos() {
      const isSmallScreen = mediaQuerySmall.matches;
      const isMediumScreen = mediaQueryMedium.matches;
      logos.forEach(({ logo, content }) => {
        document.getElementsByClassName('element-left')[0].style.display = 'grid'; 
        document.getElementsByClassName('element-right')[0].style.display = 'grid';
        document.getElementsByClassName('element-left')[1].style.display = 'grid';
        document.getElementsByClassName('element-right')[1].style.display = 'grid';
        document.getElementsByClassName('element-left')[0].style.alignSelf = 'auto'; 
        document.getElementsByClassName('element-right')[0].style.alignSelf = 'auto';
        document.getElementsByClassName('element-left')[1].style.alignSelf = 'auto';
        document.getElementsByClassName('element-right')[1].style.alignSelf = 'auto';
        buttonA.style.display = 'inline';
        buttonImg.src = './resources/photo/download.png';
        logo.style.display = 'grid';
        CVcontent.style.gap = '0';
        hideCursor();
        document.querySelector('.content-ex').style.justifyContent = 'space-evenly';
        for (const item of items) {
            item.style.height = '9rem';
            };
        document.querySelector('.content-ex').style.marginRight = '17.5%';
        document.querySelector('.content-skills').style.marginLeft = '17.5%';
        document.querySelector('.content-ed').style.marginRight = '17.5%';
        document.querySelector('.content-lang').style.marginLeft = '17.5%';
        document.querySelector('.content-ex').style.gap = '0';
        document.querySelector('.content-skills').style.gap = '0';
        document.querySelector('.content-ed').style.gap = '0';
        document.querySelector('.content-lang').style.gap = '0';
        logo.removeEventListener('click', hideLogos);
        logo.removeEventListener('click', showExMedium);
        logo.removeEventListener('click', showSkillsMedium);
        logo.removeEventListener('click', showEdMedium);
        logo.removeEventListener('click', showLangMedium);
        logo.removeEventListener('click', showExSmall);
        logo.removeEventListener('click', showSkillsSmall);
        logo.removeEventListener('click', showEdSmall);
        logo.removeEventListener('click', showLangSmall);
        content.style.display = isMediumScreen ? 'none' : 'flex';
        if(isSmallScreen){
          cursor();
          CVcontent.style.gridTemplateColumns = '1fr 1fr';
          CVcontent.style.gridTemplateRows = '1fr 1fr';
          CVcontent.style.gap = '1rem';
          logo.addEventListener('click', hideLogos);
          if (logo.id === 'logo-ex') { logo.addEventListener('click', showExSmall); }
          if (logo.id === 'logo-skills') { logo.addEventListener('click', showSkillsSmall); }
          if (logo.id === 'logo-ed') { logo.addEventListener('click', showEdSmall); }
          if (logo.id === 'logo-lang') { logo.addEventListener('click', showLangSmall); }
        }
        else if(isMediumScreen) {
          cursor();
          CVcontent.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'; 
          CVcontent.style.gridTemplateRows = '1fr';
          logo.addEventListener('click', hideLogos);
          if (logo.id === 'logo-ex') { logo.addEventListener('click', showExMedium); }
          if (logo.id === 'logo-skills') { logo.addEventListener('click', showSkillsMedium); }
          if (logo.id === 'logo-ed') { logo.addEventListener('click', showEdMedium); }
          if (logo.id === 'logo-lang') { logo.addEventListener('click', showLangMedium); }
        }
        else{
            CVcontent.style.gridTemplateColumns = '1fr'; 
            CVcontent.style.gridTemplateRows = '1fr 1fr 1fr 1fr';
        }
      });
    }
    
    function hideLogos() {
      logos.forEach(({ logo }) => logo.style.display = 'none');
    }

    function cursor() {
      logos.forEach(({ logo }) => logo.style.cursor = 'pointer');
    }

    function hideCursor() {
      logos.forEach(({ logo }) => logo.style.cursor = 'auto');
    }
    
    function showContent(className) {
      const content = document.querySelector(`.${className}`);
      for (const item of items) {
        item.style.height = '6rem';
        };
      content.style.display = 'flex';
      content.style.margin = '0';
      content.style.gap = '1.5rem';
      CVcontent.style.gridTemplateColumns = '1fr';
      CVcontent.style.gap = '0';
    }

    function backButton(){
      buttonImg.src = './resources/photo/back.png';
      buttonA.style.display = 'none';
      buttonImg.addEventListener('click', () => {
        toggleLogos();
      });
    }
  
    function showExMedium() { 
        showContent('content-ex'); 
        document.getElementsByClassName('element-left')[0].style.alignSelf = 'center';
        backButton();
    }
    function showSkillsMedium() { 
        showContent('content-skills');
        document.getElementsByClassName('element-right')[0].style.alignSelf = 'center'; 
        document.getElementsByClassName('element-left')[0].style.display = 'none';
        backButton();
    }
    function showEdMedium() { 
        showContent('content-ed'); 
        document.getElementsByClassName('element-left')[1].style.alignSelf = 'center'; 
        document.getElementsByClassName('element-left')[0].style.display = 'none'; 
        document.getElementsByClassName('element-right')[0].style.display = 'none';
        backButton();
    }
    function showLangMedium() { 
        showContent('content-lang');
        document.getElementsByClassName('element-right')[1].style.alignSelf = 'center';
        document.getElementsByClassName('element-left')[0].style.display = 'none'; 
        document.getElementsByClassName('element-right')[0].style.display = 'none';
        document.getElementsByClassName('element-left')[1].style.display = 'none';
        backButton();

    }

    function showExSmall() { 
        showContent('content-ex'); 
        document.getElementsByClassName('element-left')[0].style.alignSelf = 'center';  
        CVcontent.style.gridTemplateRows = '1fr';
        document.getElementsByClassName('content-ex')[0].style.justifyContent = 'center'; 
        backButton(); 
    }
    function showSkillsSmall() { 
        showContent('content-skills');
        document.getElementsByClassName('element-right')[0].style.alignSelf = 'center'; 
        CVcontent.style.gridTemplateRows = '1fr';
        backButton();
    }
    function showEdSmall() { 
        showContent('content-ed'); 
        document.getElementsByClassName('element-left')[1].style.alignSelf = 'center'; 
        backButton();
    }
    function showLangSmall() { 
        showContent('content-lang');
        document.getElementsByClassName('element-right')[1].style.alignSelf = 'center';
        backButton();
    }
  
    window.addEventListener('resize', toggleLogos);
    toggleLogos();
});

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navBar = document.querySelector('.navigation-bar');
    const queryNav = window.matchMedia("(max-width: 768px)");
    const logoBtn = document.getElementById('logo-btn');
    const border = document.getElementById('border-horizontal');
    let isOpenNavBarExecuted = false;
  
    function toggleNav() {
      if (queryNav.matches) {
        navBar.style.display = 'none';
        nav.style.position = 'absolute';
        nav.style.zIndex = '1';
        nav.style.padding = '0';
        logoBtn.style.paddingLeft = '1rem';
        logoBtn.style.paddingTop = '1rem';
        border.style.display = 'none';
        logoBtn.addEventListener('click', openNavBar);
        if (logoBtn.onclick && logoBtn.onclick.toString().includes('openNavBar') && isOpenNavBarExecuted) {
          logoBtn.addEventListener('click', closeNavBar);
        }
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
        nav.style.alignItems = 'center';
        nav.style.width = 'auto';
        nav.style.height = 'auto';
        navBar.style.flexDirection = 'row';
        navBar.style.display = 'flex';
        nav.style.position = 'static';
        navBar.style.backgroundColor = 'transparent';
        navBar.style.alignItems = 'center';
        navBar.style.justifyContent = 'flex-start';
        navBar.style.marginBlockStart = '1em';
        navBar.style.marginBlockEnd = '1em';
        navBar.style.width = 'auto';
        navBar.style.height = 'auto';
        nav.style.padding = '0 2.1rem';
        navBar.style.paddingLeft = '0';
        logoBtn.style.padding = '0';
        navBar.style.gap = '0';
        border.style.display = 'block';
        logoBtn.removeEventListener('click', openNavBar);
      }
    }

    function openNavBar(){
      isOpenNavBarExecuted = true;
        nav.style.flexDirection = 'column';
        nav.style.padding = '0';
        nav.style.width = '9rem';
        nav.style.height = '14rem';
        nav.style.alignItems = 'flex-start';
        navBar.style.display = 'flex';
        navBar.style.alignItems = 'flex-start';
        navBar.style.justifyContent = 'center';
        navBar.style.flexDirection = 'column';
        navBar.style.gap = '1rem';
        navBar.style.backgroundColor = '#1E1E1E';
        navBar.style.width = '8rem';
        navBar.style.height = '10rem';
        navBar.style.margin = '0';
        navBar.style.paddingLeft = '1rem';
        logoBtn.removeEventListener('click', openNavBar);
        logoBtn.addEventListener('click', closeNavBar);
    }   

    function closeNavBar(){
      navBar.style.display = 'none';
      logoBtn.removeEventListener('click', closeNavBar);
      logoBtn.addEventListener('click', openNavBar);
    }

    toggleNav();
  
    window.addEventListener('resize', toggleNav);
});

document.addEventListener('DOMContentLoaded', function() {
  const mail = document.getElementById('mail');
  const linkedIn = document.getElementById('linkedIn');
  const gitHub = document.getElementById('gitHub');
  const recipient = 'example@mail.com';

  function links() {
    mail.addEventListener('click', () => {
      window.open(`mailto:${recipient}`, '_blank');
    });
    linkedIn.addEventListener('click', () => {
      window.open('https://www.linkedin.com/in/profile', '_blank');
    });
    gitHub.addEventListener('click', () => {
      window.open('https://github.com/profile', '_blank');
    });
  }

  links();
  
    window.addEventListener('resize', links);
});

document.addEventListener('DOMContentLoaded', function() {
  const anim = document.getElementById('3dModel');
  const web = document.getElementById('webDev');
  const mobile = document.getElementById('appDev');
  const ux = document.getElementById('uxDesign');
  const unity = document.getElementById('arVr');

  function projects() {
    anim.addEventListener('click', () => {
      window.open('https://drive.google.com/file', '_blank');
    });
    web.addEventListener('click', () => {
      window.open('https://github.com/profile/page', '_blank');
    });
    mobile.addEventListener('click', () => {
      window.open('https://loom.com/share/folder', '_blank');
    });
    ux.addEventListener('click', () => {
      window.open('https://drive.google.com/file', '_blank');
    });
    unity.addEventListener('click', () => {
      window.open('.', '_blank');
    });
  }

  projects();
  
    window.addEventListener('resize', projects);
});
