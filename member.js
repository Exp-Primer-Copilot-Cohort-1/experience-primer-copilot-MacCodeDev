function skillsMember() { // eslint-disable-line no-unused-vars
  const member = document.getElementById('member');
  const memberSkills = document.getElementById('member-skills');
  const memberSkillsClose = document.getElementById('member-skills-close');
  const memberSkillsList = document.getElementById('member-skills-list');

  if (member) {
    member.addEventListener('click', () => {
      memberSkills.classList.add('member-skills--active');
    });
  }

  if (memberSkillsClose) {
    memberSkillsClose.addEventListener('click', () => {
      memberSkills.classList.remove('member-skills--active');
    });
  }

  if (memberSkillsList) {
    memberSkillsList.addEventListener('click', (e) => {
      if (e.target.classList.contains('member-skills__item')) {
        e.target.classList.toggle('member-skills__item--active');
      }
    });
  }
}


