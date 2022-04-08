let arrow = document.querySelector('.learn__arrow');
arrow.addEventListener('click', function(){
    window.scrollTo({
        top: 750,
        behavior: "smooth"
      });
});

window.onload = function(){
  let list = document.querySelector('.clients__list');
  let clients = [
    ['tedx','TEDX'],
    ['kicaldo','Kicaldo'],
    ['espm','ESPN'],
    ['unilever','Unilever'],
    ['good-people-share','Good People Share'],
    ['discovery','Discovery Channel'],
    ['hyper-island','Hyper Island'],
    ['senac','SENAC'],
    ['telefonica','Telefonica'],
    ['united-health-group','United Health Group'],
    ['porto-seguro','Colégio Visconde de Porto Seguro'],
    ['feira-do-empreendedor','Feira do Empreendedor'],
    ['abril','Abril'],
    ['unb','UnB'],
    ['somos','Somos Educação'],
    ['faap','FAAP'],
    ['jaragua','Shopping Jaraguá'],
    ['endeavor-brasil','Endeavor Brasil'],
    ['stone','Stone'],
    ['google','Google'],
    ['social-media-week','Social Media Week'],
    ['coursera','Coursera'],
    ['brasil','Governo Federal Pátria Educadora Brasil - Ministério do Desenvolvimento, Indústria e Comércio Exterior'],
    ['serasa-experian','Serasa Experian'],
    ['search-masters-brasil','Search Masters Brasil'],
    ['alesp','Assembleia Legislativa do Estado de São Paulo'],
    ['sebrae','SEBRAE'],
    ['warner-music-brazil','Warner Music Brazil'],
    ['renova-br','RENOVA BR'],
    ['fiap','FIAP'],
    ['empreendedorismo','Semana Global do Empreendedorismo Brasil'],
    ['lab-data-fia','lab.data FIA - Fundação Instituto de Administração. Business School'],
    ['xp','XP'],
    ['rio-branco','Rio Branco'],
    ['bradesco','Bradesco'],
    ['casper','Cásper'],
    ['taua','Grupo Tauá Hotéis']
  ];
  console.log(clients);
  clients.forEach(c => {
    list.innerHTML += `
      <picture>
        <source media="(min-width: 992px)" srcset="assets/img/clients/${c[0]}-desktop.png">
        <img src="assets/img/clients/${c[0]}-mobile.png" alt="${c[1]}">
      </picture>
    `;
  });
}
