var olympicData = [
	{
		name: 'United States',
		gold: 46,
		silver: 37,
		bronze: 38,
		total: 121,
		population: 319
	},
	{
		name: 'China',
		gold: 26,
		silver: 18,
		bronze: 26,
		total: 70,
		population: 1375
	},
	{
		name: 'Britain',
		gold: 27,
		silver: 23,
		bronze: 17,
		total: 70,
		population: 64.1
	},
	{
		name: 'Russia',
		gold: 19,
		silver: 18,
		bronze: 19,
		total: 56,
		population: 144
	},
	{
		name: 'Germany',
		gold: 17,
		silver: 10,
		bronze: 15,
		total: 42,
		population: 81
	},
	{
		name: 'Japan',
		gold: 12,
		silver: 8,
		bronze: 21,
		total: 41,
		population: 127.3
	},
	{
		name: 'France',
		gold: 10,
		silver: 18,
		bronze: 14,
		total: 42,
		population: 66
	},
	{
		name: 'South Korea',
		gold: 9,
		silver: 3,
		bronze: 9,
		total: 21,
		population: 50.2
	},
	{
		name: 'Italy',
		gold: 8,
		silver: 12,
		bronze: 8,
		total: 28,
		population: 60
	},
	{
		name: 'Australia',
		gold: 8,
		silver: 11,
		bronze: 10,
		total: 29,
		population: 23
	},
	{
		name: 'Netherlands',
		gold: 8,
		silver: 7,
		bronze: 4,
		total: 19,
		population: 16.8
	},
	{
		name: 'Hungary',
		gold: 8,
		silver: 3,
		bronze: 4,
		total: 15,
		population: 9.9
	},
	{
		name: 'Brazil',
		gold: 7,
		silver: 6,
		bronze: 6,
		total: 19,
		population: 200.4
	},
	{
		name: 'Spain',
		gold: 7,
		silver: 4,
		bronze: 6,
		total: 17,
		population: 46.8
	},
	{
		name: 'Kenya',
		gold: 6,
		silver: 6,
		bronze: 1,
		total: 13,
		population: 44
	},
	{
		name: 'Jamaica',
		gold: 6,
		silver: 3,
		bronze: 2,
		total: 11,
		population: 2.7
	},
	{
		name: 'Croatia',
		gold: 5,
		silver: 3,
		bronze: 2,
		total: 10,
		population: 4
	},
	{
		name: 'Cuba',
		gold: 5,
		silver: 2,
		bronze: 4,
		total: 11,
		population: 11.3
	},
	{
		name: 'New Zealand',
		gold: 4,
		silver: 9,
		bronze: 5,
		total: 18,
		population: 4.5
	},
	{
		name: 'Canada',
		gold: 4,
		silver: 3,
		bronze: 15,
		total: 22,
		population: 35
	},
	{
		name: 'Uzbekistan',
		gold: 4,
		silver: 2,
		bronze: 7,
		total: 13,
		population: 30
	},
	{
		name: 'Kazakhstan',
		gold: 3,
		silver: 5,
		bronze: 9,
		total: 17,
		population: 17
	},
	{
		name: 'Columbia',
		gold: 3,
		silver: 2,
		bronze: 3,
		total: 8,
		population: 47
	},
	{
		name: 'Switzerland',
		gold: 3,
		silver: 2,
		bronze: 2,
		total: 7,
		population: 8.1
	},
	{
		name: 'Iran',
		gold: 3,
		silver: 1,
		bronze: 4,
		total: 8,
		population: 77
	}
];

function crunchData(dataArray, isQuality){
	if(!dataArray || dataArray.length === 0){
		return 'No Data Given';
	}

	var scoresArray = []

	dataArray.forEach(function(country,i){
		var countryObject = {};
		countryObject.name = country.name;
		countryObject.points = country.gold * 3 + country.silver * 2 + country.bronze * 1;
		countryObject.rawTotal = country.total / country.population * 10;
		countryObject.qualityTotal = countryObject.points / country.population * 10;
		scoresArray.push(countryObject);
	});
	return scoresArray;
}

function displayData(dataArray){
	return dataArray.sort(function(a,b){
	  return a.qualityTotal < b.qualityTotal ? 1 : -1
	});
}


function constructQualityGraph(dataArray){
  var crunchedData = crunchData(dataArray);
  var results = displayData(crunchedData);

  var countryNames = [];
  var countryScores = [];

  results.forEach(function(e,i){
    countryNames.push(e.name);
    countryScores.push(e.qualityTotal);
  });

  var data1 = [
    {
      x: countryNames,
      y: countryScores,
      type: 'bar'
    }
  ];

  var data = [
    {
      x: countryNames,
      y: countryScores,
      type: 'bar'
    }
  ];

  var layout = {
    title: '2016 Olympics Quality Scores',
    xaxis: {
      tickangle: -70
    },
    barmode: 'group'
  };

  return Plotly.newPlot('root', data, layout);
}


var graph = constructQualityGraph(olympicData);

React.render(graph, document.getElementById('root'));
