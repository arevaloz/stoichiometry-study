const decks = {
  compounds: [
    {
      front: "What is an ion?",
      back: "An atom that gained or lost electrons.\nLose e⁻ → positive (cation).\nGain e⁻ → negative (anion).",
    },
    {
      front: "Metals vs. nonmetals — which ions?",
      back: "Metals lose electrons → cations (+).\nNonmetals gain electrons → anions (−).",
    },
    {
      front: "Group charges:\n1, 2, 13, 15, 16, 17?",
      back: "+1, +2, +3, −3, −2, −1\nGroup 18: 0 (no ions)",
    },
    {
      front: "What ion does sulfur form?",
      back: "Group 16 → gains 2 electrons → S²⁻ (sulfide)",
    },
    {
      front: "Ionic vs. molecular bond?",
      back: "Ionic: metal + nonmetal (electrons stolen/transferred).\nMolecular: two nonmetals share electrons.",
    },
    {
      front: "NaCl and H₂O — ionic or molecular?",
      back: "NaCl: metal + nonmetal → ionic.\nH₂O: H and O both nonmetals → molecular.",
    },
    {
      front: "Criss-cross: Al³⁺ and O²⁻",
      back: "Al₂O₃\nCheck: 2(+3) + 3(−2) = 0 ✓",
    },
    {
      front: "Criss-cross: Mg²⁺ and O²⁻",
      back: "Mg₂O₂ → reduce → MgO",
    },
    {
      front: "Formula for calcium nitrate?",
      back: "Ca(NO₃)₂\nUse parentheses for more than one polyatomic ion.",
    },
    {
      front: "Name NaCl, CaF₂, K₂SO₄",
      back: "sodium chloride\ncalcium fluoride\npotassium sulfate",
    },
    {
      front: "Name Fe₂O₃ and FeO",
      back: "Fe₂O₃ → iron(III) oxide\nFeO → iron(II) oxide\n(Roman numerals for transition metals)",
    },
    {
      front: "Name CuCl₂",
      back: "copper(II) chloride\n2 Cl⁻ = −2 → Cu is +2",
    },
    {
      front: "Polyatomic: ammonium, hydroxide, nitrate, sulfate",
      back: "NH₄⁺\nOH⁻\nNO₃⁻\nSO₄²⁻",
    },
    {
      front: "Polyatomic: carbonate, phosphate, acetate, cyanide",
      back: "CO₃²⁻\nPO₄³⁻\nC₂H₃O₂⁻\nCN⁻",
    },
    {
      front: "-ate vs. -ite tip?",
      back: "-ate has one more oxygen than -ite.\nnitrate NO₃⁻, nitrite NO₂⁻\nAmmonium is the only common positive polyatomic.",
    },
    {
      front: "Name CCl₄ and N₂O₃",
      back: "carbon tetrachloride\ndinitrogen trioxide\n(Prefixes for molecular compounds)",
    },
    {
      front: "Molecular prefixes 1–5?",
      back: "mono, di, tri, tetra, penta\n(Don’t use mono on the first element)",
    },
    {
      front: "Ionic or molecular?\nKBr, SO₂, NH₄Cl",
      back: "KBr → ionic (metal)\nSO₂ → molecular (nonmetals)\nNH₄Cl → ionic (ammonium)",
    },
    {
      front: "Write formula for aluminum oxide",
      back: "Al₂O₃",
    },
    {
      front: "Name FeCl₃ and N₂O₅",
      back: "iron(III) chloride\ndinitrogen pentoxide",
    },
    {
      front: "Is CO₂ ionic or molecular?",
      back: "Molecular (two nonmetals)",
    },
    {
      front: "Formula for calcium phosphate?",
      back: "Ca₃(PO₄)₂",
    },
  ],
  reactions: [
    {
      front: "What do (s), (l), (g), (aq) mean?",
      back: "(s) solid\n(l) liquid\n(g) gas\n(aq) aqueous — dissolved in water",
    },
    {
      front: "Balance:\n__ CH₄ + __ O₂ → __ CO₂ + __ H₂O",
      back: "CH₄ + 2 O₂ → CO₂ + 2 H₂O",
    },
    {
      front: "Balance:\n__ C₃H₈ + __ O₂ → __ CO₂ + __ H₂O",
      back: "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O",
    },
    {
      front: "Name the 5 reaction types",
      back: "Synthesis\nDecomposition\nSingle replacement\nDouble replacement\nCombustion",
    },
    {
      front: "Synthesis pattern + example",
      back: "A + B → AB\n2 Na + Cl₂ → 2 NaCl",
    },
    {
      front: "Decomposition pattern + example",
      back: "AB → A + B\n2 H₂O → 2 H₂ + O₂",
    },
    {
      front: "Single replacement pattern + example",
      back: "A + BC → AC + B\nZn + CuSO₄ → ZnSO₄ + Cu",
    },
    {
      front: "Double replacement pattern + example",
      back: "AB + CD → AD + CB\nAgNO₃ + NaCl → AgCl + NaNO₃",
    },
    {
      front: "Combustion pattern?",
      back: "fuel + O₂ → CO₂ + H₂O\nLook for O₂ in, CO₂ + H₂O out.",
    },
    {
      front: "What type is 2 KClO₃ → 2 KCl + 3 O₂?",
      back: "Decomposition\n(one reactant splits into products)",
    },
    {
      front: "What type is Zn + 2 HCl → ZnCl₂ + H₂?",
      back: "Single replacement",
    },
    {
      front: "What is a precipitate?",
      back: "A solid that forms when two solutions mix\nand falls out of the liquid.",
    },
    {
      front: "AgNO₃(aq) + NaCl(aq) → ?\nWhat is the precipitate?",
      back: "AgCl(s) + NaNO₃(aq)\nAgCl is the precipitate.",
    },
    {
      front: "Which always dissolve?\n(Group 1, NH₄⁺, nitrate, acetate)",
      back: "Usually dissolve — no common exceptions.",
    },
    {
      front: "Cl⁻ dissolves except with…?",
      back: "Ag⁺, Pb²⁺, Hg₂²⁺ → solid",
    },
    {
      front: "How many atoms in 2.00 mol carbon?",
      back: "2.00 × 6.022 × 10²³ = 1.20 × 10²⁴ atoms",
    },
    {
      front: "Molar mass of H₂O?",
      back: "2(1.008) + 15.999 = 18.015 g/mol",
    },
    {
      front: "Molar mass of Ca(OH)₂?",
      back: "40.078 + 2(15.999) + 2(1.008) = 74.092 g/mol",
    },
    {
      front: "3 stoichiometry steps?",
      back: "1) g → mol (÷ molar mass)\n2) mole ratio\n3) mol → g (× molar mass)",
    },
    {
      front: "10.0 g H₂ → ? g H₂O\n2 H₂ + O₂ → 2 H₂O",
      back: "≈ 89.4 g H₂O\n(g→mol→ratio→g)",
    },
    {
      front: "4.0 mol H₂ + 3.0 mol O₂\nLimiting? Product moles H₂O?",
      back: "H₂ limiting → 4.0 mol H₂O\n1.0 mol O₂ left over",
    },
    {
      front: "Theory 72.06 g water, collect 60.0 g.\nPercent yield?",
      back: "60.0 ÷ 72.06 × 100% = 83.3%",
    },
    {
      front: "Balance: __ H₂ + __ O₂ → __ H₂O",
      back: "2 H₂ + O₂ → 2 H₂O",
    },
    {
      front: "Molar mass of CO₂?\n(C=12.011, O=15.999)",
      back: "44.009 g/mol (about 44.01)",
    },
    {
      front: "Moles in 36.0 g H₂O?",
      back: "36.0 ÷ 18.015 = 2.00 mol",
    },
  ],
  concepts: [
    {
      front: "What does balancing an equation mean?",
      back: "Atoms in = atoms out.\nAtoms rearrange; they are never made or destroyed (conservation of mass).",
    },
    {
      front: "Coefficient vs. subscript — which can you change?",
      back: "Change coefficients only (how many molecules).\nNever change subscripts — that changes the substance.\nH₂O → H₂O₂ is peroxide, not more water.",
    },
    {
      front: "What is a mole?",
      back: "A giant count, like a dozen.\n1 mol = 6.022 × 10²³ particles (Avogadro's number).",
    },
    {
      front: "What is molar mass?",
      back: "The mass of one mole of a substance (g/mol).\nAdd atomic masses from the periodic table.",
    },
    {
      front: "What is the mole ratio?",
      back: "The recipe from coefficients in a balanced equation.\nExample: 4 Al + 3 O₂ → 2 Al₂O₃\n→ 4 mol Al : 3 mol O₂ : 2 mol Al₂O₃",
    },
    {
      front: "Draw the mole map in words.",
      back: "g A → ÷ molar mass → mol A\n→ × mole ratio → mol B\n→ × molar mass → g B\nNever jump grams A → grams B.",
    },
    {
      front: "What is the limiting reactant?",
      back: "The reactant that runs out first.\nIt decides how much product you get.\n(Like 12 hot dogs + 8 buns → only 8 served.)",
    },
    {
      front: "Percent yield formula?",
      back: "Percent yield = (actual ÷ theoretical) × 100%\nTheoretical = math prediction\nActual = what you collected",
    },
    {
      front: "Name the diatomic elements.",
      back: "H₂ N₂ O₂ F₂ Cl₂ Br₂ I₂\nMemory aid: HOFBrINCl",
    },
    {
      front: "Common mistake: grams → grams without moles",
      back: "Always pass through moles.\nThe only bridge between substances is the mole ratio.",
    },
  ],
  balancing: [
    {
      front: "Balance:\n__ H₂ + __ Cl₂ → __ HCl",
      back: "1, 1, 2\nH₂ + Cl₂ → 2 HCl",
    },
    {
      front: "Balance:\n__ Fe + __ O₂ → __ Fe₂O₃",
      back: "4, 3, 2\n4 Fe + 3 O₂ → 2 Fe₂O₃",
    },
    {
      front: "Balance:\n__ Al + __ CuSO₄ → __ Al₂(SO₄)₃ + __ Cu",
      back: "2, 3, 1, 3\n2 Al + 3 CuSO₄ → Al₂(SO₄)₃ + 3 Cu\n(Treat SO₄ as one unit.)",
    },
    {
      front: "Balance:\n__ C₃H₈ + __ O₂ → __ CO₂ + __ H₂O",
      back: "1, 5, 3, 4\nC₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O",
    },
    {
      front: "Balance:\n__ C₄H₁₀ + __ O₂ → __ CO₂ + __ H₂O",
      back: "2, 13, 8, 10\n2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O\n(Even-odd fix: double when O is odd.)",
    },
    {
      front: "Balance:\n__ Ba(NO₃)₂ + __ Na₂SO₄ → __ BaSO₄ + __ NaNO₃",
      back: "1, 1, 1, 2\nBa(NO₃)₂ + Na₂SO₄ → BaSO₄ + 2 NaNO₃",
    },
    {
      front: "Worked tip: N₂ + H₂ → NH₃",
      back: "Fix N: 2 NH₃\nFix H: 3 H₂\nN₂ + 3 H₂ → 2 NH₃",
    },
    {
      front: "Balancing tricks — name three.",
      back: "1. Save H and O for last\n2. Count polyatomic ions as one block\n3. Odd O with O₂ → double everything\n4. Reduce to lowest whole numbers",
    },
  ],
  stoichiometry: [
    {
      front: "N₂ + 3 H₂ → 2 NH₃\nHow many moles NH₃ from 4.0 mol H₂?",
      back: "4.0 × (2/3) = 2.67 → 2.7 mol NH₃\n(Step 2 only: mole ratio)",
    },
    {
      front: "2 Mg + O₂ → 2 MgO\nMoles of MgO from 12.0 g Mg?\n(Mg = 24.305)",
      back: "12.0 ÷ 24.305 = 0.4937 mol Mg\n× (2/2) = 0.494 mol MgO",
    },
    {
      front: "CaCO₃ → CaO + CO₂\nGrams CO₂ from 2.50 mol CaCO₃?",
      back: "2.50 × (1/1) × 44.009 ≈ 110 g\n→ 1.10 × 10² g CO₂",
    },
    {
      front: "Pb(NO₃)₂ + 2 NaI → PbI₂ + 2 NaNO₃\nGrams PbI₂ from 15.0 g NaI?",
      back: "15.0 ÷ 149.894 ≈ 0.100 mol NaI\n× (1/2) × 461.008 ≈ 23.1 g PbI₂",
    },
    {
      front: "N₂ + 3 H₂ → 2 NH₃\n28.0 g N₂ and 9.00 g H₂.\nLimiting? Grams NH₃?",
      back: "N₂ limiting; 34.0 g NH₃\nN₂ needs less H₂ than available.",
    },
    {
      front: "From the NH₃ problem, you collect 30.0 g.\nPercent yield?",
      back: "30.0 ÷ 34.04 × 100% ≈ 88.1%",
    },
    {
      front: "Given moles A, asked moles B — which steps?",
      back: "Step 2 only (mole ratio).",
    },
    {
      front: "Given grams A, asked grams B — which steps?",
      back: "Steps 1 + 2 + 3\ng → mol → ratio → mol → g",
    },
  ],
};

