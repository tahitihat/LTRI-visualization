# D3 Visualization of Land Rights Tenure Data (acquired from Dr. Alfred Brownell)

**Directions for use**: 
1. Select 1 - 3 countries from the eight African countries we display below the violin plots. 
2. Next select the Question you'd like to highlight the distribution for. 
3. Select the Indicator you'd like to overlay the survey distribution for.

You can also navigate to the pages in the upper nav bar for further information on motivation, data notes, analysis, and our design process. 

**Motivation**: Dr. Brownell requested that we investigate the various ways that countries around the world protect people's land rights, especially in certain northwestern African countries such as Liberia. He would like to investigate government policies, laws/regulations/enforcements, and acquirements, in order to draw insights as to how best to protect individuals' land rights.

**Data**: We are exploring data from eight African countries: Burkina Faso, Cameroon, Cote dIvoire, Liberia, Madagascar, Mozambique, Rwanda, and Zambia. For each of these countries, we have data from a Prindex survey responses (from a Land Alliance for Properties of People and Places) for approximately 84 questions.

For the purpose of this iteration, we chose to dive deeper into certain survey responses that kept track of citizens' perceptions of their land rights vs. the "true" security of their land, as determined by various indices described in a dataset from Landmark (A Global Platform of Indigenous and Community land). This Landmark data is a series of ten indicator questions that investigate the security of land tenure for indigenous communities. Each indicator is determined based on a review of several related factors such as national laws, regulations, statutes, etc. The indicators are then scored from 1 - 4 based on how much the relevant laws address the issues at hand, (one being highest, four being lowest in the sense that the laws do not address the issue).

**Task Analysis**: During our interview with Dr. Brownell, we decided to ask him about his specific goals regarding the indices, and we found that he is trying to determine a ranking that can help NGO's and research groups drive reform. He is looking to develop an index that can better inform NGO's about ways to help citizens of the various African countries have a clearer idea of their land rights and defend them in the most effective ways.

**Tools**:
We are using JS (D3 Library)/HTML/CSS for the UI.
We use the following as a guideline for the violin plot code: https://www.d3-graph-gallery.com/graph/violin_basicHist.html

**Conclusion **:
Future work - Given our limited domain knowledge and time constraints, it is difficult to truly generalize about these countries' land and legal security. If presented with more time/resources/background knowledge, our next goal would be to consolidate all of the indicator scores to create a 'macro'-level score for each country. This would hopefully help inform NGO's and locals in these African countries of their land security. In order to do so, we would need to collect more information on the meaning of each of the ten scores, and explore ways to weight them in a meaningful way.
