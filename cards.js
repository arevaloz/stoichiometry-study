const DECKS = {
  concepts: {
    label: "Core ideas",
    cards: [
      {
        front: "What does “balancing” an equation mean?",
        back: "Atoms in = atoms out.\nAtoms are never made or destroyed — they rearrange (conservation of mass).",
      },
      {
        front: "Coefficient vs. subscript — what’s the difference?",
        back: "Coefficient = big number in front (how many molecules). You change this to balance.\nSubscript = small number in the formula (atoms inside one molecule). Never change it.",
      },
      {
        front: "Why can’t you balance H₂O by writing H₂O₂?",
        back: "Changing a subscript changes the substance.\nH₂O is water; H₂O₂ is hydrogen peroxide.\nTo get more O, write 2 H₂O instead.",
      },
      {
        front: "Name the 5 steps for balancing with an atom-count table.",
        back: "1) Write correct formulas\n2) Make an atom-count table\n3) Fix one mismatched element with a coefficient\n4) Update & repeat\n5) Reduce to lowest whole-number ratio",
      },
      {
        front: "Balancing tricks: what should you save for last?",
        back: "Save H and O for last — they show up in many compounds.\nBalance metals and other atoms first.",
      },
      {
        front: "When can you treat a polyatomic ion as one unit?",
        back: "When the ion (like SO₄²⁻ or PO₄³⁻) appears on both sides unchanged.\nCount it as one block, not separate atoms.",
      },
      {
        front: "What is the even–odd fix in combustion?",
        back: "If O atoms on the right are odd and you need O₂, double all coefficients and try again.",
      },
      {
        front: "What is a mole?",
        back: "A giant count: 6.022 × 10²³ particles (Avogadro’s number).\nLike a dozen, but much bigger.",
      },
      {
        front: "What is molar mass?",
        back: "The mass of one mole of a substance (g/mol).\nAdd atomic masses from the periodic table.",
      },
      {
        front: "What is a mole ratio?",
        back: "The coefficients in a balanced equation tell how many moles of one substance relate to another.\nExample: 4 Al + 3 O₂ → 2 Al₂O₃",
      },
      {
        front: "Draw the mole map in words.",
        back: "g A ÷ molar mass → mol A × mole ratio → mol B × molar mass → g B\nNever jump grams of A straight to grams of B.",
      },
      {
        front: "What is the limiting reactant?",
        back: "The reactant that runs out first.\nIt decides how much product you can make; the other is in excess.",
      },
      {
        front: "Percent yield formula?",
        back: "(actual ÷ theoretical) × 100%\nTheoretical = math prediction; actual = what you collected.",
      },
      {
        front: "List the diatomic elements (HOFBrINCl).",
        back: "H₂ N₂ O₂ F₂ Cl₂ Br₂ I₂",
      },
    ],
  },
  balancing: {
    label: "Balance these",
    cards: [
      {
        front: "Balance: __H₂ + __Cl₂ → __HCl",
        back: "1, 1, 2\nH₂ + Cl₂ → 2 HCl",
      },
      {
        front: "Balance: __Fe + __O₂ → __Fe₂O₃",
        back: "4, 3, 2\n4 Fe + 3 O₂ → 2 Fe₂O₃",
      },
      {
        front: "Balance: __Al + __CuSO₄ → __Al₂(SO₄)₃ + __Cu",
        back: "2, 3, 1, 3\n2 Al + 3 CuSO₄ → Al₂(SO₄)₃ + 3 Cu\n(Treat SO₄ as one unit.)",
      },
      {
        front: "Balance: __C₃H₈ + __O₂ → __CO₂ + __H₂O",
        back: "1, 5, 3, 4\nC₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O",
      },
      {
        front: "Balance: __C₄H₁₀ + __O₂ → __CO₂ + __H₂O",
        back: "2, 13, 8, 10\n2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O\n(Odd O → double everything.)",
      },
      {
        front: "Balance: __Ba(NO₃)₂ + __Na₂SO₄ → __BaSO₄ + __NaNO₃",
        back: "1, 1, 1, 2\nBa(NO₃)₂ + Na₂SO₄ → BaSO₄ + 2 NaNO₃",
      },
      {
        front: "Worked: N₂ + H₂ → NH₃. What’s the balanced equation?",
        back: "N₂ + 3 H₂ → 2 NH₃\nFix N first (2 NH₃), then H (3 H₂).",
      },
      {
        front: "Worked: Al + Cl₂ → AlCl₃. What’s balanced?",
        back: "2 Al + 3 Cl₂ → 2 AlCl₃\nCl needs LCM of 2 and 3 → 6.",
      },
    ],
  },
  stoichiometry: {
    label: "Stoichiometry practice",
    cards: [
      {
        front: "N₂ + 3 H₂ → 2 NH₃\nHow many moles of NH₃ from 4.0 mol H₂?",
        back: "2.7 mol NH₃\n4.0 × (2/3) = 2.67 → 2.7 mol",
      },
      {
        front: "2 Mg + O₂ → 2 MgO\nHow many moles of MgO from 12.0 g Mg?\n(Mg = 24.305)",
        back: "0.494 mol MgO\n12.0 ÷ 24.305 = 0.4937 mol Mg × (2/2) = 0.494 mol",
      },
      {
        front: "CaCO₃ → CaO + CO₂\nHow many grams of CO₂ from 2.50 mol CaCO₃?\n(CO₂ ≈ 44.009 g/mol)",
        back: "1.10 × 10² g CO₂\n2.50 × 44.009 = 110. g (3 sig figs)",
      },
      {
        front: "Pb(NO₃)₂ + 2 NaI → PbI₂ + 2 NaNO₃\nGrams of PbI₂ from 15.0 g NaI?",
        back: "23.1 g PbI₂\ng → mol NaI → mol PbI₂ (1/2) → g PbI₂",
      },
      {
        front: "N₂ + 3 H₂ → 2 NH₃\n28.0 g N₂ and 9.00 g H₂: which is limiting, and grams of NH₃?",
        back: "N₂ is limiting; 34.0 g NH₃\nConvert both to moles, compare to the 1:3 ratio.",
      },
      {
        front: "From the problem above, you collect 30.0 g NH₃.\nWhat is the percent yield?",
        back: "88.1%\n30.0 ÷ 34.04 × 100% = 88.1%",
      },
      {
        front: "You are given grams of A and asked for grams of B.\nWhich mole-map steps?",
        back: "All three:\n1) g A → mol A\n2) mole ratio → mol B\n3) mol B → g B",
      },
      {
        front: "You are given moles of A and asked for moles of B.\nWhich steps?",
        back: "Step 2 only — the mole ratio.",
      },
    ],
  },
  mistakes: {
    label: "Common mistakes",
    cards: [
      {
        front: "Mistake: changing subscripts to balance.\nWhat’s the fix?",
        back: "Only change coefficients.\nSubscripts change the chemical identity.",
      },
      {
        front: "Mistake: forgetting diatomic elements.\nWhich ones?",
        back: "H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ (HOFBrINCl)",
      },
      {
        front: "Mistake: counting Ca₃(PO₄)₂ wrong.\nHow many P and O?",
        back: "2 P and 8 O\nThe 2 outside the parentheses multiplies everything inside.",
      },
      {
        front: "Mistake: going grams → grams without moles.\nWhat’s wrong?",
        back: "The only bridge between substances is the mole ratio.\nAlways pass through moles.",
      },
      {
        front: "Mistake: flipping the mole ratio.\nWhat’s the rule?",
        back: "Want on top, have on bottom:\nmol WANT / mol HAVE from the coefficients.",
      },
      {
        front: "Mistake: using an unbalanced equation for stoichiometry.",
        back: "Balance first.\nMole ratios only work from a balanced equation.",
      },
    ],
  },
};