const deckNames = {
  compounds: "Ch 6 Compounds",
  reactions: "Ch 7 Reactions",
  concepts: "Concepts",
  balancing: "Balancing",
  stoichiometry: "Practice",
};

const sections = {
  ch6: {
    deck: "compounds",
    showSubDecks: false,
    pictureLabel: "Ch 6 Pictures",
  },
  ch7: {
    deck: "reactions",
    showSubDecks: false,
    pictureLabel: "Ch 7 Pictures",
  },
  stoich: {
    deck: "concepts",
    showSubDecks: true,
    pictureLabel: "Stoichiometry Pictures",
  },
};

// Add picture paths here later, e.g. { src: "images/ch6/ions.png", title: "Ions" }
const pictureAlbums = {
  ch6: [],
  ch7: [],
  stoich: [],
};

let currentMode = "flashcards";
let currentSection = "ch6";
let currentDeck = "compounds";
let index = 0;
let showingBack = false;
let order = [];
let pictureIndex = 0;

const modeSelect = document.getElementById("modeSelect");
const flashcardsPanel = document.getElementById("flashcardsPanel");
const picturesPanel = document.getElementById("picturesPanel");
const cardEl = document.getElementById("card");
const cardText = document.getElementById("cardText");
const cardHint = document.getElementById("cardHint");
const progressEl = document.getElementById("progress");
const deckLabel = document.getElementById("deckLabel");
const actions = document.getElementById("actions");
const help = document.getElementById("help");
const againBtn = document.getElementById("againBtn");
const gotItBtn = document.getElementById("gotItBtn");
const subDecks = document.getElementById("subDecks");
const pictureImage = document.getElementById("pictureImage");
const pictureEmpty = document.getElementById("pictureEmpty");
const pictureActions = document.getElementById("pictureActions");
const pictureHelp = document.getElementById("pictureHelp");
const prevPicBtn = document.getElementById("prevPicBtn");
const nextPicBtn = document.getElementById("nextPicBtn");

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function resetOrder() {
  order = shuffle(decks[currentDeck].map((_, i) => i));
  index = 0;
  showingBack = false;
}

