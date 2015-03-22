/**
 * Created by albertmatyi on 2/25/15.
 */
'use strict';

App.component('guests').expose({
	save: function(guestData) {
		var id;
		var guest = App.guests.collection.findOne(
			{email: guestData.email}
		);
		if (guest) {
			App.guests.collection.update(
				{email: guestData.email},
				{$set: guestData});
			id = guest._id;
		} else {
			id = App.guests.collection.insert(guestData);
		}
		return id;
	}
});
