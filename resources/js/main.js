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

**** !!!! REMOVE THIS COMMENT BEFORE USING THE FILE !!!! ****

// ---- //
Author: Jone_Santhanaraj
Github:jone-santhanaraj
Created On: 22-02-2023
Last Edited: 23-02-2023
// ---- //

If using in VSCode,
copy paste the following code to the User Snippets JSON file(json.json)
([settings icon] -> User Snippets -> json.json)

"New Element": {
		"prefix": "ne",
		"body": [
			"{",

			// Element Params - Starts Here - - Edit Only Within This To Params!!!
			"\t\"element\" : \"$1\",",
			"\t\"name\" : \"$2\",",
			"\t\"type\" : $3,",
			"\t\"atom_num\" : $4,",
			"\t\"atom_mass\" : \"$5 u\",",
			"\t\"melt_p\" : \"$6°C ($7 K)\",",
			"\t\"boil_p\" : \"$8°C ($9 K)\",",
			"\t\"d_date\" : \"$10\",",
			"\t\"d_by\" : \"$11\",",
			"\t\"e_per_sh\" : [$12],",
			"\t\"ph_at_stp\" : $13,",
			"\t\"density_stp\" : \"$14 g/L\",",
			"\t\"density_liq\" : [\"$15 g/cm³\", \"$16 g/cm³\", \"$17 g/cm³\"],",
			"\t\"triple_p\" : [\"$18 K\", \"$19 kPa\"],",
			"\t\"critical_p\" : [\"$20 K\", \"$21 kPa\"],",
			"\t\"fusion_h\" : \"$22 kJ/mol\",",
			"\t\"vapor_h\" : \"$23 kJ/mol\",",
			"\t\"m_h_capacity\" : \"$24 J/(mol-K)\",",
			// Elements Params - Ends Here - Edit Only Within This To Add Params!!!

			//Change The Number In The Curly Brackets Below To = 1+last_$_NumberAbove
			"}${25:,}",
			"$0"
		],
		"description": "Add A New Element To The Periodic Table JSON"
}
// Copy Till Here

You Can Now Type "ne" and press tab to quickly type entries in the JSON File
*/