function currentCard() {
  return decks[currentDeck][order[index]];
}

function currentPictures() {
  return pictureAlbums[currentSection] || [];
}

function renderFlashcards() {
  const card = currentCard();
  const total = order.length;
  const side = showingBack ? card.back : card.front;

  cardText.textContent = side;
  cardHint.textContent = showingBack ? "Answer" : "Tap to flip";
  cardEl.classList.toggle("is-back", showingBack);
  progressEl.textContent = `Card ${index + 1} of ${total}`;
  deckLabel.textContent = deckNames[currentDeck];
  actions.hidden = !showingBack;
  help.textContent = showingBack
    ? "Did you know it before flipping?"
    : "Flip the card, then mark whether you knew it.";
}

function renderPictures() {
  const pics = currentPictures();
  const section = sections[currentSection];
  deckLabel.textContent = section.pictureLabel;

  if (pics.length === 0) {
    pictureImage.hidden = true;
    pictureImage.removeAttribute("src");
    pictureEmpty.hidden = false;
    pictureActions.hidden = true;
    progressEl.textContent = "0 pictures";
    pictureHelp.textContent = "Add pictures for this chapter and I’ll hook them up.";
    return;
  }

  if (pictureIndex >= pics.length) {
    pictureIndex = 0;
  }

  const pic = pics[pictureIndex];
  pictureEmpty.hidden = true;
  pictureImage.hidden = false;
  pictureImage.src = pic.src;
  pictureImage.alt = pic.title || `Picture ${pictureIndex + 1}`;
  pictureActions.hidden = false;
  progressEl.textContent = `Picture ${pictureIndex + 1} of ${pics.length}`;
  pictureHelp.textContent = pic.title
    ? pic.title
    : "Use Previous / Next to look through the set.";
}

