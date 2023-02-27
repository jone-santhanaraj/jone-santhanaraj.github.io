/*
// ---- //
Author: Jone_Santhanaraj
Github:jone-santhanaraj
Created On: 22-02-2023
Last Edited: 25-02-2023
// ---- //
*/

/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable operator-linebreak */
/* eslint-disable prefer-destructuring */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-template */
/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-var */
/* eslint-disable indent */
/* eslint-disable no-tabs */

/*
If a new parameter is added for the Objects in the periodic_table.json, add a name for the table header in the periodic_table-lookup.json file at the same index as the index of the new parameter in the main JSON file.
The ID name should be unique and start with the prefix "_el_".

if adding a new element to the the JSON, No need to update anything in here as long as the number of parameters does not differ in any means.
*/

/*
A special thanks to ChatGPT for helping me in creating the JSON file :)
*/

/*
If using in VSCode,
copy paste the following code to the User Snippets JSON file(json.json)
([settings icon] -> User Snippets -> json.json)

"New Element": {
		"prefix": "ne",
		"body": [
			"{",

			// Element Params - Starts Here - - Edit Only Within This To Params!!!
			"\t\"atom_num\" : $1,",
			"\t\"element\" : \"$2\",",
			"\t\"name\" : \"$3\",",
			"\t\"type\" : $4,",
			"\t\"atom_mass\" : \"$5 u\",",
			"\t\"n_protons\" : $6,",
			"\t\"n_neutrons\" : $7,",
			"\t\"melt_p\" : \"$8°C ($9 K)\",",
			"\t\"boil_p\" : \"$10°C ($11 K)\",",
			"\t\"d_date\" : \"$12\",",
			"\t\"d_by\" : \"$13\",",
			"\t\"e_per_sh\" : [$14],",
			"\t\"ph_at_stp\" : $15,",
			"\t\"density_stp\" : \"$16 g/L\",",
			"\t\"density_liq\" : [\"$17 g/cm³\", \"$18 g/cm³\"],",
			"\t\"triple_p\" : [\"$19 K\", \"$20 kPa\"],",
			"\t\"critical_p\" : [\"$21 K\", \"$22 kPa\"],",
			"\t\"fusion_h\" : \"$23 kJ/mol\",",
			"\t\"vapor_h\" : \"$24 kJ/mol\",",
			"\t\"m_h_capacity\" : \"$25 J/(mol-K)\"",

			// Elements Params - Ends Here - Edit Only Within This To Add Params!!!

			//Change The Number In The Curly Brackets Below To = 1+last_$_NumberAbove
			"}${26:,}",
			"$0"
		],
		"description": "Create a new Object for an element in the periodic table JSON"
}
// Copy Till Here

You Can Now Type "ne" and press tab to quickly type entries in the JSON File
*/

const elType = [
	// 0
	'Alkali metal',
	// 1
	'Alkaline earth metal',
	// 2
	'Transition metal',
	// 3
	'Post-transition metal',
	// 4
	'Metalloid',
	// 5
	'Reactive non-metal',
	// 6
	'Noble gas',
	// 7
	'Lanthanides',
	// 8
	'Actinide',
	// 9
	'Unknown',
];

const phInStr = [
	// 0
	'Gas',
	// 1
	'Liquid',
	// 2
	'Solid',
];

let count = 0; // To make sure that the iteration thru "allParams" runs only for the required times

let check = true; // To make sure that the "allParams" stores the Keynames of only one Object
let pass = true; // To make sure that the "allID"  stores the Keynames of only one Object
let proceed = true; // To make sure that the Header tag is created only once
// eslint-disable-next-line no-unused-vars
let loaded = false;

let nOfObj = 0; // To have a count of the number of Objects in the JSON

// eslint-disable-next-line prefer-const
let allID = []; // To store the ID names of the td tags for the HTML table
// eslint-disable-next-line prefer-const
let allParams = []; // To store the names of the Keys in the First Object of the JSON

