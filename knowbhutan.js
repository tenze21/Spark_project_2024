const sections = document.querySelectorAll('section');
let previousSection = null;

document.addEventListener('scroll', function () {
  const currentSection = Array.from(sections).find(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    return window.scrollY + window.innerHeight >= sectionTop && window.scrollY <= sectionTop + sectionHeight;
  });

  if (currentSection && previousSection && previousSection !== currentSection) {
    previousSection.classList.remove('fade-in', 'visible');
    previousSection.classList.add('fade-away', 'hidden');
  }

  if (currentSection && !currentSection.classList.contains('fade-in')) {
    currentSection.classList.add('fade-in');
    setTimeout(() => {
      currentSection.classList.add('visible');
    }, 10);
    previousSection = currentSection;
  } else if (currentSection && currentSection === previousSection) {
    previousSection = null;
  }

  if (currentSection && previousSection && previousSection !== currentSection) {
    previousSection.classList.remove('fade-away', 'hidden');
    previousSection.classList.add('fade-in', 'visible');
  }

  if (currentSection && currentSection === previousSection) {
    previousSection = null;
  }
});