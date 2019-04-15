const indicatorList =
{
    'Avg_Scr': 'Average score for the 10 indicators of indigenous land legal security.',
    'I1_Scr': 'Does the law recognize all rights that Indigenous peoples exercise over their lands as lawful forms of ownership?',
    'I2_Scr': 'Does the law give indigenous land rights the same level of protection as the rights under other tenure systems?',
    'I3_Scr': 'Does the law require the government to provide Indigenous peoples with a formal title and map to their land?',
    'I4_Scr': 'Does the law recognize Indigenous peoples as a legal person for the purposes of land ownership?',
    'I5_Scr': 'Does the law recognize Indigenous peoples as the legal authority over the land?',
    'I6_Scr': 'Do the law and formal title recognize that indigenous land rights may be held in perpetuity?',
    'I7_Scr': 'Does the law require the consent of Indigenous peoples before government or an outsider may acquire their land?',
    'I8_Scr': 'Does the law explicitly recognize that indigenous land includes the rights to all trees on the land?',
    'I9_Scr': 'Does the law explicitly recognize that indigenous land includes the rights to local water sources on the land?',
    'I10_Scr': 'Does the law uphold indigenous land rights in the ownership and governance of national parks and other protected areas?'
};

const questionList =
{
    'q45': "How worried are you that you could lose the right to use this property, or part of this property, against your will in the next 5 years? ",
    'q46': "In the next 5 years, how likely or unlikely is it that you could lose the right to use this property, or part of this property, against your will?"
};

const ratingList =
{
    'q45': ["1 : Not worried at all", "2 : Not worried", "3 : Somewhat worried", "4 : Very worried"],
    'q46': ["1 : Very unlikely", "2 : Unlikely", "3 : Somewhat likely", "4 : Very likely"]
}

var indicators = document.getElementById("indicators");
indicators.addEventListener("change", function () {
    var ind = this.options[this.selectedIndex].id;
    var text = indicatorList[ind];

    var paragraphI = document.getElementById("indicatorText");
    paragraphI.textContent = text;
});

var questions = document.getElementById("questions");
questions.addEventListener("change", function () {
    var form_val;
    for (var i = 0; i < 2; i++) {
        if (this[i].checked) {
            form_val = this[i].id;
        }
    }
    var text = questionList[form_val];
    var q1Text = ratingList[form_val][0];
    var q2Text = ratingList[form_val][1];
    var q3Text = ratingList[form_val][2];
    var q4Text = ratingList[form_val][3];

    var paragraphQ = document.getElementById("questionText");
    var question1 = document.getElementById("question1");
    var question2 = document.getElementById("question2");
    var question3 = document.getElementById("question3");
    var question4 = document.getElementById("question4");

    paragraphQ.textContent = text;
    question1.textContent = q1Text;
    question2.textContent = q2Text;
    question3.textContent = q3Text;
    question4.textContent = q4Text;
});