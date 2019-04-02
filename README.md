# L-Kamesam-Tripp-Mathur-Bernard

Final visualization project for DS4200 (Macro LTI).

Team members: Rishab Mathur, Isabel Tripp, Haig Bernard, Mounica Kamesam

Repository URL: https://github.ccs.neu.edu/DS4200-S19/L-Kamesam-Tripp-Mathur-Bernard

Link to the Github Pages site: https://pages.github.ccs.neu.edu/DS4200-S19/L-Kamesam-Tripp-Mathur-Bernard/index.html

**For Sprint 1 work: feel free to look at sprint1 branch.**

**Motivation**: Our service learning partner requested that we investigate the various ways that countries around the world protect people's land rights, especially in certain northwestern African countries such as Liberia. Alfred, our community partner, would like to investigate government policies, laws/regulations/enforcements, and acquirements, in order to draw insights as to how best to protect individuals' land rights.

**Data**: We are exploring data from eight African countries: BurkinaFaso, Cameroon, Coted_Ivoire, Liberia, Madagascar, Mozambique, Rwanda, and Zambia. For each of these countries, we have data from a survey responses (from a Land Alliance for Properties of People and Places) for approximately 84 questions. These survey responses are broken down into sections, based on areas involving: a general screening/background, respondent profile, tenure assessment of dwelling, tenure security perceptions, documentation, benefits of tenure security, and property rights context and perceptions.

For the purpose of this iteration, we chose to dive deeper into certain survey responses that kept track of citizens' perceptions of their land rights vs. the "true" security of their land, as determined by various indices described in a dataset from Landmark (A Global Platform of Indigenous and Community land). This Landmark data is a series of ten indicator questions that investigate the security of land tenure for indigenous communities. Each indicator is determined based on a review of several related factors such as national laws, regulations, statutes, etc. The indicators are then scored from 1 - 4 based on how much the relevant laws address the issues at hand, (one being highest, four being lowest in the sense that the laws do not address the issue).

The indicator scores are all numeric, and all the countries are categorical. In addition, the survey responses that we explored are also numeric, as we compiled the total counts for each question's possible responses, in order to visualize their distributions.

**Task Analysis**: During our interview with Alfred (our community partner), we decided to ask him about his specific goals regarding the indices, and we found that he is trying to determine a ranking that can help NGO's drive reform. He is looking to develop an index that can better inform NGO's about ways to help citizens of the various African countries have a clearer idea of their land rights and defend them in the most effective ways.

**Task table**: https://docs.google.com/document/d/1I1A_earU3zM90Ga7e9pMZrifTlYV_kE-lfFslJyykO8/edit?usp=sharing

**Design Iterations (past sketches -> final design)**:
Since our last sprint, we revised our design for the purposes of this visualization. From meeting with Prof. Sprague, we decided to construct a visualization displaying the distribution of various survey answers from the LTSI survey responses. The following is the user flow we are attempting to build: First, a user clicks on the country shapes that they would like to compare survey responses for (ideally we will cap this at 3 countries). Next, the user can select the radio button corresponding to the survey question they'd like to view the distributions for. The user can also select a radio button corresponding to the types of indicators they'd like to compare country survey data distributions against (as outlined in the Landmark data). These indicators are scores for ten fields including:
  - Legal Status
  - Land Rights & Common Property
  - Formal Documentation
  - Legal Person
  - Legal Authority
  - Perpetuity
  - Right to Consent Before Land Acquisition
  - Rights to Trees
  - Rights to Water
  - Land Rights in Protected Areas
We plan to have these tag lines for each score, along with a quick description of what information the score measures.

We decided to create violin plots to convey the data distributions since they allow for easy visualization of data across several groups. They are also convenient and adapt well for large datasets. Violin plots are a combination of box plots and a probability density mirrored on an axis, to show the distribution shape of the data.    

**Visualization/Justifications/packages/UI walkthrough**:
We are using JS (D3 Library)/HTML/CSS for the UI.
We use the following as a guideline for the violin plot code: https://www.d3-graph-gallery.com/graph/violin_basicHist.html

**Data Analysis (summary of interesting results)**: TBD

**Conclusion (short summary of work completed and areas for improvement/future-work)**:
Future work - Given our limited domain knowledge and time constraints, it is difficult to truly generalize about these countries' land and legal security. If presented with more time/resources/background knowledge, our next goal would be to consolidate all of the indicator scores to create a 'macro'-level score for each country. This would hopefully help inform NGO's and locals in these African countries of their land security. In order to do so, we would need to collect more information on the meaning of each of the ten scores, and explore ways to weight them in a meaningful way.
