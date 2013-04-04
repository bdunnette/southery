/**
 * Show functions to be exported from the design doc.
 */

var templates = require('duality/templates'),
    fields = require('couchtypes/fields'),
    Form = require('couchtypes/forms').Form,
    users = require('users'),
    person = require('./types').person;
    
exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
        content: templates.render('404.html', req, {})
    };
};

exports.reports = function (doc, req) {
    return {
        title: 'Reports',
        content: templates.render('reports.html', req, {})
    };
};

exports.person_form = function (doc, req) {
    var myForm = new Form (person);
    return {
      title : 'Add Person',
      content: templates.render('user_form.html', req, {
            form_title : 'Add Person',
            method : 'POST',
            action : '/southery/_design/southery/_update/update_user',
            form : myForm.toHTML(req),
            button: 'Validate'})
    }   

};