function loading_done() {
	document.getElementsByClassName('loadingscreen')[0].style.display = 'none';
	loaded = true;
}

function createID(peri) {
	var periodic = JSON.parse(JSON.stringify(peri));
	for (var i in periodic) {
		if (pass != false) {
			// eslint-disable-next-line no-unused-vars
			for (var f in periodic) {
				if (pass == true) {
					for (var par in peri[i]) {
						allID.push('_el_' + par);
					}
					pass = false;
				} else {
					break;
				}
			}
		}
	}
	// console.log(allID);
}

function createTableHeader(fin, lookup) {
	// console.log('createTableHeader function called!');
	var th = document.createElement('th');
	th.setAttribute('id', 'header_' + allID[fin]);
	th.appendChild(document.createTextNode(lookup[fin]));
	var curr_th = document.getElementById('row_header');
	curr_th.appendChild(th);
	// console.log('creating row for: ' + curr + allID[f]);
}

// for creating <td> tags within <tr> tags
function createTableData(curr) {
	for (var f = 0; f < allID.length; f += 1) {
		// console.log('createTableRow exetcuted for: ' + 'row_' + curr);
		// console.log('creating row for: ' + curr + allID[f]);
		var td = document.createElement('td');
		td.setAttribute('id', curr + allID[f]);
		td.appendChild(document.createTextNode(''));
		var curr_tr = document.getElementById('row_' + curr);
		curr_tr.appendChild(td);
	}
}

// for creating <tr> tags within <table> tag
function createTableRow(p_table) {
	for (var io in p_table) {
		for (var y in p_table[io]) {
			if (y === 'element') {
				nOfObj += 1;
			}
		}
	}

	// console.log("allID is now '" + allID.length + "' items long.");
	if (proceed == true) {
		var tr_head = document.createElement('tr');
		tr_head.setAttribute('id', 'row_header');
		tr_head.appendChild(document.createTextNode(''));

		var head = document.getElementById('table1_head');
		head.appendChild(tr_head);
		fetch('resources/json/periodic_table-lookup.json')
			.then((response) => response.json())
			.then((json) => {
				// console.log(json.v);
				const table = JSON.parse(JSON.stringify(json));
				if (table.length == allParams.length) {
					for (var fill = 0; fill < allID.length; fill += 1) {
						// console.log('calling cerate');
						createTableHeader(fill, table);
						proceed = false;
					}
				} else {
					var lu_len = table.length;
					var ap_len = allParams.length;
					var err;
					if (ap_len > lu_len) {
						err = ap_len - lu_len;
						console.error(
							'Error: Please enter the correct number of items in the lookup JSON file.\nThe lookup.json file missing "' +
								err +
								'" parameters that is crucial.'
						);
					} else {
						err = lu_len - ap_len;
						console.error(
							'Error: Please enter the correct number of items in the lookup JSON file.\nThe lookup.json file is containing "' +
								err +
								'" extra parameters that is not found in the main JSON file. It is Crucial to match the number of parameters to show the required details properly.'
						);
					}
					alert('The Javascript Encountered An Error.');
				}
			});
	}

	for (var x in p_table) {
		var tr = document.createElement('tr');
		tr.setAttribute('id', 'row_' + x);
		tr.appendChild(document.createTextNode(''));

		var tab = document.getElementById('table1');
		tab.appendChild(tr);

		// console.log('x is:' + x);
	}
	// console.log(nOfObj);
	for (var d = 0; d < nOfObj; d += 1) {
		createTableData(d);
	}
}