function render() {
  if (currentMode === "pictures") {
    renderPictures();
  } else {
    renderFlashcards();
  }
}

function flipCard() {
  if (currentMode !== "flashcards") {
    return;
  }
  showingBack = !showingBack;
  render();
}

function nextCard(knewIt) {
  if (knewIt) {
    order.splice(index, 1);
    if (order.length === 0) {
      resetOrder();
      help.textContent = "Deck complete — shuffled again. Nice work!";
    } else if (index >= order.length) {
      index = 0;
    }
  } else {
    index = (index + 1) % order.length;
  }
  showingBack = false;
  render();
}

function stepPicture(delta) {
  const pics = currentPictures();
  if (pics.length === 0) {
    return;
  }
  pictureIndex = (pictureIndex + delta + pics.length) % pics.length;
  render();
}

function setDeck(name) {
  currentDeck = name;
  document.querySelectorAll(".deck").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.deck === name);
  });
  resetOrder();
  render();
}

function setSection(name) {
  currentSection = name;
  const section = sections[name];
  pictureIndex = 0;

  document.querySelectorAll(".side-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === name);
  });

  const showSub =
    currentMode === "flashcards" && section.showSubDecks;
  subDecks.hidden = !showSub;

  if (currentMode === "flashcards") {
    setDeck(section.deck);
  } else {
    render();
  }
}

