function mostrarCapitulo(num) {
  const capitulo = document.getElementById("capitulo");

  if (num === 1) {
    capitulo.innerHTML = `
      <div class="avatar-dupla">
        <img src="img/avatar-aurora.png" class="avatar" alt="Aurora">
      </div>
      <h2>Capítulo 1: Aurora</h2>
      <p>Você acorda numa sala escura. A IA Veritas te envia uma mensagem criptografada:</p>
      <p><em>“Se a notícia é falsa, então o caos foi intencional.”</em></p>
      <p><strong>P → Q</strong> <br> (Se a notícia é falsa, então o caos aconteceu)</p>
      <p>Mas a cidade está em ruínas, e você sabe que o caos aconteceu. O que conclui?</p>
      <button onclick="capitulo1Resposta(1)">1. Então a notícia era falsa (Modus Ponens)</button>
      <button onclick="capitulo1Resposta(2)">2. Então a notícia era verdadeira (Neg. do Consequente)</button>
      <div id="resultado"></div>
    `;
  } else if (num === 2) {
    capitulo.innerHTML = `
      <div class="avatar-dupla">
        <img src="img/avatar-elyas.png" class="avatar" alt="Elyas">
      </div>
      <h2>Capítulo 2: Elyas</h2>
      <p>Elyas, o rastreador, encontra uma gravação deixada por cientistas:</p>
      <p><em>“Se as mentiras forem removidas (P), a ordem é restaurada (Q).”</em></p>
      <p>Ele sabe que a ordem <strong>não</strong> foi restaurada. <strong>Q é falso.</strong> Qual a conclusão lógica?</p>
      <button onclick="capitulo2Resposta(1)">1. As mentiras foram removidas</button>
      <button onclick="capitulo2Resposta(2)">2. As mentiras não foram removidas (Modus Tollens)</button>
      <div id="resultado"></div>
    `;
  } else if (num === 3) {
    capitulo.innerHTML = `
      <div class="avatar-dupla">
        <img src="img/avatar-aurora.png" class="avatar" alt="Aurora">
        <img src="img/avatar-elyas.png" class="avatar" alt="Elyas">
      </div>
      <h2>Capítulo 3: A Cidade Partida</h2>
      <p>Um sistema de vigilância emite a regra:</p>
      <p><strong>(P ∧ Q) → R</strong></p>
      <p>“Se você for honesto (P) e cauteloso (Q), então poderá atravessar (R).”</p>
      <p>Você é honesto, mas não tem certeza se foi cauteloso. O que decide?</p>
      <button onclick="capitulo3Resposta(1)">1. Tentar atravessar mesmo sem certeza</button>
      <button onclick="capitulo3Resposta(2)">2. Verificar Q antes de atravessar</button>
      <div id="resultado"></div>
    `;
  } else if (num === 4) {
    capitulo.innerHTML = `
      <div class="avatar-dupla">
        <img src="img/avatar-aurora.png" class="avatar" alt="Aurora">
        <img src="img/avatar-elyas.png" class="avatar" alt="Elyas">
      </div>
      <h2>Capítulo 4: O Portal do Limiar</h2>
      <p>“Se você tiver o código antigo (P) ou a biometria (Q), poderá atravessar.”</p>
      <p>Aurora perdeu o código antigo, mas Elyas tem a identificação biométrica. O que fazer?</p>
      <button onclick="capitulo4Resposta(1)">1. Avançar pois Q é verdadeiro</button>
      <button onclick="capitulo4Resposta(2)">2. Desistir pois P é falso</button>
      <div id="resultado"></div>
    `;
  } else if (num === 5) {
    capitulo.innerHTML = `
      <img src="img/avatar-fakemind.png" class="avatar" alt="FakeMind">
      <h2>Capítulo 5: A Máquina</h2>
      <p>A origem da desinformação: uma supermáquina chamada <strong>FakeMind</strong>.</p>
      <p><em>“Esta frase é falsa.”</em></p>
      <p><strong>Escolha a única proposição logicamente verdadeira:</strong></p>
      <button onclick="capitulo5Resposta(1)">1. P ∨ ¬P</button>
      <button onclick="capitulo5Resposta(2)">2. P ∧ ¬P</button>
      <div id="resultado"></div>
    `;
  } else if (num === 6) {
    capitulo.innerHTML = `
      <h2>🏁 Simulação Finalizada</h2>
      <p><strong>A Verdade foi restaurada.</strong></p>
      <p><strong>Desenvolvido por:</strong> Equipe</p>
      <p><strong>Disciplina:</strong> Lógica para Programação</p>
      <p><strong>Referências:</strong> Modus Ponens, Tollens, Disjunção, Conjunção, Tautologia</p>
      <p><strong>Estilo:</strong> Matrix, Jessica Jones, The Last of Us</p>
      <p><a href="#" onclick="location.reload()">🔁 Reiniciar Simulação</a></p>
    `;
  }
}

