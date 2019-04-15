# L-Kamesam-Tripp-Mathur-Bernard

Final visualization project for DS4200 (Macro LTI).

Team members: Rishab Mathur, Isabel Tripp, Haig Bernard, Mounica Kamesam

Repository URL: https://github.ccs.neu.edu/DS4200-S19/L-Kamesam-Tripp-Mathur-Bernard

Link to the Github Pages site: https://pages.github.ccs.neu.edu/DS4200-S19/L-Kamesam-Tripp-Mathur-Bernard/index.html

**For Sprint 1 work: feel free to look at sprint1 branch.**

**Directions for use**: 
1. Select 1 - 3 countries from the eight African countries we display below the violin plots. 
2. Next select the Question you'd like to highlight the distribution for. 
3. Select the Indicator you'd like to overlay the survey distribution for.

Initially, the visualization is grayed out before any user interactions. Clicking on a country populates the chart above with three corresponding sets of violin plots. We chose to display violin visualizations for both sets of survey responses - for Questions 45 and 46 of the Prindex Land Rights Survey (more info on that below under the "Data" section). So, for example - if you select two countries such as Liberia and Rwanda, violin plots for both questions will appear side-by-side. Then, under the "Prindex Land Rights Survey" section, you can select either Question 45 or Question 46, and the appropriate plots for both will be outlined. You can further interact with the "Indicators of the Legal Security of Indigenous and Community Lands" radio buttons, in order to choose which of the 10 indicators to overlap the violin plots with. We apply a color gradient to the violin plots based on how strong the overlap between these indices and the survey responses are. 

You can also navigate to the pages in the upper nav bar for further information on motivation, data notes, analysis, and our design process. 

**Motivation**: Our service learning partner requested that we investigate the various ways that countries around the world protect people's land rights, especially in certain northwestern African countries such as Liberia. Alfred, our community partner, would like to investigate government policies, laws/regulations/enforcements, and acquirements, in order to draw insights as to how best to protect individuals' land rights.

**Data**: We are exploring data from eight African countries: BurkinaFaso, Cameroon, Coted_Ivoire, Liberia, Madagascar, Mozambique, Rwanda, and Zambia. For each of these countries, we have data from a Prindex survey responses (from a Land Alliance for Properties of People and Places) for approximately 84 questions. These survey responses are broken down into sections, based on areas involving: a general screening/background, respondent profile, tenure assessment of dwelling, tenure security perceptions, documentation, benefits of tenure security, and property rights context and perceptions.

For the purpose of this iteration, we chose to dive deeper into certain survey responses that kept track of citizens' perceptions of their land rights vs. the "true" security of their land, as determined by various indices described in a dataset from Landmark (A Global Platform of Indigenous and Community land). This Landmark data is a series of ten indicator questions that investigate the security of land tenure for indigenous communities. Each indicator is determined based on a review of several related factors such as national laws, regulations, statutes, etc. The indicators are then scored from 1 - 4 based on how much the relevant laws address the issues at hand, (one being highest, four being lowest in the sense that the laws do not address the issue).

The indicator scores are all numeric, and all the countries are categorical. In addition, the survey responses that we explored are also numeric, as we compiled the total counts for each question's possible responses, in order to visualize their distributions.

**Task Analysis**: During our interview with Alfred (our community partner), we decided to ask him about his specific goals regarding the indices, and we found that he is trying to determine a ranking that can help NGO's drive reform. He is looking to develop an index that can better inform NGO's about ways to help citizens of the various African countries have a clearer idea of their land rights and defend them in the most effective ways.

**Task table**: https://docs.google.com/document/d/1I1A_earU3zM90Ga7e9pMZrifTlYV_kE-lfFslJyykO8/edit?usp=sharing

**Design Iterations (past sketches -> final design)**:
Since our first sprint, we revised our design for the purposes of this visualization. From meeting with Prof. Sprague, we decided to construct a visualization displaying the distribution of various survey answers from the LTSI survey responses. The following is the user flow we are attempting to build: First, a user clicks on the country shapes that they would like to compare survey responses for (ideally we will cap this at 3 countries). Next, the user can select the radio button corresponding to the survey question they'd like to view the distributions for. The user can also select a radio button corresponding to the types of indicators they'd like to compare country survey data distributions against (as outlined in the Landmark data). These indicators are scores for ten fields including:
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

Sprint 3 updates: After gathering and consolidating in-class feedback, we decided to always display both violin plots (for Question 45 and Question 46) for each country. This way, we gray out the violin plots initially, and color/outline the user-selected plots for both Question45 plots. We also updated the color scheme, to make it more visually accessible and easily digestible by the user. 

**Visualization/Justifications/packages/UI walkthrough**:
We are using JS (D3 Library)/HTML/CSS for the UI.
We use the following as a guideline for the violin plot code: https://www.d3-graph-gallery.com/graph/violin_basicHist.html

**Data Analysis (summary of interesting results)**: From analyzing survey response visualizations for Question 45 (How worried are you that you could lose the right to use this property, or part of this property, against your will in the next 5 years?), we found that responses from Burkina Faso and Mozambique, in particular, indicate that citizens are the least worried about their land rights. On the other hand, citizens from Cote'dIvoire and Cameroon are the most worried about their land rights. This is based on overlapping the "Average" of the ten land security scores from the Landmark data. 

After an exploration of Question 46 (In the next 5 years, how likely or unlikely is it that you could lose the right to use this property, or part of this property, against your will?), we found that citizens from Burkina Faso and Zambia reported that they were least likely to lose their land rights. Respondents from Cameroon and Madagascar reported that they were most likely to lose their property rights. Again, this is based on an overlapping of the "Average" of all ten land security scores from Landmark data.   

Selecting individual indicators of legal security leads to a more specific view of the factors that compose the "Average" security scores, as discussed above. For example, by comparing the "Rights to Water" indicator score, we found that Burkina Faso, Liberia, and Mozambique are all on the "secure" end of the spectrum. This is interesting since several respondents from Mozambique and Liberia answered with survey option 4, which indicates that they were the most worried (when, according to the Landmark data overlay, these countries are the most protected out of the eight in terms of rights to water). 

**Conclusion (short summary of work completed and areas for improvement/future-work)**:
Future work - Given our limited domain knowledge and time constraints, it is difficult to truly generalize about these countries' land and legal security. If presented with more time/resources/background knowledge, our next goal would be to consolidate all of the indicator scores to create a 'macro'-level score for each country. This would hopefully help inform NGO's and locals in these African countries of their land security. In order to do so, we would need to collect more information on the meaning of each of the ten scores, and explore ways to weight them in a meaningful way.
