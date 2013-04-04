/**
 * Kanso document types to export
 */

var Type = require('couchtypes/types').Type,
    fields = require('couchtypes/fields'),
    widgets = require('couchtypes/widgets');

exports.identifier = new Type('identifier', {
	fields: {
		value: fields.string(),
		type: fields.choice({required: false, values: {"http://gedcomx.org/Primary": "Primary", "http://gedcomx.org/Evidence": "Evidence", "http://gedcomx.org/Persistent": "Persistent", "http://gedcomx.org/Deprecated": "Deprecated"}})
	}
});

exports.attribution = new Type('identifier', {
	fields: {
		contributor: fields.string({required: false}),
		modified: fields.createdTime({required: false}),
		changeMessage: fields.string({required: false}),
	}
});

exports.date = new Type('date', {
    fields: {
        year: fields.string({required: false}),
        month: fields.string({required: false}),
        day: fields.string({required: false}),
        hour: fields.string({required: false}),
        minute: fields.string({required: false}),
        second: fields.string({required: false}),
        timezoneOffset: fields.string({required: false}),
    }
});

exports.address = new Type('address', {
    fields: {
        value: fields.string({required: false}),
        city: fields.string({required: false}),
		country: fields.string({required: false}),
		postalCode: fields.string({required: false}),
		stateOrProvince: fields.string({required: false}),
		street: fields.string({required: false, widget: widgets.textarea({cols: 40, rows: 6})}),
    }
});

exports.name = new Type('http://gedcomx.org/v1/Name', {
	fields: {
		type: fields.choice({required: false, values: {
			"http://gedcomx.org/BirthName": "Birth",
			"http://gedcomx.org/DeathName": "Death",
			"http://gedcomx.org/MarriedName": "Married",
			"http://gedcomx.org/AlsoKnownAs": "AKA",
			"http://gedcomx.org/Nickname": "Nickname",
			"http://gedcomx.org/AdoptiveName": "Adoptive",
			"http://gedcomx.org/FormalName": "Formal",
			"http://gedcomx.org/ReligiousName": "Religious"}
			}),
		preferred: fields.boolean({required: false}),
		date: fields.string({required: false}),
		//nameForms: fields.embedList({required: false, type: exports.nameForm}),
	}
}),

exports.person = new Type('http://gedcomx.org/v1/Person', {
    fields: {
        identifiers: fields.embed({type: exports.identifier, required: false}),
		living: fields.boolean({required: false}),
		gender: fields.choice({required: false, values: {
			"http://gedcomx.org/Male": "Male", 
			"http://gedcomx.org/Female": "Female",
			"http://gedcomx.org/Unknown": "Unknown"}}),
		names: {
			prefix: fields.string({required: false}),
			given: fields.string({required: false}),
			surname: fields.string({required: false}),
			suffix: fields.string({required: false}),
		},
		facts: fields.embed({type: exports.identifier, required: false}),
		media: fields.embed({type: exports.identifier, required: false}),
		attribution: fields.embed({type: exports.attribution, required: false}),
    }
});