const el_type = [
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

const ph = [
	// 0
	'Gas',
	// 1
	'Liquid',
	// 2
	'Solid',
];

const all_elements = [
	'_el',
	'_el_name',
	'_el_type',
	'_el_anum',
	'_el_amas',
	'_el_mp',
	'_el_bp',
	'_el_ddate',
	'_el_d_by',
	'_el_EPS',
	'_el_stph',
	'_el_dense_stp',
	'_el_dense_liq',
	'_el_tri_p',
	'_el_cri_p',
	'_el_fuse_h',
	'_el_vape_h',
	'_el_mhc',
];

let num_of_objects = 0;

// for creating <td> tags within <tr> tags
function create_table_data(curr) {
	for (var f = 0; f < all_elements.length; f++) {
		// console.log('create_table_row exetcuted for: ' + 'row_' + curr);
		// console.log('creating row for: ' + curr + all_elements[f]);
		var td = document.createElement('td');
		td.setAttribute('id', curr + all_elements[f]);
		td.appendChild(document.createTextNode(''));
		var curr_tr = document.getElementById('row_' + curr);
		curr_tr.appendChild(td);
	}
}

// for creating <tr> tags within <table> tag
function create_table_row(p_table) {
	for (var x in p_table) {
		var tr = document.createElement('tr');
		tr.setAttribute('id', 'row_' + x);
		tr.appendChild(document.createTextNode(''));

		var tab = document.getElementById('table1');
		tab.appendChild(tr);

		for (var y in p_table[x]) {
			if (y == 'element') {
				num_of_objects += 1;
			}
		}
		// console.log('x is:' + x);
		// console.log(num_of_objects);
	}
	for (var d = 0; d < num_of_objects; d++) {
		create_table_data(d);
	}
}

// for assigning values from JSON to their corresponding tags
function assign_elements(periodic_table) {
	var pt = JSON.parse(JSON.stringify(periodic_table));
	// console.log(pt);

	create_table_row(pt);

	// iterating through each object in the JSON
	for (var i in pt) {
		document.getElementById(i + all_elements[0]).innerHTML =
			periodic_table[i].element;

		document.getElementById(i + all_elements[1]).innerHTML =
			periodic_table[i].name;

		// determining the type of element based on the int value
		switch (periodic_table[i].type) {
			case 0:
				document.getElementById(i + all_elements[2]).innerHTML = el_type[0];
				break;
			case 1:
				document.getElementById(i + all_elements[2]).innerHTML = el_type[1];
				break;
			case 2:
				document.getElementById(i + all_elements[2]).innerHTML = el_type[2];
				break;
			case 3:
				document.getElementById(i + all_elements[2]).innerHTML = el_type[3];
				break;
			case 4:
				document.getElementById(i + all_elements[2]).innerHTML = el_type[4];
				break;
			case 5:
				document.getElementById(i + all_elements[2]).innerHTML = el_type[5];
				break;
			case 6:
				document.getElementById(i + all_elements[2]).innerHTML = el_type[6];
				break;
			case 7:
				document.getElementById(i + all_elements[2]).innerHTML = el_type[7];
				break;
			case 8:
				document.getElementById(i + all_elements[2]).innerHTML = el_type[8];
				break;
			case 9:
				document.getElementById(i + all_elements[2]).innerHTML = el_type[9];
				break;
			default:
				alert(
					"There Is An Error In The JSON Entry 'type' at the " +
						i +
						'th Object.'
				);
		}

		document.getElementById(i + all_elements[3]).innerHTML =
			periodic_table[i].atom_num;

		document.getElementById(i + all_elements[4]).innerHTML =
			periodic_table[i].atom_mass;

		document.getElementById(i + all_elements[5]).innerHTML =
			periodic_table[i].melt_p;

		document.getElementById(i + all_elements[6]).innerHTML =
			periodic_table[i].boil_p;

		document.getElementById(i + all_elements[7]).innerHTML =
			periodic_table[i].d_date;

		document.getElementById(i + all_elements[8]).innerHTML =
			periodic_table[i].d_by;

		document.getElementById(i + all_elements[9]).innerHTML =
			periodic_table[i].e_per_sh[0];
		var per_shell = periodic_table[i].e_per_sh;
		for (var ar = 0; ar < per_shell.length; ar++) {
			if (ar > 0) {
				document
					.getElementById(i + all_elements[9])
					.append(', ' + periodic_table[i].e_per_sh[ar]);
			}
		}

		switch (periodic_table[i].ph_at_stp) {
			case 0:
				document.getElementById(i + all_elements[10]).innerHTML = ph[0];
				break;
			case 1:
				document.getElementById(i + all_elements[10]).innerHTML = ph[1];
				break;
			case 2:
				document.getElementById(i + all_elements[10]).innerHTML = ph[2];
				break;
			default:
				alert(
					"There Is An Error In The JSON Entry 'ph_at_stp' at the " +
						i +
						'th Object.'
				);
		}

		document.getElementById(i + all_elements[11]).innerHTML =
			periodic_table[i].density_stp;

		document.getElementById(i + all_elements[12]).innerHTML =
			periodic_table[i].density_liq[0];

		document.getElementById(i + all_elements[13]).innerHTML =
			periodic_table[i].triple_p[0] + ' @ ' + periodic_table[i].triple_p[1];

		document.getElementById(i + all_elements[14]).innerHTML =
			periodic_table[i].critical_p[0] + ' @ ' + periodic_table[i].critical_p[1];

		document.getElementById(i + all_elements[15]).innerHTML =
			periodic_table[i].fusion_h;

		document.getElementById(i + all_elements[16]).innerHTML =
			periodic_table[i].vapor_h;

		document.getElementById(i + all_elements[17]).innerHTML =
			periodic_table[i].m_h_capacity;
	}
}

fetch('resources/js/periodic_table.json')
	.then((response) => response.json())
	.then((json) => {
		// console.log(json.v);
		const table = JSON.parse(JSON.stringify(json));
		assign_elements(table);
	});
