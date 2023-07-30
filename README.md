## overview

For this challenge, an interactive dashboard was built using the Plotly library in JavaScript to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/) which catalogs the microbes that colonise human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## files

- The data used can be found in the 'samples.json' file.
- The JavaScript code can be found in the 'app.js' file in the 'static/js' folder.
- The [dashboard](https://ashejaz.github.io/belly-button-challenge/) itself can be found at: https://ashejaz.github.io/belly-button-challenge/

## dashboard

The dashboard features include a dropdown list to select the test subject:

![Screenshot 2023-07-30 at 17 08 47](https://github.com/ashejaz/belly-button-challenge/assets/127614970/dd6f059d-0ff1-4d4a-af1b-9166dbc28d1e)

For each selection, the demographic information of the test subject is displayed:

![Screenshot 2023-07-30 at 17 09 09](https://github.com/ashejaz/belly-button-challenge/assets/127614970/a19dd327-d3b8-4746-b6c0-9bf4553c9dd0)

A bar chart displaying the top 10 OTUs is created:

![Screenshot 2023-07-30 at 17 09 21](https://github.com/ashejaz/belly-button-challenge/assets/127614970/46df26f4-4d70-4bfb-888e-2ee23effd581)

And finally, a bubble chart showing the microbial species in the sample is displayed:

![Screenshot 2023-07-30 at 17 09 33](https://github.com/ashejaz/belly-button-challenge/assets/127614970/6fde90f1-bd23-414a-9586-594b39bc9e89)

## references

Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: 
http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
