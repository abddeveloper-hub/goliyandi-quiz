/**
 * Meelad Fest Goliyangadi - Main Application Coordinator & UI Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DOM References
  const qRoundBadge = document.getElementById('qRoundBadge');
  const qDiffBadge = document.getElementById('qDiffBadge');
  const qPointsBadge = document.getElementById('qPointsBadge');
  const qCounterText = document.getElementById('qCounterText');
  const qTextMl = document.getElementById('qTextMl');
  const qTextEn = document.getElementById('qTextEn');
  const currentRoundBadge = document.getElementById('currentRoundBadge');

  const optionsGrid = document.getElementById('optionsGrid');
  const optionBtns = [
    document.getElementById('opt0'),
    document.getElementById('opt1'),
    document.getElementById('opt2'),
    document.getElementById('opt3')
  ];
  const optionTexts = [
    document.getElementById('optText0'),
    document.getElementById('optText1'),
    document.getElementById('optText2'),
    document.getElementById('optText3')
  ];

  const explanationCard = document.getElementById('explanationCard');
  const expTextMl = document.getElementById('expTextMl');
  const expTextEn = document.getElementById('expTextEn');

  const timerCircle = document.getElementById('timerCircle');
  const timerSeconds = document.getElementById('timerSeconds');

  const roundsNav = document.getElementById('roundsNav');
  const hostDock = document.getElementById('hostDock');
  const prevQuestionBtn = document.getElementById('prevQuestionBtn');
  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  const revealAnswerBtn = document.getElementById('revealAnswerBtn');

  const activeTeamSelect = document.getElementById('activeTeamSelect');
  const awardPlus10Btn = document.getElementById('awardPlus10Btn');
  const awardPlus15Btn = document.getElementById('awardPlus15Btn');
  const awardMinus5Btn = document.getElementById('awardMinus5Btn');

  const buzzerSoundBtn = document.getElementById('buzzerSoundBtn');
  const fanfareSoundBtn = document.getElementById('fanfareSoundBtn');

  const lifelineFiftyBtn = document.getElementById('lifelineFiftyBtn');
  const lifelineAudienceBtn = document.getElementById('lifelineAudienceBtn');
  const lifelineTimeBtn = document.getElementById('lifelineTimeBtn');

  const quickTeamsList = document.getElementById('quickTeamsList');
  const quickScoresResetBtn = document.getElementById('quickScoresResetBtn');

  // Header actions
  const langDualBtn = document.getElementById('langDualBtn');
  const langMlBtn = document.getElementById('langMlBtn');
  const langEnBtn = document.getElementById('langEnBtn');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');

  // Modals & Triggers
  const openScoreboardBtn = document.getElementById('openScoreboardBtn');
  const openCertBtn = document.getElementById('openCertBtn');
  const openManagerBtn = document.getElementById('openManagerBtn');
  const openHelpBtn = document.getElementById('openHelpBtn');

  const scoreboardModal = document.getElementById('scoreboardModal');
  const certificateModal = document.getElementById('certificateModal');
  const managerModal = document.getElementById('managerModal');
  const helpModal = document.getElementById('helpModal');

  // Scoreboard elements
  const podiumDisplay = document.getElementById('podiumDisplay');
  const scoreboardTableBody = document.getElementById('scoreboardTableBody');
  const newTeamInput = document.getElementById('newTeamInput');
  const addNewTeamBtn = document.getElementById('addNewTeamBtn');
  const resetScoresOnlyBtn = document.getElementById('resetScoresOnlyBtn');
  const celebrateWinnerBtn = document.getElementById('celebrateWinnerBtn');

  // Certificate elements
  const certCanvas = document.getElementById('certCanvas');
  const certNameInput = document.getElementById('certNameInput');
  const certTitleInput = document.getElementById('certTitleInput');
  const certEventInput = document.getElementById('certEventInput');
  const certVenueInput = document.getElementById('certVenueInput');
  const certScoreInput = document.getElementById('certScoreInput');
  const downloadCertBtn = document.getElementById('downloadCertBtn');
  const printCertBtn = document.getElementById('printCertBtn');

  // Question Manager elements
  const saveNewQuestionBtn = document.getElementById('saveNewQuestionBtn');
  const searchQuestionInput = document.getElementById('searchQuestionInput');
  const exportQuestionsBtn = document.getElementById('exportQuestionsBtn');
  const importQuestionsFile = document.getElementById('importQuestionsFile');
  const resetQuestionsBtn = document.getElementById('resetQuestionsBtn');
  const questionManagerTableBody = document.getElementById('questionManagerTableBody');

  // SVG Circle Circumference for 70px radius: 2 * Math.PI * 70 ≈ 439.82
  const CIRCLE_CIRCUMFERENCE = 440;

  // 2. Initialize Engine Listeners
  window.quizEngine.onTick = (remaining, total) => {
    timerSeconds.textContent = Math.max(0, remaining);
    const progress = (total - remaining) / total;
    const offset = CIRCLE_CIRCUMFERENCE * progress;
    timerCircle.style.strokeDashoffset = offset;

    if (remaining <= 5 && remaining > 0) {
      timerCircle.classList.add('urgent');
    } else {
      timerCircle.classList.remove('urgent');
    }
  };

  window.quizEngine.onTimeUp = () => {
    timerSeconds.textContent = '0';
    timerCircle.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
    timerCircle.classList.add('urgent');
  };

  window.quizEngine.onStateChange = () => {
    renderCurrentQuestion();
    renderQuickScores();
  };

  // 3. Render Active Question & UI State
  function renderCurrentQuestion() {
    const q = window.quizEngine.getCurrentQuestion();
    const total = window.quizEngine.getTotalQuestions();
    const currentIndex = window.quizEngine.getCurrentIndex();

    if (!q) {
      qTextMl.textContent = 'ചോദ്യങ്ങൾ ലഭ്യമല്ല.';
      qTextEn.textContent = 'No questions found in this category.';
      qCounterText.textContent = '0 / 0';
      return;
    }

    // Meta badges
    qRoundBadge.textContent = q.roundName || 'Islamic Quiz';
    currentRoundBadge.textContent = `${q.roundName || ''} (${q.roundNameMl || ''})`;
    qDiffBadge.textContent = q.difficulty || 'Standard';
    qPointsBadge.textContent = `+${q.points || 10} Points`;
    qCounterText.textContent = `Question ${currentIndex + 1} / ${total}`;

    // Language display modes
    const langMode = window.quizEngine.langMode;
    if (langMode === 'ml') {
      qTextMl.style.display = 'block';
      qTextEn.style.display = 'none';
      qTextMl.textContent = q.questionMl || q.questionEn;
    } else if (langMode === 'en') {
      qTextMl.style.display = 'none';
      qTextEn.style.display = 'block';
      qTextEn.textContent = q.questionEn;
    } else {
      // Dual mode
      qTextMl.style.display = 'block';
      qTextEn.style.display = 'block';
      qTextMl.textContent = q.questionMl;
      qTextEn.textContent = q.questionEn;
    }

    // Render Options
    optionBtns.forEach((btn, idx) => {
      const optTextEl = optionTexts[idx];
      const pollBar = document.getElementById(`pollBar${idx}`);
      const pollFill = document.getElementById(`pollFill${idx}`);
      const pollPct = document.getElementById(`pollPct${idx}`);

      optTextEl.textContent = q.options[idx] || '';

      // Reset classes
      btn.className = 'option-btn';

      // Eliminated via 50:50
      if (window.quizEngine.eliminatedOptions.includes(idx)) {
        btn.classList.add('eliminated');
      }

      // Selected
      if (window.quizEngine.selectedOptionIndex === idx) {
        btn.classList.add('selected');
      }

      // Revealed state
      if (window.quizEngine.isAnswerRevealed) {
        if (idx === q.correctIndex) {
          btn.classList.add('correct');
        } else if (window.quizEngine.selectedOptionIndex === idx) {
          btn.classList.add('wrong');
        }
      }

      // Audience Poll percentages
      if (window.quizEngine.audiencePollData) {
        const pct = window.quizEngine.audiencePollData[idx] || 0;
        pollBar.style.display = 'flex';
        pollPct.style.display = 'inline-block';
        pollPct.textContent = `${pct}% of Audience`;
        pollFill.style.width = `${pct}%`;
      } else {
        pollBar.style.display = 'none';
        pollPct.style.display = 'none';
      }
    });

    // Explanation
    if (window.quizEngine.isAnswerRevealed) {
      if (revealAnswerBtn) revealAnswerBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Hide Answer (Space)';
      explanationCard.style.display = 'flex';
      expTextMl.textContent = q.explanationMl || '';
      expTextEn.textContent = q.explanationEn || '';
    } else {
      if (revealAnswerBtn) revealAnswerBtn.innerHTML = '<i class="fa-solid fa-eye"></i> Reveal Answer (Space)';
      explanationCard.style.display = 'none';
    }

    // Update Timer display
    timerSeconds.textContent = window.quizEngine.timeRemaining;
    const progress = (window.quizEngine.timerDuration - window.quizEngine.timeRemaining) / window.quizEngine.timerDuration;
    timerCircle.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE * progress;
    if (window.quizEngine.timeRemaining <= 5 && window.quizEngine.timeRemaining > 0) {
      timerCircle.classList.add('urgent');
    } else {
      timerCircle.classList.remove('urgent');
    }

    // Update Lifelines button states
    lifelineFiftyBtn.disabled = window.quizEngine.eliminatedOptions.length > 0 || window.quizEngine.isAnswerRevealed;
    lifelineAudienceBtn.disabled = window.quizEngine.audiencePollData !== null || window.quizEngine.isAnswerRevealed;
  }

  // 4. Quick Live Teams Widget
  function renderQuickScores() {
    const teams = window.scoreboardManager.getTeams();
    quickTeamsList.innerHTML = '';
    activeTeamSelect.innerHTML = '';

    teams.forEach(team => {
      // Option for host dock select
      const opt = document.createElement('option');
      opt.value = team.id;
      opt.textContent = `${team.name} (${team.score} pts)`;
      activeTeamSelect.appendChild(opt);

      // Quick sidebar item
      const item = document.createElement('div');
      item.className = 'quick-team-item';
      item.style.borderLeftColor = team.color || '#10b981';
      item.innerHTML = `
        <div>
          <div class="quick-team-name">${team.name}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">✓ ${team.correct || 0}  ✗ ${team.wrong || 0}</div>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="quick-team-score">${team.score}</span>
          <button class="chip-btn add" style="padding:2px 6px;" data-team="${team.id}" data-delta="10">+10</button>
        </div>
      `;
      quickTeamsList.appendChild(item);
    });

    // Quick score click listeners
    quickTeamsList.querySelectorAll('button[data-team]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tid = btn.getAttribute('data-team');
        const delta = parseInt(btn.getAttribute('data-delta'), 10);
        window.scoreboardManager.adjustScore(tid, delta, true);
        if (window.soundEngine) window.soundEngine.playCorrect();
        renderQuickScores();
      });
    });
  }

  // 5. Option Click Handlers
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.quizEngine.timeRemaining <= 0 || window.quizEngine.isAnswerRevealed) return;
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      window.quizEngine.selectOption(idx);
    });
  });

  // 6. Lifelines Handlers
  lifelineFiftyBtn.addEventListener('click', () => window.quizEngine.useFiftyFifty());
  lifelineAudienceBtn.addEventListener('click', () => window.quizEngine.useAudiencePoll());
  lifelineTimeBtn.addEventListener('click', () => window.quizEngine.addExtraTime(15));

  // 8. Host Dock Controls
  if (prevQuestionBtn) prevQuestionBtn.addEventListener('click', () => window.quizEngine.prevQuestion());
  if (nextQuestionBtn) nextQuestionBtn.addEventListener('click', () => window.quizEngine.nextQuestion());
  if (revealAnswerBtn) revealAnswerBtn.addEventListener('click', () => window.quizEngine.toggleAnswerReveal());

  awardPlus10Btn.addEventListener('click', () => {
    const tid = activeTeamSelect.value;
    if (tid) {
      window.scoreboardManager.adjustScore(tid, 10, true);
      if (window.soundEngine) window.soundEngine.playCorrect();
      renderQuickScores();
    }
  });

  awardPlus15Btn.addEventListener('click', () => {
    const tid = activeTeamSelect.value;
    if (tid) {
      window.scoreboardManager.adjustScore(tid, 15, true);
      if (window.soundEngine) window.soundEngine.playCorrect();
      renderQuickScores();
    }
  });

  awardMinus5Btn.addEventListener('click', () => {
    const tid = activeTeamSelect.value;
    if (tid) {
      window.scoreboardManager.adjustScore(tid, -5, false);
      if (window.soundEngine) window.soundEngine.playWrong();
      renderQuickScores();
    }
  });

  buzzerSoundBtn.addEventListener('click', () => {
    if (window.soundEngine) window.soundEngine.playBuzzer();
  });

  fanfareSoundBtn.addEventListener('click', () => {
    if (window.soundEngine) window.soundEngine.playFanfare();
    launchConfetti();
  });

  quickScoresResetBtn.addEventListener('click', () => {
    if (confirm('Reset all live team scores to 0?')) {
      window.scoreboardManager.resetAllScores();
      renderQuickScores();
    }
  });

  // 9. Language Switcher Buttons
  langDualBtn.addEventListener('click', () => {
    setActiveLangBtn(langDualBtn);
    window.quizEngine.setLanguageMode('dual');
  });
  langMlBtn.addEventListener('click', () => {
    setActiveLangBtn(langMlBtn);
    window.quizEngine.setLanguageMode('ml');
  });
  langEnBtn.addEventListener('click', () => {
    setActiveLangBtn(langEnBtn);
    window.quizEngine.setLanguageMode('en');
  });

  function setActiveLangBtn(activeBtn) {
    [langDualBtn, langMlBtn, langEnBtn].forEach(b => b.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  // 10. Rounds Navigation Tabs
  roundsNav.querySelectorAll('.round-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      roundsNav.querySelectorAll('.round-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const roundKey = tab.getAttribute('data-round');
      window.quizEngine.setRound(roundKey);
    });
  });

  // 11. Header Buttons (Sound, Fullscreen)
  soundToggleBtn.addEventListener('click', () => {
    if (window.soundEngine) {
      const isMuted = window.soundEngine.toggleMute();
      soundToggleBtn.innerHTML = isMuted 
        ? '<i class="fa-solid fa-volume-xmark" style="color:var(--wrong-red);"></i>'
        : '<i class="fa-solid fa-volume-high"></i>';
    }
  });

  fullscreenBtn.addEventListener('click', toggleFullscreen);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen error:', err);
      });
      fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
  }

  // 12. Modal Controllers
  function openModal(modalEl) {
    modalEl.classList.add('active');
  }
  function closeModal(modalEl) {
    modalEl.classList.remove('active');
  }

  document.querySelectorAll('.modal-close, [data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-close');
      if (targetId) {
        const targetModal = document.getElementById(targetId);
        if (targetModal) closeModal(targetModal);
      }
    });
  });

  // Close modal when clicking on backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Open Modals
  openScoreboardBtn.addEventListener('click', () => {
    renderScoreboardModal();
    openModal(scoreboardModal);
  });

  openCertBtn.addEventListener('click', () => {
    renderCertificatePreview();
    openModal(certificateModal);
  });

  openManagerBtn.addEventListener('click', () => {
    renderQuestionManagerTable();
    openModal(managerModal);
  });

  openHelpBtn.addEventListener('click', () => {
    openModal(helpModal);
  });

  // 13. Grand Scoreboard & Podium Modal Logic
  function renderScoreboardModal() {
    const ranked = window.scoreboardManager.getRankedTeams();
    
    // Render Podium for Top 3
    podiumDisplay.innerHTML = '';
    const top3 = [ranked[1] || null, ranked[0] || null, ranked[2] || null]; // Order: 2nd, 1st, 3rd visually
    const rankClasses = ['rank-2', 'rank-1', 'rank-3'];
    const rankTitles = ['2nd Place', '1st Place 🏆', '3rd Place'];

    top3.forEach((team, idx) => {
      if (team) {
        const step = document.createElement('div');
        step.className = `podium-step ${rankClasses[idx]}`;
        step.innerHTML = `
          <div class="podium-team-title">${team.name}</div>
          <div class="podium-points">${team.score} PTS</div>
          <div class="podium-pillar">${idx === 1 ? '1' : idx === 0 ? '2' : '3'}</div>
          <div style="font-size:0.8rem; color:var(--text-gold); margin-top:6px;">${rankTitles[idx]}</div>
        `;
        podiumDisplay.appendChild(step);
      }
    });

    // Render detailed table
    scoreboardTableBody.innerHTML = '';
    ranked.forEach((team, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight:700; color:var(--gold-light);">#${idx + 1}</td>
        <td>
          <input type="text" class="form-input team-edit-name" data-id="${team.id}" value="${team.name}" style="padding:4px 8px; max-width:240px;">
        </td>
        <td style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700; color:var(--gold-light);">${team.score}</td>
        <td style="color:#34d399;">${team.correct || 0}</td>
        <td style="color:#f87171;">${team.wrong || 0}</td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="chip-btn add" data-adjust-id="${team.id}" data-val="10">+10</button>
            <button class="chip-btn sub" data-adjust-id="${team.id}" data-val="-5">-5</button>
            <button class="chip-btn sub" data-delete-id="${team.id}" title="Remove Team" style="background:rgba(239,68,68,0.3);"><i class="fa-solid fa-trash"></i></button>
          </div>
        </td>
      `;
      scoreboardTableBody.appendChild(tr);
    });

    // Event listeners for inline adjustments in scoreboard
    scoreboardTableBody.querySelectorAll('.team-edit-name').forEach(inp => {
      inp.addEventListener('change', () => {
        const tid = inp.getAttribute('data-id');
        window.scoreboardManager.updateTeamName(tid, inp.value);
        renderQuickScores();
      });
    });

    scoreboardTableBody.querySelectorAll('[data-adjust-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tid = btn.getAttribute('data-adjust-id');
        const val = parseInt(btn.getAttribute('data-val'), 10);
        window.scoreboardManager.adjustScore(tid, val, val > 0);
        renderScoreboardModal();
        renderQuickScores();
      });
    });

    scoreboardTableBody.querySelectorAll('[data-delete-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tid = btn.getAttribute('data-delete-id');
        if (confirm('Delete this team from leaderboard?')) {
          window.scoreboardManager.removeTeam(tid);
          renderScoreboardModal();
          renderQuickScores();
        }
      });
    });
  }

  addNewTeamBtn.addEventListener('click', () => {
    const name = newTeamInput.value.trim();
    if (name) {
      window.scoreboardManager.addTeam(name);
      newTeamInput.value = '';
      renderScoreboardModal();
      renderQuickScores();
    }
  });

  resetScoresOnlyBtn.addEventListener('click', () => {
    if (confirm('Reset scores for all teams?')) {
      window.scoreboardManager.resetAllScores();
      renderScoreboardModal();
      renderQuickScores();
    }
  });

  celebrateWinnerBtn.addEventListener('click', () => {
    if (window.soundEngine) window.soundEngine.playFanfare();
    launchConfetti();
  });

  // 14. Certificate Generator Live Canvas Rendering
  function renderCertificatePreview() {
    if (!certCanvas) return;
    const ctx = certCanvas.getContext('2d');
    const width = certCanvas.width;
    const height = certCanvas.height;

    // Background Emerald Gradient
    const bgGradient = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * 0.7);
    bgGradient.addColorStop(0, '#042a22');
    bgGradient.addColorStop(1, '#02120e');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // Ornate Gold Double Border
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, width - 64, height - 64);

    // Corner Ornaments
    const drawCorner = (x, y, angle) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(25, 0);
      ctx.lineTo(0, 25);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };
    drawCorner(32, 32, 0);
    drawCorner(width - 32, 32, Math.PI / 2);
    drawCorner(width - 32, height - 32, Math.PI);
    drawCorner(32, height - 32, -Math.PI / 2);

    // Bismillah Calligraphy Top
    ctx.fillStyle = '#fbbf24';
    ctx.font = '28px "Amiri", serif';
    ctx.textAlign = 'center';
    ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', width / 2, 80);

    // Certificate Title
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 36px "Cinzel", serif';
    ctx.fillText('CERTIFICATE OF EXCELLENCE', width / 2, 135);

    // Subtitle
    ctx.fillStyle = '#34d399';
    ctx.font = '600 16px "Outfit", sans-serif';
    ctx.fillText('MEELAD FEST GOLIYANGADI • GRAND ISLAMIC QUIZ', width / 2, 168);

    // "This is proudly presented to"
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 16px "Outfit", sans-serif';
    ctx.fillText('This certificate is proudly awarded to', width / 2, 215);

    // Participant Name
    const pName = certNameInput.value.trim() || 'Distinguished Participant';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px "Cinzel", "Manjari", serif';
    ctx.fillText(pName, width / 2, 275);

    // Underline line for name
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 220, 292);
    ctx.lineTo(width / 2 + 220, 292);
    ctx.stroke();

    // Body Text with Award Category and Event
    const titleText = certTitleInput.value.trim() || 'Winner';
    const eventText = certEventInput.value.trim() || 'Grand Islamic Quiz';
    const venueText = certVenueInput.value.trim() || 'Goliyangadi';
    const scoreText = certScoreInput.value.trim() || 'Full Points';

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '500 18px "Outfit", sans-serif';
    ctx.fillText(`for achieving outstanding performance as ${titleText}`, width / 2, 335);
    ctx.fillText(`in the ${eventText} conducted as part of Students Meelad Fest at ${venueText}.`, width / 2, 370);

    // Score Badge Pill
    ctx.fillStyle = 'rgba(16, 185, 129, 0.25)';
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(width / 2 - 120, 400, 240, 42, 21);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 18px "Cinzel", sans-serif';
    ctx.fillText(`SCORE: ${scoreText}`, width / 2, 427);

    // Golden Seal in Center Left
    ctx.save();
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(140, 510, 42, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#02120e';
    ctx.font = 'bold 11px "Cinzel", sans-serif';
    ctx.fillText('OFFICIAL SEAL', 140, 508);
    ctx.fillText('MEELAD FEST', 140, 522);
    ctx.restore();

    // Signatures
    const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px "Outfit", sans-serif';
    
    // Left: Date
    ctx.fillText(`Date: ${dateStr}`, 280, 525);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.moveTo(220, 505);
    ctx.lineTo(340, 505);
    ctx.stroke();

    // Right: Quiz Convener Signature
    ctx.fillText('Quiz Convener / Master', width - 200, 525);
    ctx.beginPath();
    ctx.moveTo(width - 280, 505);
    ctx.lineTo(width - 120, 505);
    ctx.stroke();
  }

  [certNameInput, certTitleInput, certEventInput, certVenueInput, certScoreInput].forEach(inp => {
    inp.addEventListener('input', renderCertificatePreview);
  });

  downloadCertBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = `Meelad_Certificate_${(certNameInput.value.trim() || 'Participant').replace(/\s+/g, '_')}.png`;
    link.href = certCanvas.toDataURL('image/png');
    link.click();
  });

  printCertBtn.addEventListener('click', () => {
    const dataUrl = certCanvas.toDataURL('image/png');
    const win = window.open('', '_blank');
    win.document.write(`
      <html>
        <head><title>Print Certificate - Meelad Fest Goliyangadi</title></head>
        <body style="margin:0; display:flex; justify-content:center; align-items:center; min-height:100vh; background:#000;">
          <img src="${dataUrl}" style="max-width:100%; height:auto;" onload="window.print();window.close();" />
        </body>
      </html>
    `);
  });

  // 15. Question Manager Modal Logic
  function renderQuestionManagerTable(searchFilter = '') {
    const questions = window.quizEngine.questions;
    questionManagerTableBody.innerHTML = '';

    const filtered = questions.filter(q => {
      const qText = `${q.questionMl || ''} ${q.questionEn || ''} ${q.roundName || ''}`.toLowerCase();
      return qText.includes(searchFilter.toLowerCase());
    });

    filtered.forEach((q, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight:700; color:var(--gold-light);">${idx + 1}</td>
        <td><span class="q-badge round-badge" style="font-size:0.75rem;">${q.roundName || q.round}</span></td>
        <td>
          <div style="font-family:var(--font-malayalam); font-size:0.95rem; color:#fff;">${q.questionMl}</div>
          <div style="font-size:0.82rem; color:var(--text-muted); margin-top:3px;">${q.questionEn}</div>
        </td>
        <td style="color:#34d399; font-weight:600;">${q.options[q.correctIndex]}</td>
        <td>+${q.points || 10}</td>
        <td>
          <button class="chip-btn sub" data-qdel="${q.id}" title="Delete Question"><i class="fa-solid fa-trash"></i></button>
        </td>
      `;
      questionManagerTableBody.appendChild(tr);
    });

    questionManagerTableBody.querySelectorAll('[data-qdel]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.getAttribute('data-qdel');
        if (confirm('Delete this question from question bank?')) {
          const updated = window.quizEngine.questions.filter(q => q.id !== qid);
          saveQuestionsToStorage(updated);
          window.quizEngine.reloadQuestions();
          renderQuestionManagerTable(searchQuestionInput.value);
        }
      });
    });
  }

  searchQuestionInput.addEventListener('input', () => {
    renderQuestionManagerTable(searchQuestionInput.value);
  });

  saveNewQuestionBtn.addEventListener('click', () => {
    const qMl = document.getElementById('newQMl').value.trim();
    const qEn = document.getElementById('newQEn').value.trim();
    const opt0 = document.getElementById('newOpt0').value.trim();
    const opt1 = document.getElementById('newOpt1').value.trim();
    const opt2 = document.getElementById('newOpt2').value.trim();
    const opt3 = document.getElementById('newOpt3').value.trim();
    const roundKey = document.getElementById('newQRound').value;
    const exp = document.getElementById('newQExp').value.trim();

    if (!qMl || !qEn || !opt0 || !opt1 || !opt2 || !opt3) {
      alert('Please fill in question texts and all 4 options!');
      return;
    }

    const newQ = {
      id: 'custom_' + Date.now(),
      round: roundKey,
      roundName: roundKey === 'r1' ? 'Seerah un-Nabi ﷺ' : roundKey === 'r2' ? 'Holy Quran' : roundKey === 'r3' ? 'Sahaba & History' : roundKey === 'r4' ? 'Islamic Knowledge' : 'Public Special',
      roundNameMl: roundKey === 'r1' ? 'പ്രവാചക ചരിത്രം ﷺ' : roundKey === 'r2' ? 'വിശുദ്ധ ഖുർആൻ' : roundKey === 'r3' ? 'സ്വഹാബത്ത്' : roundKey === 'r4' ? 'ഇസ്ലാമിക വിജ്ഞാനം' : 'പബ്ലിക് ഓഡിയൻസ്',
      category: 'Custom Question',
      difficulty: 'Medium',
      questionEn: qEn,
      questionMl: qMl,
      options: [opt0, opt1, opt2, opt3],
      correctIndex: 0,
      explanationEn: exp || 'Verified Islamic Question for Meelad Fest.',
      explanationMl: exp || 'മീലാദ് ഫെസ്റ്റ് ചോദ്യോത്തര മത്സരം.',
      points: 10
    };

    const currentQs = window.quizEngine.questions;
    currentQs.push(newQ);
    saveQuestionsToStorage(currentQs);
    window.quizEngine.reloadQuestions();
    renderQuestionManagerTable(searchQuestionInput.value);

    // Clear inputs
    document.getElementById('newQMl').value = '';
    document.getElementById('newQEn').value = '';
    document.getElementById('newOpt0').value = '';
    document.getElementById('newOpt1').value = '';
    document.getElementById('newOpt2').value = '';
    document.getElementById('newOpt3').value = '';
    document.getElementById('newQExp').value = '';
    alert('New Question successfully added to bank!');
  });

  exportQuestionsBtn.addEventListener('click', () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(window.quizEngine.questions, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', 'meelad_fest_questions_backup.json');
    dlAnchor.click();
  });

  importQuestionsFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (Array.isArray(parsed) && parsed.length > 0) {
            saveQuestionsToStorage(parsed);
            window.quizEngine.reloadQuestions();
            renderQuestionManagerTable();
            alert(`Successfully imported ${parsed.length} questions!`);
          } else {
            alert('Invalid question bank format.');
          }
        } catch (err) {
          alert('Error parsing JSON file: ' + err.message);
        }
      };
      reader.readAsText(file);
    }
  });

  resetQuestionsBtn.addEventListener('click', () => {
    if (confirm('Reset to original default authentic Islamic question bank?')) {
      saveQuestionsToStorage(DEFAULT_QUESTIONS);
      window.quizEngine.reloadQuestions();
      renderQuestionManagerTable();
    }
  });

  // 16. Keyboard Shortcuts Listeners
  document.addEventListener('keydown', (e) => {
    // If typing inside an input or textarea, ignore hotkeys
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      return;
    }

    const key = e.key.toUpperCase();

    // Option selections (1, 2, 3, 4 or A, B, C, D)
    if (['1', 'A'].includes(key)) {
      window.quizEngine.selectOption(0);
    } else if (['2', 'B'].includes(key)) {
      window.quizEngine.selectOption(1);
    } else if (['3', 'C'].includes(key)) {
      window.quizEngine.selectOption(2);
    } else if (['4', 'D'].includes(key)) {
      window.quizEngine.selectOption(3);
    } 
    // Reveal Answer
    else if (e.code === 'Space' || key === 'ENTER') {
      e.preventDefault();
      window.quizEngine.toggleAnswerReveal();
    }
    // Navigation
    else if (key === 'N' || e.code === 'ArrowRight') {
      window.quizEngine.nextQuestion();
    } else if (key === 'P' || e.code === 'ArrowLeft') {
      window.quizEngine.prevQuestion();
    }
    // Timer Toggle
    else if (key === 'T') {
      if (window.quizEngine.isTimerRunning) {
        window.quizEngine.pauseTimer();
      } else {
        window.quizEngine.startTimer();
      }
    }
    // Lifeline 50:50
    else if (key === '5' || key === 'L') {
      window.quizEngine.useFiftyFifty();
    }
    // Fullscreen
    else if (key === 'F') {
      toggleFullscreen();
    }
    // Mute sound
    else if (key === 'M') {
      soundToggleBtn.click();
    }
    // Escape closes modals
    else if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m));
    }
  });

  // 17. Confetti Physics Particle Animation Engine
  function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#f59e0b', '#fbbf24', '#10b981', '#34d399', '#06b6d4', '#ec4899', '#ffffff'];
    const particles = [];
    const particleCount = 140;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.28,
        opacity: 1
      });
    }

    let animationFrame;
    function updateConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let aliveCount = 0;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotSpeed;
        p.opacity -= 0.008;

        if (p.opacity > 0) {
          aliveCount++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
          ctx.restore();
        }
      });

      if (aliveCount > 0) {
        animationFrame = requestAnimationFrame(updateConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrame);
      }
    }

    updateConfetti();
  }

  // 18. Initial Render
  renderCurrentQuestion();
  renderQuickScores();
});
