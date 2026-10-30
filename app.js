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
    {
      front: "Draw K + Br as an ionic bond.\nWhat ions and formula?",
      back: "K has 1 valence e⁻, Br has 7.\nK gives 1 e⁻ → K⁺ and Br⁻ (8 dots).\nFormula: KBr",
    },
    {
      front: "How many shared electrons in CO₂?",
      back: "2 double bonds × 4 electrons each = 8 shared electrons",
    },
    {
      front: "Ball-and-stick colors:\nred, black, blue, white?",
      back: "red = O\nblack = C\nblue = N\nwhite = H",
    },
    {
      front: "Ionic lattice vs. molecules — melting?",
      back: "Ionic lattice: many neighbors hold each ion → high melting (NaCl ~801 °C).\nMolecules: weak attractions → low melting (ice 0 °C).",
    },
    {
      front: "Name Cu(NO₃)₂ using the flowchart.",
      back: "Metal → ionic. Cu is transition.\n2 NO₃⁻ = −2 → Cu is +2.\ncopper(II) nitrate",
    },
    {
      front: "Mg and O react. Electrons? Formula?",
      back: "Mg gives 2 e⁻.\nFormula: MgO",
    },
    {
      front: "Criss-cross Fe³⁺ and SO₄²⁻.\nFormula and name?",
      back: "Fe₂(SO₄)₃\niron(III) sulfate",
    },
    {
      front: "Name CuO and SF₆.",
      back: "CuO → copper(II) oxide\nSF₆ → sulfur hexafluoride",
    },
    {
      front: "Phosphorus ion? Compound with Na?",
      back: "Group 15 → P³⁻\nNa₃P, sodium phosphide",
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
    {
      front: "OIL RIG — what does it mean?",
      back: "Oxidation Is Loss (of electrons)\nReduction Is Gain (of electrons)\nBoth always happen together.",
    },
    {
      front: "2 Al + 3 Sn²⁺ → 2 Al³⁺ + 3 Sn\nOxidized? Reduced?",
      back: "Al is oxidized (0 → +3, loses e⁻).\nSn²⁺ is reduced (+2 → 0, gains e⁻).",
    },
    {
      front: "Exothermic vs. endothermic?",
      back: "Exothermic: gives off heat, ΔH negative, products lower.\nEndothermic: takes in heat, ΔH positive, products higher.",
    },
    {
      front: "N₂ + O₂ + 181 kJ → 2 NO\nExo or endo? ΔH?",
      back: "Endothermic (heat on reactant side)\nΔH = +181 kJ",
    },
    {
      front: "CH₄ + 2 O₂ → CO₂ + 2 H₂O + 890 kJ\nWrite ΔH. Exo or endo?",
      back: "ΔH = −890 kJ\nExothermic (heat is a product)",
    },
    {
      front: "Pb(NO₃)₂(aq) + 2 KI(aq) → ?\nSolid? Spectators?",
      back: "PbI₂(s) + 2 KNO₃(aq)\nSolid: PbI₂\nSpectators: K⁺ and NO₃⁻",
    },
    {
      front: "Mg + CuCl₂ → MgCl₂ + Cu\nOxidized? Reduced?",
      back: "Mg oxidized (0 → +2)\nCu²⁺ reduced (+2 → 0)",
    },
    {
      front: "Name the type:\nC₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O",
      back: "Combustion\n(fuel + O₂ → CO₂ + H₂O)",
    },
    {
      front: "Balance: __ Al + __ O₂ → __ Al₂O₃",
      back: "4 Al + 3 O₂ → 2 Al₂O₃\n(4 Al and 6 O each side)",
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
    {
      front: "Molecules in 0.250 mol CO₂?",
      back: "0.250 × 6.022 × 10²³ = 1.51 × 10²³ molecules",
    },
    {
      front: "Atoms in 24.0 g carbon?",
      back: "24.0 ÷ 12.011 ≈ 1.998 mol\n× 6.022 × 10²³ ≈ 1.20 × 10²⁴ atoms",
    },
    {
      front: "N₂ + 3 H₂ → 2 NH₃\nmol NH₃ from 4.5 mol H₂?",
      back: "4.5 × (2/3) = 3.0 mol NH₃",
    },
    {
      front: "Burn 7.60 g ethanol.\nGrams O₂ needed?\n(C₂H₅OH + 3 O₂ → …)",
      back: "≈ 15.8 g O₂\n(7.60 ÷ 46.069 → ×3 → ×31.998)",
    },
    {
      front: "2 H₂ + O₂ → 2 H₂O\n3.0 mol H₂ + 2.0 mol O₂\nLimiting? mol H₂O?",
      back: "H₂ limiting → 3.0 mol H₂O\n(O₂ could make 4.0 mol)",
    },
    {
      front: "Theory 50.0 g, actual 42.5 g.\nPercent yield?",
      back: "42.5 ÷ 50.0 × 100% = 85.0%",
    },
    {
      front: "CH₄ + 2 O₂ → CO₂ + 2 H₂O\nΔH = −890 kJ\nHeat from 32.0 g CH₄?",
      back: "≈ 1.78 × 10³ kJ released\n(32.0 ÷ 16.043 × 890)",
    },
    {
      front: "CaO + H₂O → Ca(OH)₂\nΔH = −65.2 kJ\ng CaO for 100. kJ?",
      back: "≈ 86.0 g CaO\n(100 ÷ 65.2 × 56.077)",
    },
    {
      front: "2 Al + 3 Cl₂ → 2 AlCl₃\n2.0 mol Al + 2.0 mol Cl₂\nLimiting? mol AlCl₃?",
      back: "Cl₂ limiting\n2.0 × (2/3) = 1.3 mol AlCl₃",
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

const pictureAlbums = {
  ch6: [
    {
      src: "images/ch6/fig-01.png",
      title: "Ionic Bonds: an Electron Moves",
      blurb:
        "Dots show valence electrons, the outer electrons. In an ionic bond, a metal hands an electron to a nonmetal. Both end up with a full outer shell.",
      tab: "Na is like someone with one coin they don't want. Cl is one coin short of a full set. The coin changes hands, and both are happy.",
    },
    {
      src: "images/ch6/fig-02.png",
      title: "Covalent Bonds: Electrons Are Shared",
      blurb:
        "Two nonmetals both want electrons. Neither can win, so they share pairs. A shared pair is a bond line.",
    },
    {
      src: "images/ch6/fig-03.png",
      title: "Ball-and-Stick Models",
      blurb:
        "Balls are atoms. Sticks are shared bonds. Two sticks side by side mean a double bond. Models show the real shape. Colors: red = O, black = C, blue = N, white = H.",
    },
    {
      src: "images/ch6/fig-04.png",
      title: "The Periodic Table Tells You the Charge",
      blurb:
        "Find the group, read the charge. The color shows the charge for every element in that column.",
      tab: "The columns are like floors in a building. Everyone on the same floor has the same charge.",
    },
    {
      src: "images/ch6/fig-05.png",
      title: "The Criss-Cross Method",
      blurb:
        "Each charge number drops down to the other ion. Keep polyatomic ions in parentheses when you need more than one.",
    },
    {
      src: "images/ch6/fig-06.png",
      title: "Crystal Lattice vs. Separate Molecules",
      blurb:
        "Ionic compounds form a giant repeating grid. Molecular compounds are separate small units.",
      tab: "An ionic lattice is like a checkerboard with no end. Molecules are like separate marbles in a jar.",
    },
    {
      src: "images/ch6/fig-07.png",
      title: "Naming Flowchart",
      blurb:
        "Follow the arrows from the top. Ask: metal or not? Then: transition metal? Then: polyatomic ion?",
    },
    {
      src: "images/ch6/fig-08.png",
      title: "Polyatomic Ions as Pictures",
      blurb:
        "A polyatomic ion is a group of atoms that carries one charge together. The brackets show the group. The number outside is the charge of the whole group.",
      tab: "A polyatomic ion is like a band. It moves, gets named, and gets counted as one unit.",
    },
  ],
  ch7: [
    {
      src: "images/ch7/fig-01.png",
      title: "Combination (Synthesis)",
      blurb:
        "A + B → AB. Two or more things join into one, like Lego pieces snapping together.",
    },
    {
      src: "images/ch7/fig-02.png",
      title: "Decomposition",
      blurb:
        "AB → A + B. One thing breaks into simpler parts, like taking a Lego model apart.",
    },
    {
      src: "images/ch7/fig-03.png",
      title: "Single Replacement",
      blurb:
        "A + BC → AC + B. One element kicks another out of its compound, like someone cutting in at a dance.",
    },
    {
      src: "images/ch7/fig-04.png",
      title: "Double Replacement",
      blurb: "AB + CD → AD + CB. Two couples swap partners at a dance.",
    },
    {
      src: "images/ch7/fig-05.png",
      title: "Combustion",
      blurb:
        "Fuel + O₂ → CO₂ + H₂O. A fuel burns in oxygen and gives off heat and light, like a gas stove.",
      tab: "Tip: Combination ends with ONE product. Decomposition starts with ONE reactant. Single replacement has an element alone on each side. Double replacement has two compounds on each side. Combustion has O₂ in and CO₂ + H₂O out.",
    },
    {
      src: "images/ch7/fig-06.png",
      title: "A Precipitate Forming",
      blurb:
        "Two clear solutions mix. Two ions find each other and lock into a solid. The solid sinks. That solid is the precipitate.",
      tab: "Like sand settling to the bottom of a glass of water. Or like snow forming in a cloud and falling.",
    },
    {
      src: "images/ch7/fig-07.png",
      title: "Balancing, Drawn Out",
      blurb:
        "Balancing means the same atoms show up on both sides. A bar chart of atom counts makes a mismatch easy to see.",
    },
    {
      src: "images/ch7/fig-08.png",
      title: "Oxidation and Reduction (Redox)",
      blurb:
        "Electrons jump from one atom to another. The atom that loses electrons is oxidized. The atom that gains them is reduced. Both always happen together. Memory trick: OIL RIG.",
      tab: "Electrons are like a ball being passed. One player throws (oxidized), one catches (reduced). You can't have a throw without a catch.",
    },
    {
      src: "images/ch7/fig-09.png",
      title: "Exothermic vs. Endothermic",
      blurb:
        "Left: products sit lower, so energy is given off (exothermic). Right: products sit higher, so energy is taken in (endothermic).",
      tab: "Exothermic is like a ball rolling downhill: it gives off energy. Endothermic is pushing the ball uphill: you must put energy in.",
    },
  ],
  stoich: [
    {
      src: "images/stoich/fig-01.png",
      title: "A Mole Is a Counting Word",
      blurb: "A dozen counts eggs. A mole counts atoms. Both are just a set number.",
    },
    {
      src: "images/stoich/fig-02.png",
      title: "The Mole Map",
      blurb:
        "Start at what you are given. Follow arrows to what you want. You always pass through moles.",
      tab: "Moles are like the central train station. To get from one town to another, you go through the station. Tip: Particles and grams never connect directly — go to moles first.",
    },
    {
      src: "images/stoich/fig-03.png",
      title: "The Recipe Analogy",
      blurb:
        "A balanced equation is a recipe. The coefficients are the amounts.",
    },
    {
      src: "images/stoich/fig-04.png",
      title: "Mole Ratios as Particle Pictures",
      blurb:
        "Left: one batch. Right: a double batch. The ratio never changes.",
    },
    {
      src: "images/stoich/fig-05.png",
      title: "Limiting Reactant: Hot Dogs and Buns",
      blurb:
        "Whatever runs out first limits how much you can make. Turn each reactant into moles, see how much product each could make — the smaller answer wins.",
    },
    {
      src: "images/stoich/fig-06.png",
      title: "Burning Ethanol Worked Example",
      blurb:
        "C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O. Start from grams of ethanol, go through moles, then find grams of O₂, H₂O, and CO₂.",
      tab: "Tip: Mass check — 7.60 g + 15.8 g in ≈ 8.92 g + 14.5 g out (23.4 g each side). Mass is conserved!",
    },
    {
      src: "images/stoich/fig-07.png",
      title: "Percent Yield",
      blurb:
        "Percent yield = actual ÷ theoretical × 100%. Theoretical comes from stoichiometry. Actual is what you weighed in lab.",
      tab: "A recipe says 24 cookies. You get 18 because some burned. 18 ÷ 24 = 75% yield.",
    },
    {
      src: "images/stoich/fig-08.png",
      title: "Enthalpy Stoichiometry: kJ per Mole",
      blurb:
        "ΔH in a balanced equation is the heat for the amounts as written. Treat it like one more ratio: kJ per mole. Grams → moles → kJ.",
      tab: "Tip: Negative ΔH means heat is released. Say “released” and give the size, or write q = −795 kJ for the system.",
    },
  ],
};

let currentMode = "flashcards";
let currentSection = "stoich";
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
const pictureTitle = document.getElementById("pictureTitle");
const pictureBlurb = document.getElementById("pictureBlurb");
const pictureTab = document.getElementById("pictureTab");
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
  deckLabel.textContent = sections[currentSection].pictureLabel;

  if (pics.length === 0) {
    pictureImage.hidden = true;
    pictureImage.removeAttribute("src");
    pictureEmpty.hidden = false;
    pictureActions.hidden = true;
    pictureBlurb.hidden = true;
    pictureBlurb.textContent = "";
    pictureTab.hidden = true;
    pictureTab.textContent = "";
    pictureTitle.textContent = "No pictures";
    progressEl.textContent = "0 of 0";
    return;
  }

  if (pictureIndex >= pics.length) {
    pictureIndex = 0;
  }

  const pic = pics[pictureIndex];
  pictureEmpty.hidden = true;
  pictureImage.hidden = false;
  pictureImage.src = pic.src;
  pictureImage.alt = pic.title;
  pictureTitle.textContent = pic.title;
  pictureActions.hidden = false;
  progressEl.textContent = `${pictureIndex + 1} of ${pics.length}`;

  if (pic.blurb) {
    pictureBlurb.hidden = false;
    pictureBlurb.textContent = pic.blurb;
  } else {
    pictureBlurb.hidden = true;
    pictureBlurb.textContent = "";
  }

  if (pic.tab) {
    pictureTab.hidden = false;
    pictureTab.textContent = pic.tab;
  } else {
    pictureTab.hidden = true;
    pictureTab.textContent = "";
  }
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
  document.body.classList.toggle("mode-pictures", mode === "pictures");
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


