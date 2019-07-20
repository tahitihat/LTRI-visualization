// Indices: I1_Scr,I2_Scr,I3_Scr,I4_Scr,I5_Scr,I6_Scr,I7_Scr,I8_Scr,I9_Scr,I10_Scr,Avg_Scr

const IndicatorMap = {
    "Burkina Faso Q45":
        { "I1_Scr": 1, "I2_Scr": 1, "I3_Scr": 1, "I4_Scr": 1, "I5_Scr": 1, "I6_Scr": 1, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 1, "I10_Scr": 2, "Avg_Scr": 1.4 },
    "Burkina Faso Q46":
        { "I1_Scr": 1, "I2_Scr": 1, "I3_Scr": 1, "I4_Scr": 1, "I5_Scr": 1, "I6_Scr": 1, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 1, "I10_Scr": 2, "Avg_Scr": 1.4 },
    "Cameroon Q45":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 3, "I5_Scr": 2, "I6_Scr": 2, "I7_Scr": 4, "I8_Scr": 3, "I9_Scr": 3, "I10_Scr": 3, "Avg_Scr": 2.9 },
    "Cameroon Q46":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 3, "I5_Scr": 2, "I6_Scr": 2, "I7_Scr": 4, "I8_Scr": 3, "I9_Scr": 3, "I10_Scr": 3, "Avg_Scr": 2.9 },
    "Cote d'Ivoire Q45":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 3, "I5_Scr": 3, "I6_Scr": 3, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 2, "I10_Scr": 3, "Avg_Scr": 2.8 },
    "Cote d'Ivoire Q46":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 3, "I5_Scr": 3, "I6_Scr": 3, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 2, "I10_Scr": 3, "Avg_Scr": 2.8 },
    "Liberia Q45":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 2, "I5_Scr": 2, "I6_Scr": 2, "I7_Scr": 3, "I8_Scr": 1, "I9_Scr": 1, "I10_Scr": 3, "Avg_Scr": 2.3 },
    "Liberia Q46":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 2, "I5_Scr": 2, "I6_Scr": 2, "I7_Scr": 3, "I8_Scr": 1, "I9_Scr": 1, "I10_Scr": 3, "Avg_Scr": 2.3 },
    "Madagascar Q45":
        { "I1_Scr": 3, "I2_Scr": 4, "I3_Scr": 2, "I4_Scr": 3, "I5_Scr": 3, "I6_Scr": 3, "I7_Scr": 3, "I8_Scr": 3, "I9_Scr": 3, "I10_Scr": 3, "Avg_Scr": 3.0 },
    "Madagascar Q46":
        { "I1_Scr": 3, "I2_Scr": 4, "I3_Scr": 2, "I4_Scr": 3, "I5_Scr": 3, "I6_Scr": 3, "I7_Scr": 3, "I8_Scr": 3, "I9_Scr": 3, "I10_Scr": 3, "Avg_Scr": 3.0 },
    "Mozambique Q45":
        { "I1_Scr": 1, "I2_Scr": 2, "I3_Scr": 1, "I4_Scr": 1, "I5_Scr": 3, "I6_Scr": 1, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 1, "I10_Scr": 2, "Avg_Scr": 1.7 },
    "Mozambique Q46":
        { "I1_Scr": 1, "I2_Scr": 2, "I3_Scr": 1, "I4_Scr": 1, "I5_Scr": 3, "I6_Scr": 1, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 1, "I10_Scr": 2, "Avg_Scr": 1.7 },
    "Rwanda Q45":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 2, "I4_Scr": 4, "I5_Scr": 4, "I6_Scr": 2, "I7_Scr": 4, "I8_Scr": 1, "I9_Scr": 2, "I10_Scr": 3, "Avg_Scr": 2.8 },
    "Rwanda Q46":
        { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 2, "I4_Scr": 4, "I5_Scr": 4, "I6_Scr": 2, "I7_Scr": 4, "I8_Scr": 1, "I9_Scr": 2, "I10_Scr": 3, "Avg_Scr": 2.8 },
    "Zambia Q45":
        { "I1_Scr": 2, "I2_Scr": 1, "I3_Scr": 3, "I4_Scr": 4, "I5_Scr": 2, "I6_Scr": 1, "I7_Scr": 2, "I8_Scr": 2, "I9_Scr": 2, "I10_Scr": 2, "Avg_Scr": 2.1 },
    "Zambia Q46":
        { "I1_Scr": 2, "I2_Scr": 1, "I3_Scr": 3, "I4_Scr": 4, "I5_Scr": 2, "I6_Scr": 1, "I7_Scr": 2, "I8_Scr": 2, "I9_Scr": 2, "I10_Scr": 2, "Avg_Scr": 2.1 }
};
export default IndicatorMap;