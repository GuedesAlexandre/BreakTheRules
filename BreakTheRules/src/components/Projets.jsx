import React from 'react'
import '../styles/projets.css'
import Navbar from './Navbar'


function Projets() {
  return (
  
    <div>
          <Navbar/><section id="project">
    <div class="titre-projet">
        <h1>Notre projet</h1>
    </div>
    <div class="para-projet">
        <p class="para">Notre équipe, les DéMeauxnétisés, a créé durant cette Nuit de l’Info un site qui permet de dissocier le vrai du faux dans les idées reçues sur les solutions au changement climatique.</p>
        <p class="para">On a donc réalisé un site contenant une partie histoire dans une timeline. Mais la partie la plus importante est celle du jeu : une QCM qui a pour but d’informer les gens sur les réelles pratiques à avoir pour ralentir le changement climatique.</p>
        <p class="para">Ce jeu permet à la fois de s’amuser, mais avant tout d’apprendre et de s’informer afin de changer nos habitudes et nos préjugés sur le changement climatique. Ainsi notre site renvoie un message écologique pour que notre planète se porte mieux.</p>
    </div>
</section></div>
  )
}

export default Projets