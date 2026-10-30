const decks = {
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
  concepts: "Concepts",
  balancing: "Balancing",
  stoichiometry: "Stoichiometry",
};

let currentDeck = "concepts";
let index = 0;
let showingBack = false;
let order = [];

const cardEl = document.getElementById("card");
const cardText = document.getElementById("cardText");
const cardHint = document.getElementById("cardHint");
const progressEl = document.getElementById("progress");
const deckLabel = document.getElementById("deckLabel");
const actions = document.getElementById("actions");
const help = document.getElementById("help");
const againBtn = document.getElementById("againBtn");
const gotItBtn = document.getElementById("gotItBtn");

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

function render() {
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

function flipCard() {
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

function setDeck(name) {
  currentDeck = name;
  document.querySelectorAll(".deck").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.deck === name);
  });
  resetOrder();
  render();
}

cardEl.addEventListener("click", flipCard);
againBtn.addEventListener("click", () => nextCard(false));
gotItBtn.addEventListener("click", () => nextCard(true));

document.querySelectorAll(".deck").forEach((btn) => {
  btn.addEventListener("click", () => setDeck(btn.dataset.deck));
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    flipCard();
  } else if (showingBack && (event.key === "1" || event.key === "a")) {
    nextCard(false);
  } else if (showingBack && (event.key === "2" || event.key === "g")) {
    nextCard(true);
  }
});

resetOrder();
render();
