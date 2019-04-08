// Indices: I1_Scr,I2_Scr,I3_Scr,I4_Scr,I5_Scr,I6_Scr,I7_Scr,I8_Scr,I9_Scr,I10_Scr,Avg_Scr

const IndicatorMap = {
    "Burkina Faso":
        { "I1_Scr": 1, "I2_Scr": 1, "I3_Scr": 1, "I4_Scr": 1, "I5_Scr": 1, "I6_Scr": 1, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 1, "I10_Scr": 2, "Avg_Scr": 1.4 },
    "Cameroon":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 3, "I5_Scr": 2, "I6_Scr": 2, "I7_Scr": 4, "I8_Scr": 3, "I9_Scr": 3, "I10_Scr": 3, "Avg_Scr": 2.9 },
    "Cote d'Ivoire":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 3, "I5_Scr": 3, "I6_Scr": 3, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 2, "I10_Scr": 3, "Avg_Scr": 2.8 },
    "Liberia":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 2, "I5_Scr": 2, "I6_Scr": 2, "I7_Scr": 3, "I8_Scr": 1, "I9_Scr": 1, "I10_Scr": 3, "Avg_Scr": 2.3 },
    "Madagascar":
        { "I1_Scr": 3, "I2_Scr": 4, "I3_Scr": 2, "I4_Scr": 3, "I5_Scr": 3, "I6_Scr": 3, "I7_Scr": 3, "I8_Scr": 3, "I9_Scr": 3, "I10_Scr": 3, "Avg_Scr": 3.0 },
    "Mozambique":
        { "I1_Scr": 1, "I2_Scr": 2, "I3_Scr": 1, "I4_Scr": 1, "I5_Scr": 3, "I6_Scr": 1, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 1, "I10_Scr": 2, "Avg_Scr": 1.7 },
    "Rwanda":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 2, "I4_Scr": 4, "I5_Scr": 4, "I6_Scr": 2, "I7_Scr": 4, "I8_Scr": 1, "I9_Scr": 2, "I10_Scr": 3, "Avg_Scr": 2.8 },
    "Zambia":
        { "I1_Scr": 2, "I2_Scr": 1, "I3_Scr": 3, "I4_Scr": 4, "I5_Scr": 2, "I6_Scr": 1, "I7_Scr": 2, "I8_Scr": 2, "I9_Scr": 2, "I10_Scr": 2, "Avg_Scr": 2.1 }
};
export default IndicatorMap;



// const IndicatorMap = new Map([
//     ["Burkina Faso",
//       [new Map(["I1_Scr", 1]), new Map(["I2_Scr", 1]), new Map(["I3_Scr", 1]), new Map(["I4_Scr", 1]), new Map(["I5_Scr", 1]), new Map(["I6_Scr", 1]), new Map(["I7_Scr", 3]), new Map(["I8_Scr", 2]), new Map(["I9_Scr", 1]), new Map(["I10_Scr", 2]), new Map(["Avg_Scr", 1.4])]],
//     ["Cameroon",
//       [new Map(["I1_Scr", 3]), new Map(["I2_Scr", 3]), new Map(["I3_Scr", 3]), new Map(["I4_Scr", 3]), new Map(["I5_Scr", 2]), new Map(["I6_Scr", 2]), new Map(["I7_Scr", 4]), new Map(["I8_Scr", 3]), new Map(["I9_Scr", 3]), new Map(["I10_Scr", 3]), new Map(["Avg_Scr", 2.9])]],
//     ["Cote d'Ivoire",
//       [new Map(["I1_Scr", 3]), new Map(["I2_Scr", 3]), new Map(["I3_Scr", 3]), new Map(["I4_Scr", 3]), new Map(["I5_Scr", 3]), new Map(["I6_Scr", 3]), new Map(["I7_Scr", 3]), new Map(["I8_Scr", 2]), new Map(["I9_Scr", 2]), new Map(["I10_Scr", 3]), new Map(["Avg_Scr", 2.8])]],
//     ["Liberia",
//       [new Map(["I1_Scr", 3]), new Map(["I2_Scr", 3]), new Map(["I3_Scr", 3]), new Map(["I4_Scr", 2]), new Map(["I5_Scr", 2]), new Map(["I6_Scr", 2]), new Map(["I7_Scr", 3]), new Map(["I8_Scr", 1]), new Map(["I9_Scr", 1]), new Map(["I10_Scr", 3]), new Map(["Avg_Scr", 2.3])]],
//     ["Madagascar",
//       [new Map(["I1_Scr", 3]), new Map(["I2_Scr", 4]), new Map(["I3_Scr", 2]), new Map(["I4_Scr", 3]), new Map(["I5_Scr", 3]), new Map(["I6_Scr", 3]), new Map(["I7_Scr", 3]), new Map(["I8_Scr", 3]), new Map(["I9_Scr", 3]), new Map(["I10_Scr", 3]), new Map(["Avg_Scr", 3.0])]],
//     ["Mozambique",
//       [new Map(["I1_Scr", 1]), new Map(["I2_Scr", 2]), new Map(["I3_Scr", 1]), new Map(["I4_Scr", 1]), new Map(["I5_Scr", 3]), new Map(["I6_Scr", 1]), new Map(["I7_Scr", 3]), new Map(["I8_Scr", 2]), new Map(["I9_Scr", 1]), new Map(["I10_Scr", 2]), new Map(["Avg_Scr", 1.7])]],
//     ["Rwanda",
//       [new Map(["I1_Scr", 3]), new Map(["I2_Scr", 3]), new Map(["I3_Scr", 2]), new Map(["I4_Scr", 4]), new Map(["I5_Scr", 4]), new Map(["I6_Scr", 2]), new Map(["I7_Scr", 4]), new Map(["I8_Scr", 1]), new Map(["I9_Scr", 2]), new Map(["I10_Scr", 3]), new Map(["Avg_Scr", 2.8])]],
//     ["Zambia",
//       [new Map(["I1_Scr", 2]), new Map(["I2_Scr", 1]), new Map(["I3_Scr", 3]), new Map(["I4_Scr", 4]), new Map(["I5_Scr", 2]), new Map(["I6_Scr", 1]), new Map(["I7_Scr", 2]), new Map(["I8_Scr", 2]), new Map(["I9_Scr", 2]), new Map(["I10_Scr", 2]), new Map(["Avg_Scr", 2.1])]]
//   ]);