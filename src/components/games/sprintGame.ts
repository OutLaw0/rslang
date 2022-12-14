const renderSprintGameTemplate = (): string => `
<div class="fixed-sprint-wrapper">
      <div class="fixed-window">
        <div class="game-operations-group"></div>
        <div class="game-points-wrapper"><span class="game-points">0</span></div>
        <div class="game-timer-wrapper"><span class="game-timer">60</span></div>
        <section class="sprint-game-wrapper">
        <div class="sprint-question"></div>
        <div class="sprint-answer">
          <button class='sprint-answer__incorrect'>Неверно</button>
          <button class='sprint-answer__correct'>Верно</button>
        </div>
        </section>
      </div>
      <div class="fixed-result-window hidden">
        <section class="result-section">
          <div class="result-section__words">
            <div class="result-section__learned-words"></div>
            <div class="result-section__unlearned-words"></div>
          </div>
          <div class="result-section__operation-panel"></div>
        </section>
      </div> 
    </div>
`;

export const renderSprintGameBeReadyTemplate = (): string => `
<div class="fixed-sprint-wrapper">
  <div class="fixed-be-ready-window">
    <div class="game-operations-group"></div>
      <section class="be-ready">
        <div class="be-ready__num-wrapper"><span class="be-ready__num">3</span></div>
        <span class="be-ready__text">Приготовьтесь</span>  
      </section>
  </div> 
</div>
`;

export default renderSprintGameTemplate;