function capitulo1Resposta(escolha) {
  const res = document.getElementById("resultado");
  if (escolha === 1) {
    res.innerHTML = `
      <p><strong>Aurora:</strong> A lógica não falha. Sigo em frente.</p>
      <p><a href="#" onclick="mostrarCapitulo(2)">Avançar para Capítulo 2</a></p>
    `;
  } else {
    res.innerHTML = `
      <p><strong>Veritas:</strong> Erro lógico detectado. Se P → Q e Q é verdadeiro, não se pode inferir P.</p>
      <p><a href="#" onclick="mostrarCapitulo(1)">Tentar novamente</a></p>
    `;
  }
}

function capitulo2Resposta(escolha) {
  const res = document.getElementById("resultado");
  if (escolha === 2) {
    res.innerHTML = `
      <p><strong>Elyas:</strong> A conclusão é clara. As mentiras continuam escondidas.</p>
      <p><a href="#" onclick="mostrarCapitulo(3)">Avançar para Capítulo 3</a></p>
    `;
  } else {
    res.innerHTML = `
      <p><strong>Elyas:</strong> Isso não faz sentido.</p>
      <p><a href="#" onclick="mostrarCapitulo(2)">Tentar novamente</a></p>
    `;
  }
}

function capitulo3Resposta(escolha) {
  const res = document.getElementById("resultado");
  if (escolha === 2) {
    res.innerHTML = `
      <p><strong>Aurora:</strong> Aguardo até ter certeza. Sem lógica, sem travessia.</p>
      <p><a href="#" onclick="mostrarCapitulo(4)">Avançar para Capítulo 4</a></p>
    `;
  } else {
    res.innerHTML = `
      <p><strong>Veritas:</strong> Risco detectado. Conjunção não garantida.</p>
      <p><a href="#" onclick="mostrarCapitulo(3)">Tentar novamente</a></p>
    `;
  }
}

function capitulo4Resposta(escolha) {
  const res = document.getElementById("resultado");
  if (escolha === 1) {
    res.innerHTML = `
      <p><strong>Veritas:</strong> Disjunção válida. Portal liberado.</p>
      <p><a href="#" onclick="mostrarCapitulo(5)">Avançar para Capítulo 5</a></p>
    `;
  } else {
    res.innerHTML = `
      <p><strong>Aurora:</strong> Se uma opção bastava, por que parar?</p>
      <p><a href="#" onclick="mostrarCapitulo(4)">Tentar novamente</a></p>
    `;
  }
}

function capitulo5Resposta(escolha) {
  const res = document.getElementById("resultado");
  if (escolha === 1) {
    res.innerHTML = `
      <p><strong>Veritas:</strong> Tautologia identificada. A lógica venceu.</p>
      <p><a href="#" onclick="mostrarCapitulo(6)">Ver Créditos</a></p>
    `;
  } else {
    res.innerHTML = `
      <p><strong>FakeMind:</strong> Contradição. Você caiu na armadilha.</p>
      <p><a href="#" onclick="mostrarCapitulo(5)">Tentar novamente</a></p>
    `;
  }
}