// To obtain values from the JSON Object and assign it to the corresponding HTML Tags
function assignValues(per_tab) {
	for (var p = 0; p < per_tab.length; p += 1) {
		for (var g in allParams) {
			if (count < allParams.length) {
				// console.log('count is: ' + count);
				if (allParams[g] === 'type') {
					switch (per_tab[p].type) {
						case 0:
							document.getElementById(p + allID[g]).innerHTML = elType[0];
							break;
						case 1:
							document.getElementById(p + allID[g]).innerHTML = elType[1];
							break;
						case 2:
							document.getElementById(p + allID[g]).innerHTML = elType[2];
							break;
						case 3:
							document.getElementById(p + allID[g]).innerHTML = elType[3];
							break;
						case 4:
							document.getElementById(p + allID[g]).innerHTML = elType[4];
							break;
						case 5:
							document.getElementById(p + allID[g]).innerHTML = elType[5];
							break;
						case 6:
							document.getElementById(p + allID[g]).innerHTML = elType[6];
							break;
						case 7:
							document.getElementById(p + allID[g]).innerHTML = elType[7];
							break;
						case 8:
							document.getElementById(p + allID[g]).innerHTML = elType[8];
							break;
						case 9:
							document.getElementById(p + allID[g]).innerHTML = elType[9];
							break;
						default:
							alert(
								"There Is An Error In The JSON Entry 'type' at the " +
									p +
									'th Object.'
							);
					}
				} else if (allParams[g] === 'e_per_sh') {
					document.getElementById(p + allID[g]).innerHTML =
						per_tab[p].e_per_sh[0];
					var per_shell = per_tab[p].e_per_sh;
					for (var ar = 0; ar < per_shell.length; ar += 1) {
						if (ar > 0) {
							document
								.getElementById(p + allID[g])
								.append(', ' + per_tab[p].e_per_sh[ar]);
						}
					}
				} else if (allParams[g] === 'ph_at_stp') {
					switch (per_tab[p].ph_at_stp) {
						case 0:
							document.getElementById(p + allID[g]).innerHTML = phInStr[0];
							break;
						case 1:
							document.getElementById(p + allID[g]).innerHTML = phInStr[1];
							break;
						case 2:
							document.getElementById(p + allID[g]).innerHTML = phInStr[2];
							break;
						default:
							alert(
								"There Is An Error In The JSON Entry 'ph_at_stp' at the " +
									p +
									'th Object.'
							);
					}
				} else if (allParams[g] === 'density_liq') {
					document.getElementById(p + allID[g]).innerHTML =
						per_tab[p].density_liq[0] +
						' @ Melting Point' +
						'\n | \n' +
						per_tab[p].density_liq[1] +
						' @ Boiling Point';
				} else if (allParams[g] === 'triple_p') {
					document.getElementById(p + allID[g]).innerHTML =
						per_tab[p].triple_p[0] + ' @ ' + per_tab[p].triple_p[1];
				} else if (allParams[g] === 'critical_p') {
					document.getElementById(p + allID[g]).innerHTML =
						per_tab[p].critical_p[0] + ' @ ' + per_tab[p].critical_p[1];
				} else if (
					typeof per_tab[p][allParams[g]] === 'string' ||
					typeof per_tab[p][allParams[g]] === 'number'
				) {
					document.getElementById(p + allID[g]).innerHTML =
						per_tab[p][allParams[g]];
				}
				count += 1;
			} else {
				count = 0;
			}
		}
	}
}

// To trigger the creation of - tags && value assignment by iterating thru each Object in the JSON
function base(periodic_table) {
	var pt = JSON.parse(JSON.stringify(periodic_table));
	// console.log(pt);

	createTableRow(pt);

	// iterating through each object in the JSON
	for (var i in pt) {
		// console.log('check is: ' + check);

		// get keynames from the first Object and store it in allParams array
		if (check == true) {
			// eslint-disable-next-line no-unused-vars
			for (var o in pt) {
				if (check != false) {
					for (var param in periodic_table[i]) {
						allParams.push(param);
					}
					check = false;
				} else {
					break;
				}
			}
		}

		// console.log('allParams: ' + allParams);
		assignValues(pt);
	}
	loading_done();
}

// eslint-disable-next-line no-unused-vars
function loadJSON() {
	fetch('resources/json/periodic_table.json')
		.then((response) => response.json())
		.then((json) => {
			// console.log(json.v);
			const table = JSON.parse(JSON.stringify(json));
			createID(table);
			base(table);
		});
}