function setMode(mode) {
  currentMode = mode;
  modeSelect.value = mode;
  flashcardsPanel.hidden = mode !== "flashcards";
  picturesPanel.hidden = mode !== "pictures";
  setSection(currentSection);
}

cardEl.addEventListener("click", flipCard);
againBtn.addEventListener("click", () => nextCard(false));
gotItBtn.addEventListener("click", () => nextCard(true));
prevPicBtn.addEventListener("click", () => stepPicture(-1));
nextPicBtn.addEventListener("click", () => stepPicture(1));
modeSelect.addEventListener("change", (event) => setMode(event.target.value));

document.querySelectorAll(".side-tab").forEach((btn) => {
  btn.addEventListener("click", () => setSection(btn.dataset.section));
});

document.querySelectorAll(".deck").forEach((btn) => {
  btn.addEventListener("click", () => setDeck(btn.dataset.deck));
});

document.addEventListener("keydown", (event) => {
  if (currentMode === "pictures") {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepPicture(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      stepPicture(1);
    }
    return;
  }

  if (event.code === "Space") {
    event.preventDefault();
    flipCard();
  } else if (showingBack && (event.key === "1" || event.key === "a")) {
    nextCard(false);
  } else if (showingBack && (event.key === "2" || event.key === "g")) {
    nextCard(true);
  }
});

setMode("flashcards");


