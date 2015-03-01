'use strict';

var NigerianPrinceGun = new Mailgun({
  // TODO update to match
  apiKey: 'key-dda9b756ccbbf539f75c0c1f1b71beaf',
  // TODO update to match
  domain: 'sandbox3f5e890f18424d80a3e812f035848ced.mailgun.org'
});

var getMailOptions = function () {
  return {
    addresses: {
      noreply: 'noreply@restatferdinand.ro',
      admin: 'albertmatyi@gmail.com',
      dev: 'albertmatyi@gmail.com'
    }
  };
};

var renderHtmlBody = function (guest, booking) {
  var txt = '';
  return txt;
};
var renderTextBody = function (guest, booking) {
  var txt = '';
  return txt;
};
var renderSubject = function (guest, booking) {
  var txt = '';
  return txt;
};

App.component('bookings.notifications').expose({
  'sendNewBookingMails': function (guest, booking) {
    NigerianPrinceGun.send({
     'to': guest.email,
     'from': getMailOptions().addresses.noreply,
     'html': renderHtmlBody(guest, booking),
     'text': renderTextBody(guest, booking),
     'subject': renderSubject(guest, booking),
     'tags': ['booking']
   });
  }
});

