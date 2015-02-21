/* jshint maxlen: false*/
'use strict';
var data = {
	'languages': [{'lang_id': 'en', 'name': 'English'},
	              {'lang_id': 'ro', 'name': 'Română'},
	              {'lang_id': 'hu', 'name': 'Magyar'}],
	'currency': {
		'default': 'RON',
		'all': ['EUR', 'RON', 'HUF'],
		'selected': 'EUR',
		'rates': {
			'HUF': {'val': 1.442, 'multiplier': 100},
			'RON': {'val': 1, 'multiplier': 1},
			'EUR': {'val': 4.4143, 'multiplier': 1}
		}
	},
	'new_bookings_nr': 0,
	'bookings': [],
	'language': 'en',
	'is_admin': false,
	'si18n': {
		'en': {
			'Range can\'t contain overbooked days': 'Range can\'t contain overbooked days',
			'available': 'available',
			'Start date can\'t be in the past.': 'Start date can\'t be in the past.',
			'New': 'New',
			'Saved': 'Saved',
			'Add category': 'Add category',
			'Moved': 'Moved',
			'Are you sure you wish to accept? Once you accept, you can no more undo it, and the client will be notified.': 'Are you sure you wish to accept? Once you accept, you can no more undo it, and the client will be notified.',
			'Mark as unpaid': 'Mark as unpaid',
			'Are you sure you wish to delete?': 'Are you sure you wish to delete?',
			'Saving': 'Saving',
			'Paid': 'Paid',
			'End date must be greater than start date': 'End date must be greater than start date',
			'Denied': 'Denied',
			'Mark as paid': 'Mark as paid',
			'Accepted': 'Accepted',
			'Booking successfully saved! Stand by for a confirmation email.': 'Booking successfully saved! Stand by for a confirmation email.'
		},
		'ro': {
			'Range can\'t contain overbooked days': 'Selecția conține zile suprarezervate',
			'available': 'disponibil(e)',
			'Start date can\'t be in the past.': 'Data sosirii nu poate fi în trecut',
			'New': 'Nou',
			'Saved': 'Salvat',
			'Add category': 'Adaugă categorie',
			'Moved': 'Mutat',
			'Are you sure you wish to accept? Once you accept, you can no more undo it, and the client will be notified.': 'Sunteți siguri că doriți să acceptați? Această operație nu se poate modifica, iar clientul va fi notificat în urma lui.',
			'Mark as unpaid': 'Marchează neplătit',
			'Are you sure you wish to delete?': 'Sunteți siguri că doriți să ștergeți?',
			'Saving': 'Salvare',
			'Paid': 'Plătit',
			'End date must be greater than start date': 'Data plecării este mai mică decât a sosirii.',
			'Denied': 'Refuzat',
			'Mark as paid': 'Marchează plătit',
			'Accepted': 'Acceptat',
			'Booking successfully saved! Stand by for a confirmation email.': 'Rezervarea s-a efectuat cu succes. Vă rugăm să așteptați mailul de confirmare.'
		},
		'hu': {
			'Range can\'t contain overbooked days': 'Az időtartam túlfoglalt napokat tartalmaz.',
			'available': 'foglalható',
			'Start date can\'t be in the past.': 'Kezdő dátum nem lehet a múltban.',
			'New': 'Új',
			'Saved': 'Elmentve',
			'Add category': 'Hozzáad kategoriát',
			'Moved': 'Áthelyezve',
			'Are you sure you wish to accept? Once you accept, you can no more undo it, and the client will be notified.': 'Biztos benne, hogy elfogadja a foglalást? Ez művelet nem visszavonható, és a kliens is értesül róla.',
			'Mark as unpaid': 'Kifizetlen',
			'Are you sure you wish to delete?': 'Biztos benne, hogy törölni szeretné?',
			'Saving': 'Mentés',
			'Paid': 'Kifizetve',
			'End date must be greater than start date': 'Végdátum nem lehet kisebb mint a kezdeti.',
			'Denied': 'Elutasítva',
			'Mark as paid': 'Kifizetve',
			'Accepted': 'Elfogadva',
			'Booking successfully saved! Stand by for a confirmation email.': 'Foglalás sikeresen bejegyezve. Kérem várja meg a konfirmáló emailt.'
		}
	},
	'categories': [{
		               'subcategories': [],
		               'weight': '0',
		               'created': '21-03-2014',
		               'parent_category': 'None',
		               'modified': '31-07-2014',
		               'visible': 'True',
		               'i18n': {
			               'ro': {
				               'description': '<span>După\r\naproape 6 luni de construcţii şi remodelare pe 23 aprilie 2014 cafeneaua PRESSO\r\nsa deschis în faţa publicului. Pe lângă un sortiment mai larg de cafea va\r\noferim și prăjituri de casă făcute cu grijă la fața locului. Suntem sechiși de\r\nluni până sâmbătă între orele 10 și 22</span><br><br><br><br>',
				               'title': 'Ferdinand Presso'
			               },
			               'en': {
				               'description': '<span>After\r\nalmost half a year of construction and refurbishing on the 23rd of April the\r\nPRESSO coffeehouse is finally opened for the public. Apple and soft cheese pie,\r\nchocolate muffin, ham and vegetable rolls - all that you can have as a side\r\ndish to a good coffee.</span>&nbsp;&nbsp; <br>',
				               'title': 'Ferdinand Presso'
			               },
			               'hu': {
				               'description': '2014 áprilisában 23.-án megnyitotta kapuit a Ferdinand\r\nPRESSÓ. Almás pite, tehéntúrós pite, csokis meggyes muffin, sonkás és zöldséges\r\nkiflik! ezeket lehet élvezni a kávék és italok mellett hetfőtől-szombatig\r\n10-től 22-ig.\r\n\r\n<br><br><br><br>',
				               'title': 'Ferdinánd Presso'
			               }
		               },
		               'id': 660001,
		               'contents': [{
			                            'category': 660001,
			                            'weight': '0',
			                            'created': '09-04-2014',
			                            'modified': '10-04-2014',
			                            'i18n': {
				                            'en': {
					                            'description': '&nbsp;<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6000242192026832193">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
					                            'title': 'Our new face'
				                            },
				                            'ro': {
					                            'description': '<br>&nbsp; <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6000242192026832193">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
					                            'title': 'Noua fata a pensiunii Ferdinand'
				                            },
				                            'hu': {
					                            'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6000242192026832193">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div><br>',
					                            'title': 'A megujult arcunk'
				                            }
			                            },
			                            'id': 810001
		                            }, {
			                            'category': 660001,
			                            'weight': '0',
			                            'created': '31-07-2014',
			                            'modified': '31-07-2014',
			                            'i18n': {
				                            'ro': {
					                            'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6042139461370736705">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
					                            'title': 'Meniu'
				                            },
				                            'en': {
					                            'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6042139461370736705">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
					                            'title': 'Menu'
				                            },
				                            'hu': {
					                            'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6042139461370736705">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
					                            'title': 'Menü'
				                            }
			                            },
			                            'id': 900001
		                            }],
		               'bookables': []
	               }, {
		               'subcategories': [],
		               'weight': '1',
		               'created': '26-12-2012',
		               'parent_category': 'None',
		               'modified': '21-03-2014',
		               'visible': 'True',
		               'i18n': {
			               'ro': {
				               'description': 'La începutul activității în 2007 Pensiunea Ferdinand avea numai cinci camere. În 2012 am reușit să dublăm capacitatea pensiunii. Tipurile de camere pe care le avem in prezent sunt: 7 camere cu două paturi, 1 cameră cu un pat și două apartemente cu 30mp pentru un comfort ridicat. <br>',
				               'title': 'Camere'
			               },
			               'en': {
				               'description': 'In the beginnings, in 2007 the guesthouse had only 5 rooms. Until 2012 we succeeded in increasing the number of our rooms to 10. Regarding their type we have double, single rooms and 2 comfortable&nbsp;apartments. &nbsp; &nbsp; &nbsp; <br>',
				               'title': 'Rooms'
			               },
			               'hu': {
				               'description': '2007-ben, a Ferdinánd panzió megnyitásakor, a szálláshely csupán 5 szobával bírt. 2012-re sikerült a szobák számát megduplázni. A típusait tekintve van egyágyas és kétágyas szobánk, illetve 2 harminc négyzetméteres galériás apartmanunk. <br>',
				               'title': 'Szobák'
			               }
		               },
		               'id': 74005,
		               'contents': [],
		               'bookables': [{
			                             'category': 74005,
			                             'places': '4',
			                             'weight': '0',
			                             'created': '26-12-2012',
			                             'modified': '30-04-2014',
			                             'i18n': {
				                             'ro': {
					                             'description': 'Cele două <b>apartamente</b> se află într-o clădire construită în anii 1800. Din cauza înălţimii încăperilor am avut posibilitatea să construim un semietaj unde am plasat dormitorul. Dedesupt aveţi un living cu o canapea extensibilă dotat cu saltea cu arcuri si televizor LED de mare dimensiuni. Tot aici gasiţi şi o minibucătărie pentru a vă ajuta la nevoie. Ca dotare standard  accesul la internet este prin Wi-Fi. <br>Pentru a vă dărui mai mult comfort baia are vană și rozeta de duș cu dimensiuni mari. Ca o altă comoditate și un bideu va stă la dispoziție.<br><br><strong>DOTĂRILE APARTAMENTELOR:</strong><br>\r\n\t\t  Acces internet, TV cablu, Minibar, Uscător de păr, Saltele ortopedice, Canapea extensibilă, Chicinetă <span>(cuptor cu microunde, cattle, vase, ustenzile), </span>Aer condiționat (nu în fiecare apartament), Televizor plat de mare dimensiuni<br>',
					                             'title': 'Dormi cu stil'
				                             },
				                             'en': {
					                             'description': 'Our two <b>apartments</b> are situated in a building from the 19th century. Due to their inner space the bedroom is situated on a balcony just above the living room. The later is fitted with a comfortable sofa-bed, large TV and a kitchenette for the maximum comfort. As a basic amenity free Wi-Fi is also available. The bathroom is also not standard for a 3star place. Here you can enjoy a bath, a light summer rain shower and a bidet is also at your disposal.<br><br><strong>IN ROOM AMENITIES:</strong><br>\r\n\t\t  Free WI - FI Internet Access, Cable TV, Minibar, Hairdryer, Super-orthopaedic spring-mattresses, Sofabed, Kitchenette <span>(microwave oven,cattle, dishes and tableware), </span>Air conditioning (not in every apartment), Large flat screen TV<br>',
					                             'title': 'Sleep with style'
				                             },
				                             'hu': {
					                             'description': 'Két <b>apartmanunk</b> egy XIX. századi házbanhelyezkedik el melye több mit 4 méteres belmagassága lehetővé tette, hogy galérán alakítsuk ki a hálórészt. A standard franciaágy mellett a nappaliban egy kihúzható kanapé is található mely, rugós matracával, pillanatok alatt, kitűnő ággyá varázsolható. Az apartmanok konyhasarokkal is el vannak látva, hogy a legtöbbet nyújtsanak a vendégeknek. A szélessávú internet mellett egy nagyméretü TV is a szórakoztatast szolgálja. A kényelemre nem csak a szobában figyeltünk. A fürdő káddal és nagyméretü zuhanyrózsával és bidével van felszerelve. <br><br><strong><br>APARTMANJAINK FELSZERELÉSEI:</strong><span><br>szuperortopédikus ágybetétek, ingyenes Wi-Fi csatlakozás, </span>kábel TV,&nbsp;<span></span><span>nagyméretű LED TV, </span>minibár,&nbsp;<span></span>konyhasarok (mikróhullámú sütő, vízmelegítő, edények), <span>hajszáritó, </span>pótágy, <span>légkondiciónálás (nem minden szobában)</span><br>',
					                             'title': 'Aludjon stílusosan'
				                             }
			                             },
			                             'album_url': 'https://picasaweb.google.com/116008649935898699063/ApartmanPensiuneaFerdinandPanzio',
			                             'prices': {
				                             'values': [210, 230, 250, 270],
				                             'special': [{
					                                         'end': '04-05-2014',
					                                         'start': '01-05-2014',
					                                         'repeat': 'no',
					                                         'values': [300, 300, 330,
					                                                    360]
				                                         }]
			                             },
			                             'id': 57035,
			                             'quantity': '2'
		                             }, {
			                             'category': 74005,
			                             'places': '2',
			                             'weight': '0',
			                             'created': '26-12-2012',
			                             'modified': '27-02-2014',
			                             'i18n': {
				                             'en': {
					                             'description': 'Our 7 <b>twins</b> are furbished to suit several needs. In 2013 five of our rooms have been fitted with air conditioning to raise the comfort through the hot summer days. Shortly all our rooms will have large flat screen TVs. All our rooms are non-smoking.<br><br><strong>IN ROOM AMENITIES:</strong><br>\r\n\t\t  Free Wi-Fi Internet Access, Cable TV, Minibar, Hairdryer, Super-orthopaedic spring-mattresses, Extra bed, Air conditioning (not in every room), Large flat screen TV<br>',
					                             'title': 'Rest in two'
				                             },
				                             'ro': {
					                             'description': 'Cele șapte<b> camere duble</b> diferă pentru a satisface cerințele diferitelor clineți. În 2013 patru dintre camerele noastre au fost dotate cu aer condiționat pentru a vă ajuta în scurta dar caldă vară. În curând toate camerele vor primi și televizoare mari.<br><br><strong>DOTĂRILE CAMERELOR:</strong><br>&nbsp;Acces internet (Wi-Fi), TV cablu, Minibar, Uscător de păr, Saltele super-ortopedice, Pat suplimentar, Aer condiționat (nu în toate camerele), Televizoare LED cu ecran mare.<br>',
					                             'title': 'Relaxare pentru doi'
				                             },
				                             'hu': {
					                             'description': 'A hét <b>kétágyas</b> <b>szobánk</b> felszereléseikben ugyan hasonlóak, de egyedi megoldásaik több igényt elégítenek ki. 2013-ban négy szobát légkondicionálóval is elláttunk, hogy a rövid, de olykor meleg nyáron hűsülést biztosítson. Hamarosan minden szobában nagy méretű LCD képernyős televizió is lesz.<br><strong><br><br>SZOBÁINK FELSZERELÉSEI:</strong><br>\r\n\t\t  internet hozzáférés (Wi-Fi), kábel TV, minibár, hajszárító, szuper-otopédikus ágybetétek, pótágy lehetőség, légkondicionálás<strong> </strong>(nem minden szobában), nagy méretű LCD televizió<br>',
					                             'title': 'Két személyes kényelem'
				                             }
			                             },
			                             'album_url': 'https://picasaweb.google.com/116008649935898699063/DoubleTwinPensiuneaFerdinandPanzio',
			                             'prices': {
				                             'values': [170, 190],
				                             'special': [{
					                                         'end': '04-05-2014',
					                                         'start': '01-05-2014',
					                                         'repeat': 'no',
					                                         'values': [240, 250]
				                                         }]
			                             },
			                             'id': 73005,
			                             'quantity': '7'
		                             }, {
			                             'category': 74005,
			                             'places': '1',
			                             'weight': '3',
			                             'created': '15-06-2013',
			                             'modified': '27-02-2014',
			                             'i18n': {
				                             'en': {
					                             'description': 'This room is simple but with all the comfort one would need for a short stay. <br><br><strong>IN ROOM AMENITIES:</strong><br>\r\n\t\t  Free Wi-Fi Internet Access, Cable TV, Minibar, Hairdryer, \r\nSuper-orthopaedic spring-mattresses, Extra bed, Flat screen TV<br><br>',
					                             'title': 'Solo but happy'
				                             },
				                             'ro': {
					                             'description': 'Această cameră e micuță, dar cu tot ce vă trebuie pentru o ședere plăcută.<strong><br><br>DOTĂRILE CAMERELOR:</strong><br>&nbsp;Acces internet (Wi-Fi), TV \r\ncablu, Minibar, Uscător de păr, Saltele super-ortopedice, Televizor LED<br>',
					                             'title': 'Singur dar fericit'
				                             },
				                             'hu': {
					                             'description': 'Ez a szobánk kicsi, de minden megvan benne<strong>,</strong> ami egy kényelmes tartózkodásnak része.<strong><br><br>SZOBÁINK FELSZERELÉSEI:</strong><br>\r\n\t\t  <strong>i</strong>nternet hozzáférés (Wi-Fi), kábel TV, minibár, hajszárító, \r\nszuper-otopédikus ágybetétek, LED képernyős televízió <br>',
					                             'title': 'Egyedül de jókedvűen'
				                             }
			                             },
			                             'album_url': 'https://picasaweb.google.com/116008649935898699063/SGL',
			                             'prices': {
				                             'values': [150],
				                             'special': [{
					                                         'end': '04-05-2014',
					                                         'start': '01-05-2014',
					                                         'repeat': 'no',
					                                         'values': [230]
				                                         }]
			                             },
			                             'id': 172001,
			                             'quantity': '1'
		                             }]
	               }, {
		               'subcategories': [],
		               'weight': '2',
		               'created': '26-12-2012',
		               'parent_category': 'None',
		               'modified': '21-03-2014',
		               'visible': 'True',
		               'i18n': {
			               'ro': {
				               'description': 'Pensiunea Ferdinand este situată în inima orașului la câteva pași de la instituțiile publice și de puburi, restaurante. Odată sosit nu mai trebuie să urcați la volan pentru a relaxa sau a gusta specificul local. Totul este într-un radius de câteva sute de metri.<br><br>',
				               'title': 'Locație'
			               },
			               'en': {
				               'description': 'Our guesthouse is right in the center of Saint George only a few steps away of the town\'s institutions and most of the pubs and restaurants. After arrival you&nbsp;don\'t have to drive to find a nice place to relax or to taste the local cuisine. Everything is at your hand, around us.',
				               'title': 'Location'
			               },
			               'hu': {
				               'description': 'Szálláshelyünk Sepsiszentgyörgy központjában helyezkedik el néhány \r\nlépésnyire a város intézményeitől és szórakozóhelyeitől. Megérkezés \r\nután nem kell autóznia vagy taxiba ülnie ahhoz, hogy egy kellemes \r\nvacsorát elfogyasszon. Minden ott va nehány száz méteres körzetben legyen szó munkáról vagy szórakozásról.<br><br>',
				               'title': 'Elhelyezkedés'
			               }
		               },
		               'id': 64022,
		               'contents': [{
			                            'category': 64022,
			                            'weight': '0',
			                            'created': '26-12-2012',
			                            'modified': '13-11-2013',
			                            'i18n': {
				                            'en': {
					                            'description': 'Although we do not have a restaurant at the Ferdinand pension, being in the center gives you the possibility to choose among various places with local or international cuisine.<br><br><b>Nearby restaurants:</b><br><span>•&nbsp; Bastion<br></span>•&nbsp; Rézkakas<br><span>•&nbsp; Sugáskert <br>\r\n\t\t  •&nbsp; </span><span>Parc<br>\r\n\t\t  •&nbsp; Tribel FF <br>\r\n\t\t  •&nbsp; Pivnița Sfântu Gheorghe<br></span>•&nbsp; Ganesa<br>•&nbsp; Restaurantul Kolcza<br><br><div data-picaslide-albumid="EatingOut" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
					                            'title': 'Eating out'
				                            },
				                            'ro': {
					                            'description': 'Cu toate că la Pensiunea Ferdinand se serveste numai micul dejun fiind în centrul orașului&nbsp;suntem înconjurați de restaurant și baruri.<br><b>Restaurante în apropiere:</b><br><span>•&nbsp; Bastion<br></span>•&nbsp; Rézkakas<br><span>•&nbsp; Restaurantul Sugáskert <br>\r\n\t\t  •&nbsp; </span><span>Restaurantul Parc<br>\r\n\t\t  •&nbsp; Tribel FF <br>\r\n\t\t  •&nbsp; Pivnița Sfântu Gheorghe<br></span>•&nbsp; Ganesa<br>•&nbsp; Restaurantul Kolcza<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="EatingOut">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br><br>',
					                            'title': 'Poftiți la masă!'
				                            },
				                            'hu': {
					                            'description': 'Annak ellenére, hogy a panziónak nincs vendéglője, könnyen finom falatokhoz jutnak vendégeink. Körülöttünk jónéhány vendéglő van ahol megtalálják a helyi konyha jellegzetességeit, de a nemzetközi finomságokat is.<br><span><strong>1 Km-en belüli étkezési lehetőségek:</strong> <br>\r\n\t\t  •&nbsp; Bastion<br></span>•&nbsp; Rézkakas<br><span>•&nbsp; Sugáskert Vendéglő <br>\r\n\t\t  •&nbsp; Park Vendéglő<br>\r\n\t\t  •&nbsp; Tribel FF <br>\r\n\t\t  •&nbsp; Szent György Pince<br></span><span>•&nbsp; Ganesa<br></span><span><span>•</span>&nbsp; Kolcza vendéglő<br>&nbsp;\r\n\t\t  </span><br><div data-picaslide-albumid="EatingOut" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>',
					                            'title': 'Vendéglők a közelben'
				                            }
			                            },
			                            'id': 62022
		                            }, {
			                            'category': 64022,
			                            'weight': '1',
			                            'created': '05-03-2013',
			                            'modified': '19-08-2013',
			                            'i18n': {
				                            'en': {
					                            'description': 'One of Transylvania\'s easternmost towns, Saint George boasts with several precious buildings of the 19th century and a nationwide known cultural life through its theaters, museums and the activity of cultural associations. <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">[<img alt="Insert picasa album" src="/static/img/picasa_s.png"> gallery comes here]</div>',
					                            'title': 'Our Town'
				                            },
				                            'ro': {
					                            'description': 'Sfântu Gheorghe este unul dintre cele mai estice oraşe al Transilvaniei. Fiind centrul judeţului Covasna intotdeauna a fost si centrul cultural al zonei mândrindu-se cu mai multe muzee, teatre şi asociaţii culturale foarte activi.&nbsp; <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">[<img alt="Insert picasa album" src="/static/img/picasa_s.png"> gallery comes here]</div></div>',
					                            'title': 'Orașul nostru'
				                            },
				                            'hu': {
					                            'description': '&nbsp;\r\n\r\n<p>A XIV. században alapított város\r\nolyan ékekkel büszkélkedhet mint több Kós Károly tervezte épület – köztük a Sékely\r\nNemzeti Múzeum – református vártemploma, vagy nyüzsgő kulturális élete melyet\r\ntöbb szinház és kiállítótér formal.</p>\r\n\r\n<div><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">[<img alt="Insert picasa album" src="/static/img/picasa_s.png"> gallery comes here]</div></div>',
					                            'title': 'Városunk'
				                            }
			                            },
			                            'id': 117001
		                            }, {
			                            'category': 64022,
			                            'weight': '2',
			                            'created': '26-12-2012',
			                            'modified': '21-08-2013',
			                            'i18n': {
				                            'ro': {
					                            'description': '<span>•&nbsp; <b>Muzeul Național Secuiesc</b> (clădire proiectată de Kós Károly) <a title="Link: http://www.sznm.ro" rel="nofollow" target="_blank" href="http://www.sznm.ro">http://www.sznm.ro/</a> <br>\r\n\t\t  •&nbsp; <b>Biserica fortificată reformată</b> (cu fortificație din sec. al XV-lea)<br>\r\n\t\t  •&nbsp; <b>Bazarul</b></span><b> </b>(astăzi Galeria de Arte<b> </b><span>”Gyárfás Jenő”)<br></span>•&nbsp; <b>Galeria de Arte Contemporane ”Magma”</b> <a rel="nofollow" target="_blank" href="http://www.magma.maybe.ro/">http://www.magma.maybe.ro/</a> <br><span>•&nbsp; <b>Centrul de sport și agrement</b> (piscină de înot, saune, squash, bowling, aerobic, grotă salină) <br>\r\n\t\t  •&nbsp; <b>Pârtii de schi </b>(10Km de oraș)</span><br><span>•&nbsp; <b>SUGAS Plaza</b> </span><br>',
					                            'title': 'De văzut - Timp liber'
				                            },
				                            'en': {
					                            'description': '<span>•&nbsp; <b>Sekler National Museum</b> (ethnographic and historical museum) <a title="Link: http://www.sznm.ro" rel="nofollow" target="_blank" href="http://www.sznm.ro">http://www.sznm.ro/</a> <br>\r\n\t\t  •&nbsp;<b> Fortified Reformed Church </b><br><b>• The Bazar</b></span><b> </b>(today<b> </b><span>Gyárfás Jenő Art Gallery)<br></span>•&nbsp;<b> MAGMA</b> - Gallery of Contemporary Arts <a title="Link: http://http://www.magma.maybe.ro/" rel="nofollow" target="_blank" href="http://www.magma.maybe.ro/">http://www.magma.maybe.ro/</a> <br><span>•&nbsp; <b>Sports center</b> (swimming pool, squash, bowling, aerobic, salt therapy)</span><span><br>•&nbsp; <b>Ski slopes </b>(6 miles from town)</span><br><span>•&nbsp; <b>SUGAS Plaza</b>&nbsp; </span><br>',
					                            'title': 'What to see'
				                            },
				                            'hu': {
					                            'description': '<span>•&nbsp; <b>Székely Nemzeti Múzeum</b> (Kós Károly egyik remeke) <a title="Link: http://www.sznm.ro" rel="nofollow" target="_blank" href="http://www.sznm.ro">http://www.sznm.ro/</a> <br>\r\n\t\t  •&nbsp; <b>Református erődtemplom</b> (XV. sz.-i erődítménnyel ellátott templom)<br><b>\r\n\t\t  </b>•<b>&nbsp; </b></span><b> A Bazár</b> (ma <span>Gyárfás Jenő Képtár) <a rel="nofollow" target="_blank" href="http://www.magma.maybe.ro/">http://www.magma.maybe.ro/</a> <br></span>•&nbsp; <b>Magma</b> kortársművészeti kiállítótér<br><span>•&nbsp; <b>Sport- és szabadidő központ</b> (fedett uszoda, szauna, fallabda, bowling, aerobic, sóbarlang) <br>\r\n\t\t  •&nbsp; <b>SUGAS</b> – bevásárlóközpont<br></span><span><span>•&nbsp; <b>Sípályák </b>(Sugásfürdőn, 10 km-re a várostól) </span></span><br>',
					                            'title': 'Látnivalók - Szabadidő'
				                            }
			                            },
			                            'id': 62023
		                            }],
		               'bookables': []
	               }, {
		               'subcategories': [],
		               'weight': '3',
		               'created': '26-12-2012',
		               'parent_category': 'None',
		               'modified': '21-03-2014',
		               'visible': 'True',
		               'i18n': {
			               'en': {
				               'description': 'A few words about our past, present and generally how we like things to be done.<br>',
				               'title': 'About us'
			               },
			               'ro': {
				               'description': 'Câteva cuvinte despre trecutul și prezentul nostru; și în general cum ne plac lucrurile. <br>',
				               'title': 'Despre noi'
			               },
			               'hu': {
				               'description': 'Néhany szó magunkról: multunkról, jelenünkről és arról ahogy a dolgokat szeretjük.<br>',
				               'title': 'Rólunk'
			               }
		               },
		               'id': 68001,
		               'contents': [{
			                            'category': 68001,
			                            'weight': '0',
			                            'created': '16-06-2013',
			                            'modified': '05-02-2015',
			                            'i18n': {
				                            'en': {
					                            'description': 'Building a guesthouse came to us in 2004 when the family purchased a run down building in the center of Saint George. The preparation lasted 4 years until finally in the summer of 2007 we started off with 5 rooms. Later on, in 2009 and 2012 we managed to double the number of our rooms.<br>We belie that flexibility and constant development is mostly valued feature of our business. Tourists are GUESTS and they should be treated with respect.<br>At the Ferdinand guesthouse we also serve breakfast where local products and self made things make up the spine of the day\'s main meal.<br><br>',
					                            'title': 'As it all started'
				                            },
				                            'ro': {
					                            'description': 'Idea de a construi o pensiune ne-a venit în 2004 când familia a cumpărat o cladire veche din centrul orașului Sfântu Gheorghe. După 4 ani, în 2007, am început activitatea cu 5 camere. Dezvoltarea a fost continuă, astfel până 2012 am dublat numărul camerelor.<br>Credem că flexibilitatea și dezvoltarea continuă este esența unei companii. Turiștii sunt OASPEȚI și merită tratați ca atare.<br>La pensiune cazarea vine cu mic dejun. Majoritatea produselor sunt locale sau preparate de noi. <br>',
					                            'title': 'La început'
				                            },
				                            'hu': {
					                            'description': 'A Ferdinánd Panzió ötlete 2004-ben született amikor egy Sepsiszentgyörgy\r\n központjában levő, valamikor irodának használt, lerobbant ingatlan a \r\ncsalád tulajdonába került. <br>A szálláshely 2007-ben kezdte meg működését 5\r\n szobával. A szobák számát 2009-ben 8-ra sikerült emelni, majd 2011-ben \r\ntovábbi épületrészt vásároltunk meg. Ez utóbbi részt 2012 során \r\nkészítettük el és két galériás apartman lett belőle.<br>A vendéglátásban\r\n a rugalmasságot és az állandó fejlődést látjuk a megmaradás zálogának.<br>A szállással természetesen reggeli is jár. \r\nAz asztalra kerülő termékek egy része saját készítésű (dzsemek, \r\nzakuszka, vinetesaláta), mások a helyi piacról, őstermelőktől \r\nszármaznak. <br><br>',
					                            'title': 'Ahogy kezdődött'
				                            }
			                            },
			                            'id': 173002
		                            }, {
			                            'category': 68001,
			                            'weight': '1',
			                            'created': '20-08-2013',
			                            'modified': '05-02-2015',
			                            'i18n': {
				                            'ro': {
					                            'description': 'A denumi pensiunea nu a fost cel mai ușor. Inițial clădirea în care se află structura de cazare era un hotel. Din aceste considerente ne-am gândit să-l numim pensiunea după vechiul proprietar ”Blaskó”. Până la urmă legăturile familiale au fost mai tari decât istoria și ne-am convenit pe numele bunucului, Póth Ferdinand, un spirit liber căruia plăcea călătoria.<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6112255888863136913">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
					                            'title': 'Numele pensiunii'
				                            },
				                            'en': {
					                            'description': 'Giving "the child" a name was not easy. The multicultural background of the geographical area didn\'t make it easier at all. As the building where the guesthouse is situated was once a hotel using the original owner\'s&nbsp; name, Blasko, seemed the right choice. At the end family ruled above history and the place was named after our Grandfather, Ferdinand POTH, who has been a free spirit and traveler.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6112255888863136913">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br>',
					                            'title': 'Our Name'
				                            },
				                            'hu': {
					                            'description': 'Elnevezni a szálláshelyet nem volt egyszerű. A név meg kellett feleljen a térseg multikulturális jelenjének, a reklámtudomány szabályainak és az egyéni elképzeléseinknek. Mivel az épület amiben a panzió működik eredetileg hotelnek épűlt a történelmi tulajdonos nevének (Blaskó) használata jó választásnak tűnt. Végül a "család" győzőtt a "történelem" felett és a vendégházat sokat utazó nagyapánkról, Póth Ferdinandról, neveztük el.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6112255888863136913">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
					                            'title': 'A Nevünkről'
				                            }
			                            },
			                            'id': 208003
		                            }, {
			                            'category': 68001,
			                            'weight': '2',
			                            'created': '05-03-2013',
			                            'modified': '21-08-2013',
			                            'i18n': {
				                            'en': {
					                            'description': '&nbsp;Robert Zoltán POTH is the grandson of Ferdinand POTH after whoom the guesthouse is named. Robert is a talented skier who wins Brittish and other competitions in a row. See his results on <a title="Link: http://www.robertpoth.co.uk ." href="http://www.robertpoth.co.uk ." rel="nofollow" target="_blank">www.robertpoth.co.uk .</a> <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Robert">[<img title="Image: /static/img/picasa_s.png" src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>',
					                            'title': 'Ferdinand\'s Grandson'
				                            },
				                            'ro': {
					                            'description': 'Nepotul celui după care am denumit pensiunea, Robert Zoltán POTH, este un&nbsp; talentat schior cu rezultate extraordinare în clasamentele britanice. Mai mult despre meritele lui puteți vedea pe <a href="http://www.robertpoth.co.uk" target="_blank" rel="nofollow">www.robertpoth.co.uk</a> .<br>&nbsp;<div data-picaslide-albumid="Robert" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div><br><br>',
					                            'title': 'Nepotul lui Ferdinand'
				                            },
				                            'hu': {
					                            'description': 'A névadó unokája, Poth Zoltán Robert, tehetséges síző aki egymásután \r\nnyeri a britt nemzeti és nemzetközi versenyeket. Bővebben az \r\neredményeiről a <a href="http://www.robertpoth.co.uk" target="_blank" rel="nofollow">www.robertpoth.co.uk</a> cimen.<br>&nbsp;<div data-picaslide-albumid="Robert" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div><br>',
					                            'title': 'A névadó unokája'
				                            }
			                            },
			                            'id': 122002
		                            }, {
			                            'category': 68001,
			                            'weight': '2',
			                            'created': '22-12-2014',
			                            'modified': '22-12-2014',
			                            'i18n': {
				                            'en': {
					                            'description': '&nbsp;Old watermill reconstruction in progress...<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6094146983228991025">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
					                            'title': 'Preserving value'
				                            },
				                            'ro': {
					                            'description': 'Proiectul nostru de reabilitare a unei vechi mori de apă.<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6094146983228991025">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp; <br>',
					                            'title': 'Proiect etnocultural'
				                            },
				                            'hu': {
					                            'description': '&nbsp;Egy régi vízimalom ujjáélésztésén fáradozunk.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6094146983228991025">[<img title="Image: /static/img/picasa_s.png" src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>&nbsp;',
					                            'title': 'Értékmentés'
				                            }
			                            },
			                            'id': 7870001
		                            }, {
			                            'category': 68001,
			                            'weight': '3',
			                            'created': '09-07-2013',
			                            'modified': '13-11-2013',
			                            'i18n': {
				                            'en': {
					                            'description': 'LOCAL is important to us. For breakfast you will have a choice of local dairy products, the cold-cuts are from local factories and jams are self made ones.<br><a href="https://plu">&nbsp;</a><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5901459360601829857">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br>',
					                            'title': 'Local products for breakfast'
				                            },
				                            'ro': {
					                            'description': 'Produsele locale sunt importante pentru noi. La mic dejun o să găsiți cașuri de la producători locali, mezeluri din fabrici locale și gemuri făcute de noi.<br>&nbsp;<div data-picaslide-albumid="5901459360601829857" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br><br>',
					                            'title': 'Produse locale la mic dejun'
				                            },
				                            'hu': {
					                            'description': 'Fontos nekünk a HELYI. A sajtok helyi termelőktől kerülnek az asztalra, a dzsemeket mi magunk készítjük és a felvágottak, egyeb tejtermékek is helyi gyarak termékei.<div data-picaslide-albumid="Termekek" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br>',
					                            'title': 'Helyi termékek az asztalon'
				                            }
			                            },
			                            'id': 181001
		                            }, {
			                            'category': 68001,
			                            'weight': '4',
			                            'created': '09-07-2013',
			                            'modified': '13-11-2013',
			                            'i18n': {
				                            'en': {
					                            'description': 'Welcome to Seklerland, a land full of history, legends, wild nature and lavish gastronomy. A professionally guided tour can top your local experience. For a tailor made offer don\'t hesitate to contact us. <br><br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5899235359457599761">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
					                            'title': 'Guided tours'
				                            },
				                            'ro': {
					                            'description': 'Bun venit în lumea legendelor, apelor minerale și a naturii fără limite. Hoineareala devine mult mai interesantă în compania unei gizi care vă introduce în amănuntele acestei regiuni multiculturale. Pentu o ofertă personalizate nu ezitați să ne contactați.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5899235359457599761">[<img title="Image: /static/img/picasa_s.png" src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
					                            'title': 'Servicii de ghid'
				                            },
				                            'hu': {
					                            'description': 'Isten hozta önöket a legendák, borvizek és a határtalan természet földjén.&nbsp; A történelmi emlékhelyek, híres szülöttek emlékei akkor teljesedhetnek ki, ha megfelelő idegenvezető segíti a tájékozódást és mesél a "hely szelleméről". Személyreszabott ajánlatért forduljon hozzánk bizalommal!<br><br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5899235359457599761">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
					                            'title': 'Idegenvezetés'
				                            }
			                            },
			                            'id': 187001
		                            }],
		               'bookables': []
	               }, {
		               'subcategories': [],
		               'weight': '4',
		               'created': '04-03-2013',
		               'parent_category': 'None',
		               'modified': '21-03-2014',
		               'visible': 'True',
		               'i18n': {
			               'ro': {
				               'description': 'Pentru a rămâne puternic pe piaţă ne trebuiesc parteneri. Uitaţi-vă cine ne ajută:<br>',
				               'title': 'Parteneri'
			               },
			               'en': {
				               'description': 'To be strong on the market one needs help. See some of our partners:<br>',
				               'title': 'Partners'
			               },
			               'hu': {
				               'description': 'Vállakozást megtartani csak együttműködve lehet. Íme akik ebben segítenek:<br>',
				               'title': 'Partnereink'
			               }
		               },
		               'id': 104002,
		               'contents': [{
			                            'category': 104002,
			                            'weight': '0',
			                            'created': '16-07-2013',
			                            'modified': '05-02-2015',
			                            'i18n': {
				                            'ro': {
					                            'description': '<a rel="nofollow" target="_blank" href="https://www.tourist-informator.info/">https://www.tourist-informator.info/</a> <br><br>',
					                            'title': 'Turist-informator'
				                            },
				                            'en': {
					                            'description': '<a rel="nofollow" target="_blank" href="https://www.tourist-informator.info/">https://www.tourist-informator.info/</a> <br>',
					                            'title': 'Turist-informator'
				                            },
				                            'hu': {
					                            'description': '<a title="Link: https://www.tourist-informator.info/" rel="nofollow" target="_blank" href="https://www.tourist-informator.info/">https://www.tourist-informator.info/</a>',
					                            'title': 'Turist-informator'
				                            }
			                            },
			                            'id': 198001
		                            }, {
			                            'category': 104002,
			                            'weight': '0',
			                            'created': '07-11-2013',
			                            'modified': '07-11-2013',
			                            'i18n': {
				                            'en': {
					                            'description': '<script type="text/javascript" src="http://www.infopensiuni.ro/cod/cod2.js"></script><a href="http://www.infopensiuni.ro/" target="_blank"><img title="Image: http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" src="http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" style="border: none;" alt="Cazare vile si pensiuni"></a><br><a title="Link: http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" href="http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" style="font-size: 11px; color: #000; text-decoration: none; font-family: Arial;">Cazare Sfantu Gheorghe (CV)</a>',
					                            'title': 'InfoPensiuni.ro'
				                            },
				                            'ro': {
					                            'description': '<script type="text/javascript" src="http://www.infopensiuni.ro/cod/cod2.js"></script><a href="http://www.infopensiuni.ro/" target="_blank"><img src="http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" style="border: none;" alt="Cazare vile si pensiuni"></a><br><a href="http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" style="font-size: 11px; color: #000; text-decoration: none; font-family: Arial;">Cazare Sfantu Gheorghe (CV)</a>',
					                            'title': 'InfoPensiuni.ro'
				                            },
				                            'hu': {
					                            'description': '<br><script type="text/javascript" src="http://www.infopensiuni.ro/cod/cod2.js"></script><a href="http://www.infopensiuni.ro/" target="_blank"><img title="Image: http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" src="http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" style="border: none;" alt="Cazare vile si pensiuni"></a><br><a href="http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" style="font-size: 11px; color: #000; text-decoration: none; font-family: Arial;">Cazare Sfantu Gheorghe (CV)</a>',
					                            'title': 'InfoPensiuni.ro'
				                            }
			                            },
			                            'id': 260002
		                            }],
		               'bookables': []
	               }, {
		               'subcategories': [],
		               'weight': '5',
		               'created': '26-12-2012',
		               'parent_category': 'None',
		               'modified': '21-03-2014',
		               'visible': 'True',
		               'i18n': {
			               'ro': {
				               'description': 'Dacă doriți să lăsați un coment timiteți-ne un e-mail și noi ne ocupăm de rest.<br>',
				               'title': 'Impresii'
			               },
			               'en': {
				               'description': 'If you would like to make a post please send us the text in e-mail and we\'ll take care of the rest.<br>',
				               'title': 'Guestbook'
			               },
			               'hu': {
				               'description': 'Ha bejegyzést szeretne írni a vendégkönybe kérem írja meg nekünk a szöveget e-mailben és mi megoldjuk a többit.<br>',
				               'title': 'Vendégkönyv'
			               }
		               },
		               'id': 64035,
		               'contents': [],
		               'bookables': []
	               }],
	'db': {
		'user': {},
		'category': {
			'64022': {
				'subcategories': [],
				'weight': '2',
				'created': '26-12-2012',
				'parent_category': 'None',
				'modified': '21-03-2014',
				'visible': 'True',
				'i18n': {
					'ro': {
						'description': 'Pensiunea Ferdinand este situată în inima orașului la câteva pași de la instituțiile publice și de puburi, restaurante. Odată sosit nu mai trebuie să urcați la volan pentru a relaxa sau a gusta specificul local. Totul este într-un radius de câteva sute de metri.<br><br>',
						'title': 'Locație'
					},
					'en': {
						'description': 'Our guesthouse is right in the center of Saint George only a few steps away of the town\'s institutions and most of the pubs and restaurants. After arrival you&nbsp;don\'t have to drive to find a nice place to relax or to taste the local cuisine. Everything is at your hand, around us.',
						'title': 'Location'
					},
					'hu': {
						'description': 'Szálláshelyünk Sepsiszentgyörgy központjában helyezkedik el néhány \r\nlépésnyire a város intézményeitől és szórakozóhelyeitől. Megérkezés \r\nután nem kell autóznia vagy taxiba ülnie ahhoz, hogy egy kellemes \r\nvacsorát elfogyasszon. Minden ott va nehány száz méteres körzetben legyen szó munkáról vagy szórakozásról.<br><br>',
						'title': 'Elhelyezkedés'
					}
				},
				'id': 64022,
				'contents': [{
					             'category': 64022,
					             'weight': '0',
					             'created': '26-12-2012',
					             'modified': '13-11-2013',
					             'i18n': {
						             'en': {
							             'description': 'Although we do not have a restaurant at the Ferdinand pension, being in the center gives you the possibility to choose among various places with local or international cuisine.<br><br><b>Nearby restaurants:</b><br><span>•&nbsp; Bastion<br></span>•&nbsp; Rézkakas<br><span>•&nbsp; Sugáskert <br>\r\n\t\t  •&nbsp; </span><span>Parc<br>\r\n\t\t  •&nbsp; Tribel FF <br>\r\n\t\t  •&nbsp; Pivnița Sfântu Gheorghe<br></span>•&nbsp; Ganesa<br>•&nbsp; Restaurantul Kolcza<br><br><div data-picaslide-albumid="EatingOut" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
							             'title': 'Eating out'
						             },
						             'ro': {
							             'description': 'Cu toate că la Pensiunea Ferdinand se serveste numai micul dejun fiind în centrul orașului&nbsp;suntem înconjurați de restaurant și baruri.<br><b>Restaurante în apropiere:</b><br><span>•&nbsp; Bastion<br></span>•&nbsp; Rézkakas<br><span>•&nbsp; Restaurantul Sugáskert <br>\r\n\t\t  •&nbsp; </span><span>Restaurantul Parc<br>\r\n\t\t  •&nbsp; Tribel FF <br>\r\n\t\t  •&nbsp; Pivnița Sfântu Gheorghe<br></span>•&nbsp; Ganesa<br>•&nbsp; Restaurantul Kolcza<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="EatingOut">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br><br>',
							             'title': 'Poftiți la masă!'
						             },
						             'hu': {
							             'description': 'Annak ellenére, hogy a panziónak nincs vendéglője, könnyen finom falatokhoz jutnak vendégeink. Körülöttünk jónéhány vendéglő van ahol megtalálják a helyi konyha jellegzetességeit, de a nemzetközi finomságokat is.<br><span><strong>1 Km-en belüli étkezési lehetőségek:</strong> <br>\r\n\t\t  •&nbsp; Bastion<br></span>•&nbsp; Rézkakas<br><span>•&nbsp; Sugáskert Vendéglő <br>\r\n\t\t  •&nbsp; Park Vendéglő<br>\r\n\t\t  •&nbsp; Tribel FF <br>\r\n\t\t  •&nbsp; Szent György Pince<br></span><span>•&nbsp; Ganesa<br></span><span><span>•</span>&nbsp; Kolcza vendéglő<br>&nbsp;\r\n\t\t  </span><br><div data-picaslide-albumid="EatingOut" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>',
							             'title': 'Vendéglők a közelben'
						             }
					             },
					             'id': 62022
				             }, {
					             'category': 64022,
					             'weight': '1',
					             'created': '05-03-2013',
					             'modified': '19-08-2013',
					             'i18n': {
						             'en': {
							             'description': 'One of Transylvania\'s easternmost towns, Saint George boasts with several precious buildings of the 19th century and a nationwide known cultural life through its theaters, museums and the activity of cultural associations. <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">[<img alt="Insert picasa album" src="/static/img/picasa_s.png"> gallery comes here]</div>',
							             'title': 'Our Town'
						             },
						             'ro': {
							             'description': 'Sfântu Gheorghe este unul dintre cele mai estice oraşe al Transilvaniei. Fiind centrul judeţului Covasna intotdeauna a fost si centrul cultural al zonei mândrindu-se cu mai multe muzee, teatre şi asociaţii culturale foarte activi.&nbsp; <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">[<img alt="Insert picasa album" src="/static/img/picasa_s.png"> gallery comes here]</div></div>',
							             'title': 'Orașul nostru'
						             },
						             'hu': {
							             'description': '&nbsp;\r\n\r\n<p>A XIV. században alapított város\r\nolyan ékekkel büszkélkedhet mint több Kós Károly tervezte épület – köztük a Sékely\r\nNemzeti Múzeum – református vártemploma, vagy nyüzsgő kulturális élete melyet\r\ntöbb szinház és kiállítótér formal.</p>\r\n\r\n<div><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">[<img alt="Insert picasa album" src="/static/img/picasa_s.png"> gallery comes here]</div></div>',
							             'title': 'Városunk'
						             }
					             },
					             'id': 117001
				             }, {
					             'category': 64022,
					             'weight': '2',
					             'created': '26-12-2012',
					             'modified': '21-08-2013',
					             'i18n': {
						             'ro': {
							             'description': '<span>•&nbsp; <b>Muzeul Național Secuiesc</b> (clădire proiectată de Kós Károly) <a title="Link: http://www.sznm.ro" rel="nofollow" target="_blank" href="http://www.sznm.ro">http://www.sznm.ro/</a> <br>\r\n\t\t  •&nbsp; <b>Biserica fortificată reformată</b> (cu fortificație din sec. al XV-lea)<br>\r\n\t\t  •&nbsp; <b>Bazarul</b></span><b> </b>(astăzi Galeria de Arte<b> </b><span>”Gyárfás Jenő”)<br></span>•&nbsp; <b>Galeria de Arte Contemporane ”Magma”</b> <a rel="nofollow" target="_blank" href="http://www.magma.maybe.ro/">http://www.magma.maybe.ro/</a> <br><span>•&nbsp; <b>Centrul de sport și agrement</b> (piscină de înot, saune, squash, bowling, aerobic, grotă salină) <br>\r\n\t\t  •&nbsp; <b>Pârtii de schi </b>(10Km de oraș)</span><br><span>•&nbsp; <b>SUGAS Plaza</b> </span><br>',
							             'title': 'De văzut - Timp liber'
						             },
						             'en': {
							             'description': '<span>•&nbsp; <b>Sekler National Museum</b> (ethnographic and historical museum) <a title="Link: http://www.sznm.ro" rel="nofollow" target="_blank" href="http://www.sznm.ro">http://www.sznm.ro/</a> <br>\r\n\t\t  •&nbsp;<b> Fortified Reformed Church </b><br><b>• The Bazar</b></span><b> </b>(today<b> </b><span>Gyárfás Jenő Art Gallery)<br></span>•&nbsp;<b> MAGMA</b> - Gallery of Contemporary Arts <a title="Link: http://http://www.magma.maybe.ro/" rel="nofollow" target="_blank" href="http://www.magma.maybe.ro/">http://www.magma.maybe.ro/</a> <br><span>•&nbsp; <b>Sports center</b> (swimming pool, squash, bowling, aerobic, salt therapy)</span><span><br>•&nbsp; <b>Ski slopes </b>(6 miles from town)</span><br><span>•&nbsp; <b>SUGAS Plaza</b>&nbsp; </span><br>',
							             'title': 'What to see'
						             },
						             'hu': {
							             'description': '<span>•&nbsp; <b>Székely Nemzeti Múzeum</b> (Kós Károly egyik remeke) <a title="Link: http://www.sznm.ro" rel="nofollow" target="_blank" href="http://www.sznm.ro">http://www.sznm.ro/</a> <br>\r\n\t\t  •&nbsp; <b>Református erődtemplom</b> (XV. sz.-i erődítménnyel ellátott templom)<br><b>\r\n\t\t  </b>•<b>&nbsp; </b></span><b> A Bazár</b> (ma <span>Gyárfás Jenő Képtár) <a rel="nofollow" target="_blank" href="http://www.magma.maybe.ro/">http://www.magma.maybe.ro/</a> <br></span>•&nbsp; <b>Magma</b> kortársművészeti kiállítótér<br><span>•&nbsp; <b>Sport- és szabadidő központ</b> (fedett uszoda, szauna, fallabda, bowling, aerobic, sóbarlang) <br>\r\n\t\t  •&nbsp; <b>SUGAS</b> – bevásárlóközpont<br></span><span><span>•&nbsp; <b>Sípályák </b>(Sugásfürdőn, 10 km-re a várostól) </span></span><br>',
							             'title': 'Látnivalók - Szabadidő'
						             }
					             },
					             'id': 62023
				             }],
				'bookables': []
			},
			'64035': {
				'subcategories': [],
				'weight': '5',
				'created': '26-12-2012',
				'parent_category': 'None',
				'modified': '21-03-2014',
				'visible': 'True',
				'i18n': {
					'ro': {
						'description': 'Dacă doriți să lăsați un coment timiteți-ne un e-mail și noi ne ocupăm de rest.<br>',
						'title': 'Impresii'
					},
					'en': {
						'description': 'If you would like to make a post please send us the text in e-mail and we\'ll take care of the rest.<br>',
						'title': 'Guestbook'
					},
					'hu': {
						'description': 'Ha bejegyzést szeretne írni a vendégkönybe kérem írja meg nekünk a szöveget e-mailben és mi megoldjuk a többit.<br>',
						'title': 'Vendégkönyv'
					}
				},
				'id': 64035,
				'contents': [],
				'bookables': []
			},
			'68001': {
				'subcategories': [],
				'weight': '3',
				'created': '26-12-2012',
				'parent_category': 'None',
				'modified': '21-03-2014',
				'visible': 'True',
				'i18n': {
					'en': {
						'description': 'A few words about our past, present and generally how we like things to be done.<br>',
						'title': 'About us'
					},
					'ro': {
						'description': 'Câteva cuvinte despre trecutul și prezentul nostru; și în general cum ne plac lucrurile. <br>',
						'title': 'Despre noi'
					},
					'hu': {
						'description': 'Néhany szó magunkról: multunkról, jelenünkről és arról ahogy a dolgokat szeretjük.<br>',
						'title': 'Rólunk'
					}
				},
				'id': 68001,
				'contents': [{
					             'category': 68001,
					             'weight': '0',
					             'created': '16-06-2013',
					             'modified': '05-02-2015',
					             'i18n': {
						             'en': {
							             'description': 'Building a guesthouse came to us in 2004 when the family purchased a run down building in the center of Saint George. The preparation lasted 4 years until finally in the summer of 2007 we started off with 5 rooms. Later on, in 2009 and 2012 we managed to double the number of our rooms.<br>We belie that flexibility and constant development is mostly valued feature of our business. Tourists are GUESTS and they should be treated with respect.<br>At the Ferdinand guesthouse we also serve breakfast where local products and self made things make up the spine of the day\'s main meal.<br><br>',
							             'title': 'As it all started'
						             },
						             'ro': {
							             'description': 'Idea de a construi o pensiune ne-a venit în 2004 când familia a cumpărat o cladire veche din centrul orașului Sfântu Gheorghe. După 4 ani, în 2007, am început activitatea cu 5 camere. Dezvoltarea a fost continuă, astfel până 2012 am dublat numărul camerelor.<br>Credem că flexibilitatea și dezvoltarea continuă este esența unei companii. Turiștii sunt OASPEȚI și merită tratați ca atare.<br>La pensiune cazarea vine cu mic dejun. Majoritatea produselor sunt locale sau preparate de noi. <br>',
							             'title': 'La început'
						             },
						             'hu': {
							             'description': 'A Ferdinánd Panzió ötlete 2004-ben született amikor egy Sepsiszentgyörgy\r\n központjában levő, valamikor irodának használt, lerobbant ingatlan a \r\ncsalád tulajdonába került. <br>A szálláshely 2007-ben kezdte meg működését 5\r\n szobával. A szobák számát 2009-ben 8-ra sikerült emelni, majd 2011-ben \r\ntovábbi épületrészt vásároltunk meg. Ez utóbbi részt 2012 során \r\nkészítettük el és két galériás apartman lett belőle.<br>A vendéglátásban\r\n a rugalmasságot és az állandó fejlődést látjuk a megmaradás zálogának.<br>A szállással természetesen reggeli is jár. \r\nAz asztalra kerülő termékek egy része saját készítésű (dzsemek, \r\nzakuszka, vinetesaláta), mások a helyi piacról, őstermelőktől \r\nszármaznak. <br><br>',
							             'title': 'Ahogy kezdődött'
						             }
					             },
					             'id': 173002
				             }, {
					             'category': 68001,
					             'weight': '1',
					             'created': '20-08-2013',
					             'modified': '05-02-2015',
					             'i18n': {
						             'ro': {
							             'description': 'A denumi pensiunea nu a fost cel mai ușor. Inițial clădirea în care se află structura de cazare era un hotel. Din aceste considerente ne-am gândit să-l numim pensiunea după vechiul proprietar ”Blaskó”. Până la urmă legăturile familiale au fost mai tari decât istoria și ne-am convenit pe numele bunucului, Póth Ferdinand, un spirit liber căruia plăcea călătoria.<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6112255888863136913">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
							             'title': 'Numele pensiunii'
						             },
						             'en': {
							             'description': 'Giving "the child" a name was not easy. The multicultural background of the geographical area didn\'t make it easier at all. As the building where the guesthouse is situated was once a hotel using the original owner\'s&nbsp; name, Blasko, seemed the right choice. At the end family ruled above history and the place was named after our Grandfather, Ferdinand POTH, who has been a free spirit and traveler.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6112255888863136913">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br>',
							             'title': 'Our Name'
						             },
						             'hu': {
							             'description': 'Elnevezni a szálláshelyet nem volt egyszerű. A név meg kellett feleljen a térseg multikulturális jelenjének, a reklámtudomány szabályainak és az egyéni elképzeléseinknek. Mivel az épület amiben a panzió működik eredetileg hotelnek épűlt a történelmi tulajdonos nevének (Blaskó) használata jó választásnak tűnt. Végül a "család" győzőtt a "történelem" felett és a vendégházat sokat utazó nagyapánkról, Póth Ferdinandról, neveztük el.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6112255888863136913">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
							             'title': 'A Nevünkről'
						             }
					             },
					             'id': 208003
				             }, {
					             'category': 68001,
					             'weight': '2',
					             'created': '05-03-2013',
					             'modified': '21-08-2013',
					             'i18n': {
						             'en': {
							             'description': '&nbsp;Robert Zoltán POTH is the grandson of Ferdinand POTH after whoom the guesthouse is named. Robert is a talented skier who wins Brittish and other competitions in a row. See his results on <a title="Link: http://www.robertpoth.co.uk ." href="http://www.robertpoth.co.uk ." rel="nofollow" target="_blank">www.robertpoth.co.uk .</a> <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Robert">[<img title="Image: /static/img/picasa_s.png" src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>',
							             'title': 'Ferdinand\'s Grandson'
						             },
						             'ro': {
							             'description': 'Nepotul celui după care am denumit pensiunea, Robert Zoltán POTH, este un&nbsp; talentat schior cu rezultate extraordinare în clasamentele britanice. Mai mult despre meritele lui puteți vedea pe <a href="http://www.robertpoth.co.uk" target="_blank" rel="nofollow">www.robertpoth.co.uk</a> .<br>&nbsp;<div data-picaslide-albumid="Robert" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div><br><br>',
							             'title': 'Nepotul lui Ferdinand'
						             },
						             'hu': {
							             'description': 'A névadó unokája, Poth Zoltán Robert, tehetséges síző aki egymásután \r\nnyeri a britt nemzeti és nemzetközi versenyeket. Bővebben az \r\neredményeiről a <a href="http://www.robertpoth.co.uk" target="_blank" rel="nofollow">www.robertpoth.co.uk</a> cimen.<br>&nbsp;<div data-picaslide-albumid="Robert" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div><br>',
							             'title': 'A névadó unokája'
						             }
					             },
					             'id': 122002
				             }, {
					             'category': 68001,
					             'weight': '2',
					             'created': '22-12-2014',
					             'modified': '22-12-2014',
					             'i18n': {
						             'en': {
							             'description': '&nbsp;Old watermill reconstruction in progress...<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6094146983228991025">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
							             'title': 'Preserving value'
						             },
						             'ro': {
							             'description': 'Proiectul nostru de reabilitare a unei vechi mori de apă.<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6094146983228991025">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp; <br>',
							             'title': 'Proiect etnocultural'
						             },
						             'hu': {
							             'description': '&nbsp;Egy régi vízimalom ujjáélésztésén fáradozunk.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6094146983228991025">[<img title="Image: /static/img/picasa_s.png" src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>&nbsp;',
							             'title': 'Értékmentés'
						             }
					             },
					             'id': 7870001
				             }, {
					             'category': 68001,
					             'weight': '3',
					             'created': '09-07-2013',
					             'modified': '13-11-2013',
					             'i18n': {
						             'en': {
							             'description': 'LOCAL is important to us. For breakfast you will have a choice of local dairy products, the cold-cuts are from local factories and jams are self made ones.<br><a href="https://plu">&nbsp;</a><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5901459360601829857">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br>',
							             'title': 'Local products for breakfast'
						             },
						             'ro': {
							             'description': 'Produsele locale sunt importante pentru noi. La mic dejun o să găsiți cașuri de la producători locali, mezeluri din fabrici locale și gemuri făcute de noi.<br>&nbsp;<div data-picaslide-albumid="5901459360601829857" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br><br>',
							             'title': 'Produse locale la mic dejun'
						             },
						             'hu': {
							             'description': 'Fontos nekünk a HELYI. A sajtok helyi termelőktől kerülnek az asztalra, a dzsemeket mi magunk készítjük és a felvágottak, egyeb tejtermékek is helyi gyarak termékei.<div data-picaslide-albumid="Termekek" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br>',
							             'title': 'Helyi termékek az asztalon'
						             }
					             },
					             'id': 181001
				             }, {
					             'category': 68001,
					             'weight': '4',
					             'created': '09-07-2013',
					             'modified': '13-11-2013',
					             'i18n': {
						             'en': {
							             'description': 'Welcome to Seklerland, a land full of history, legends, wild nature and lavish gastronomy. A professionally guided tour can top your local experience. For a tailor made offer don\'t hesitate to contact us. <br><br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5899235359457599761">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
							             'title': 'Guided tours'
						             },
						             'ro': {
							             'description': 'Bun venit în lumea legendelor, apelor minerale și a naturii fără limite. Hoineareala devine mult mai interesantă în compania unei gizi care vă introduce în amănuntele acestei regiuni multiculturale. Pentu o ofertă personalizate nu ezitați să ne contactați.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5899235359457599761">[<img title="Image: /static/img/picasa_s.png" src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
							             'title': 'Servicii de ghid'
						             },
						             'hu': {
							             'description': 'Isten hozta önöket a legendák, borvizek és a határtalan természet földjén.&nbsp; A történelmi emlékhelyek, híres szülöttek emlékei akkor teljesedhetnek ki, ha megfelelő idegenvezető segíti a tájékozódást és mesél a "hely szelleméről". Személyreszabott ajánlatért forduljon hozzánk bizalommal!<br><br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5899235359457599761">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
							             'title': 'Idegenvezetés'
						             }
					             },
					             'id': 187001
				             }],
				'bookables': []
			},
			'74005': {
				'subcategories': [],
				'weight': '1',
				'created': '26-12-2012',
				'parent_category': 'None',
				'modified': '21-03-2014',
				'visible': 'True',
				'i18n': {
					'ro': {
						'description': 'La începutul activității în 2007 Pensiunea Ferdinand avea numai cinci camere. În 2012 am reușit să dublăm capacitatea pensiunii. Tipurile de camere pe care le avem in prezent sunt: 7 camere cu două paturi, 1 cameră cu un pat și două apartemente cu 30mp pentru un comfort ridicat. <br>',
						'title': 'Camere'
					},
					'en': {
						'description': 'In the beginnings, in 2007 the guesthouse had only 5 rooms. Until 2012 we succeeded in increasing the number of our rooms to 10. Regarding their type we have double, single rooms and 2 comfortable&nbsp;apartments. &nbsp; &nbsp; &nbsp; <br>',
						'title': 'Rooms'
					},
					'hu': {
						'description': '2007-ben, a Ferdinánd panzió megnyitásakor, a szálláshely csupán 5 szobával bírt. 2012-re sikerült a szobák számát megduplázni. A típusait tekintve van egyágyas és kétágyas szobánk, illetve 2 harminc négyzetméteres galériás apartmanunk. <br>',
						'title': 'Szobák'
					}
				},
				'id': 74005,
				'contents': [],
				'bookables': [{
					              'category': 74005,
					              'places': '4',
					              'weight': '0',
					              'created': '26-12-2012',
					              'modified': '30-04-2014',
					              'i18n': {
						              'ro': {
							              'description': 'Cele două <b>apartamente</b> se află într-o clădire construită în anii 1800. Din cauza înălţimii încăperilor am avut posibilitatea să construim un semietaj unde am plasat dormitorul. Dedesupt aveţi un living cu o canapea extensibilă dotat cu saltea cu arcuri si televizor LED de mare dimensiuni. Tot aici gasiţi şi o minibucătărie pentru a vă ajuta la nevoie. Ca dotare standard  accesul la internet este prin Wi-Fi. <br>Pentru a vă dărui mai mult comfort baia are vană și rozeta de duș cu dimensiuni mari. Ca o altă comoditate și un bideu va stă la dispoziție.<br><br><strong>DOTĂRILE APARTAMENTELOR:</strong><br>\r\n\t\t  Acces internet, TV cablu, Minibar, Uscător de păr, Saltele ortopedice, Canapea extensibilă, Chicinetă <span>(cuptor cu microunde, cattle, vase, ustenzile), </span>Aer condiționat (nu în fiecare apartament), Televizor plat de mare dimensiuni<br>',
							              'title': 'Dormi cu stil'
						              },
						              'en': {
							              'description': 'Our two <b>apartments</b> are situated in a building from the 19th century. Due to their inner space the bedroom is situated on a balcony just above the living room. The later is fitted with a comfortable sofa-bed, large TV and a kitchenette for the maximum comfort. As a basic amenity free Wi-Fi is also available. The bathroom is also not standard for a 3star place. Here you can enjoy a bath, a light summer rain shower and a bidet is also at your disposal.<br><br><strong>IN ROOM AMENITIES:</strong><br>\r\n\t\t  Free WI - FI Internet Access, Cable TV, Minibar, Hairdryer, Super-orthopaedic spring-mattresses, Sofabed, Kitchenette <span>(microwave oven,cattle, dishes and tableware), </span>Air conditioning (not in every apartment), Large flat screen TV<br>',
							              'title': 'Sleep with style'
						              },
						              'hu': {
							              'description': 'Két <b>apartmanunk</b> egy XIX. századi házbanhelyezkedik el melye több mit 4 méteres belmagassága lehetővé tette, hogy galérán alakítsuk ki a hálórészt. A standard franciaágy mellett a nappaliban egy kihúzható kanapé is található mely, rugós matracával, pillanatok alatt, kitűnő ággyá varázsolható. Az apartmanok konyhasarokkal is el vannak látva, hogy a legtöbbet nyújtsanak a vendégeknek. A szélessávú internet mellett egy nagyméretü TV is a szórakoztatast szolgálja. A kényelemre nem csak a szobában figyeltünk. A fürdő káddal és nagyméretü zuhanyrózsával és bidével van felszerelve. <br><br><strong><br>APARTMANJAINK FELSZERELÉSEI:</strong><span><br>szuperortopédikus ágybetétek, ingyenes Wi-Fi csatlakozás, </span>kábel TV,&nbsp;<span></span><span>nagyméretű LED TV, </span>minibár,&nbsp;<span></span>konyhasarok (mikróhullámú sütő, vízmelegítő, edények), <span>hajszáritó, </span>pótágy, <span>légkondiciónálás (nem minden szobában)</span><br>',
							              'title': 'Aludjon stílusosan'
						              }
					              },
					              'album_url': 'https://picasaweb.google.com/116008649935898699063/ApartmanPensiuneaFerdinandPanzio',
					              'prices': {
						              'values': [210, 230, 250, 270],
						              'special': [{
							                          'end': '04-05-2014',
							                          'start': '01-05-2014',
							                          'repeat': 'no',
							                          'values': [300, 300, 330, 360]
						                          }]
					              },
					              'id': 57035,
					              'quantity': '2'
				              }, {
					              'category': 74005,
					              'places': '2',
					              'weight': '0',
					              'created': '26-12-2012',
					              'modified': '27-02-2014',
					              'i18n': {
						              'en': {
							              'description': 'Our 7 <b>twins</b> are furbished to suit several needs. In 2013 five of our rooms have been fitted with air conditioning to raise the comfort through the hot summer days. Shortly all our rooms will have large flat screen TVs. All our rooms are non-smoking.<br><br><strong>IN ROOM AMENITIES:</strong><br>\r\n\t\t  Free Wi-Fi Internet Access, Cable TV, Minibar, Hairdryer, Super-orthopaedic spring-mattresses, Extra bed, Air conditioning (not in every room), Large flat screen TV<br>',
							              'title': 'Rest in two'
						              },
						              'ro': {
							              'description': 'Cele șapte<b> camere duble</b> diferă pentru a satisface cerințele diferitelor clineți. În 2013 patru dintre camerele noastre au fost dotate cu aer condiționat pentru a vă ajuta în scurta dar caldă vară. În curând toate camerele vor primi și televizoare mari.<br><br><strong>DOTĂRILE CAMERELOR:</strong><br>&nbsp;Acces internet (Wi-Fi), TV cablu, Minibar, Uscător de păr, Saltele super-ortopedice, Pat suplimentar, Aer condiționat (nu în toate camerele), Televizoare LED cu ecran mare.<br>',
							              'title': 'Relaxare pentru doi'
						              },
						              'hu': {
							              'description': 'A hét <b>kétágyas</b> <b>szobánk</b> felszereléseikben ugyan hasonlóak, de egyedi megoldásaik több igényt elégítenek ki. 2013-ban négy szobát légkondicionálóval is elláttunk, hogy a rövid, de olykor meleg nyáron hűsülést biztosítson. Hamarosan minden szobában nagy méretű LCD képernyős televizió is lesz.<br><strong><br><br>SZOBÁINK FELSZERELÉSEI:</strong><br>\r\n\t\t  internet hozzáférés (Wi-Fi), kábel TV, minibár, hajszárító, szuper-otopédikus ágybetétek, pótágy lehetőség, légkondicionálás<strong> </strong>(nem minden szobában), nagy méretű LCD televizió<br>',
							              'title': 'Két személyes kényelem'
						              }
					              },
					              'album_url': 'https://picasaweb.google.com/116008649935898699063/DoubleTwinPensiuneaFerdinandPanzio',
					              'prices': {
						              'values': [170, 190],
						              'special': [{
							                          'end': '04-05-2014',
							                          'start': '01-05-2014',
							                          'repeat': 'no',
							                          'values': [240, 250]
						                          }]
					              },
					              'id': 73005,
					              'quantity': '7'
				              }, {
					              'category': 74005,
					              'places': '1',
					              'weight': '3',
					              'created': '15-06-2013',
					              'modified': '27-02-2014',
					              'i18n': {
						              'en': {
							              'description': 'This room is simple but with all the comfort one would need for a short stay. <br><br><strong>IN ROOM AMENITIES:</strong><br>\r\n\t\t  Free Wi-Fi Internet Access, Cable TV, Minibar, Hairdryer, \r\nSuper-orthopaedic spring-mattresses, Extra bed, Flat screen TV<br><br>',
							              'title': 'Solo but happy'
						              },
						              'ro': {
							              'description': 'Această cameră e micuță, dar cu tot ce vă trebuie pentru o ședere plăcută.<strong><br><br>DOTĂRILE CAMERELOR:</strong><br>&nbsp;Acces internet (Wi-Fi), TV \r\ncablu, Minibar, Uscător de păr, Saltele super-ortopedice, Televizor LED<br>',
							              'title': 'Singur dar fericit'
						              },
						              'hu': {
							              'description': 'Ez a szobánk kicsi, de minden megvan benne<strong>,</strong> ami egy kényelmes tartózkodásnak része.<strong><br><br>SZOBÁINK FELSZERELÉSEI:</strong><br>\r\n\t\t  <strong>i</strong>nternet hozzáférés (Wi-Fi), kábel TV, minibár, hajszárító, \r\nszuper-otopédikus ágybetétek, LED képernyős televízió <br>',
							              'title': 'Egyedül de jókedvűen'
						              }
					              },
					              'album_url': 'https://picasaweb.google.com/116008649935898699063/SGL',
					              'prices': {
						              'values': [150],
						              'special': [{
							                          'end': '04-05-2014',
							                          'start': '01-05-2014',
							                          'repeat': 'no',
							                          'values': [230]
						                          }]
					              },
					              'id': 172001,
					              'quantity': '1'
				              }]
			},
			'104002': {
				'subcategories': [],
				'weight': '4',
				'created': '04-03-2013',
				'parent_category': 'None',
				'modified': '21-03-2014',
				'visible': 'True',
				'i18n': {
					'ro': {
						'description': 'Pentru a rămâne puternic pe piaţă ne trebuiesc parteneri. Uitaţi-vă cine ne ajută:<br>',
						'title': 'Parteneri'
					},
					'en': {
						'description': 'To be strong on the market one needs help. See some of our partners:<br>',
						'title': 'Partners'
					},
					'hu': {
						'description': 'Vállakozást megtartani csak együttműködve lehet. Íme akik ebben segítenek:<br>',
						'title': 'Partnereink'
					}
				},
				'id': 104002,
				'contents': [{
					             'category': 104002,
					             'weight': '0',
					             'created': '16-07-2013',
					             'modified': '05-02-2015',
					             'i18n': {
						             'ro': {
							             'description': '<a rel="nofollow" target="_blank" href="https://www.tourist-informator.info/">https://www.tourist-informator.info/</a> <br><br>',
							             'title': 'Turist-informator'
						             },
						             'en': {
							             'description': '<a rel="nofollow" target="_blank" href="https://www.tourist-informator.info/">https://www.tourist-informator.info/</a> <br>',
							             'title': 'Turist-informator'
						             },
						             'hu': {
							             'description': '<a title="Link: https://www.tourist-informator.info/" rel="nofollow" target="_blank" href="https://www.tourist-informator.info/">https://www.tourist-informator.info/</a>',
							             'title': 'Turist-informator'
						             }
					             },
					             'id': 198001
				             }, {
					             'category': 104002,
					             'weight': '0',
					             'created': '07-11-2013',
					             'modified': '07-11-2013',
					             'i18n': {
						             'en': {
							             'description': '<script type="text/javascript" src="http://www.infopensiuni.ro/cod/cod2.js"></script><a href="http://www.infopensiuni.ro/" target="_blank"><img title="Image: http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" src="http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" style="border: none;" alt="Cazare vile si pensiuni"></a><br><a title="Link: http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" href="http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" style="font-size: 11px; color: #000; text-decoration: none; font-family: Arial;">Cazare Sfantu Gheorghe (CV)</a>',
							             'title': 'InfoPensiuni.ro'
						             },
						             'ro': {
							             'description': '<script type="text/javascript" src="http://www.infopensiuni.ro/cod/cod2.js"></script><a href="http://www.infopensiuni.ro/" target="_blank"><img src="http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" style="border: none;" alt="Cazare vile si pensiuni"></a><br><a href="http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" style="font-size: 11px; color: #000; text-decoration: none; font-family: Arial;">Cazare Sfantu Gheorghe (CV)</a>',
							             'title': 'InfoPensiuni.ro'
						             },
						             'hu': {
							             'description': '<br><script type="text/javascript" src="http://www.infopensiuni.ro/cod/cod2.js"></script><a href="http://www.infopensiuni.ro/" target="_blank"><img title="Image: http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" src="http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" style="border: none;" alt="Cazare vile si pensiuni"></a><br><a href="http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" style="font-size: 11px; color: #000; text-decoration: none; font-family: Arial;">Cazare Sfantu Gheorghe (CV)</a>',
							             'title': 'InfoPensiuni.ro'
						             }
					             },
					             'id': 260002
				             }],
				'bookables': []
			},
			'660001': {
				'subcategories': [],
				'weight': '0',
				'created': '21-03-2014',
				'parent_category': 'None',
				'modified': '31-07-2014',
				'visible': 'True',
				'i18n': {
					'ro': {
						'description': '<span>După\r\naproape 6 luni de construcţii şi remodelare pe 23 aprilie 2014 cafeneaua PRESSO\r\nsa deschis în faţa publicului. Pe lângă un sortiment mai larg de cafea va\r\noferim și prăjituri de casă făcute cu grijă la fața locului. Suntem sechiși de\r\nluni până sâmbătă între orele 10 și 22</span><br><br><br><br>',
						'title': 'Ferdinand Presso'
					},
					'en': {
						'description': '<span>After\r\nalmost half a year of construction and refurbishing on the 23rd of April the\r\nPRESSO coffeehouse is finally opened for the public. Apple and soft cheese pie,\r\nchocolate muffin, ham and vegetable rolls - all that you can have as a side\r\ndish to a good coffee.</span>&nbsp;&nbsp; <br>',
						'title': 'Ferdinand Presso'
					},
					'hu': {
						'description': '2014 áprilisában 23.-án megnyitotta kapuit a Ferdinand\r\nPRESSÓ. Almás pite, tehéntúrós pite, csokis meggyes muffin, sonkás és zöldséges\r\nkiflik! ezeket lehet élvezni a kávék és italok mellett hetfőtől-szombatig\r\n10-től 22-ig.\r\n\r\n<br><br><br><br>',
						'title': 'Ferdinánd Presso'
					}
				},
				'id': 660001,
				'contents': [{
					             'category': 660001,
					             'weight': '0',
					             'created': '09-04-2014',
					             'modified': '10-04-2014',
					             'i18n': {
						             'en': {
							             'description': '&nbsp;<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6000242192026832193">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
							             'title': 'Our new face'
						             },
						             'ro': {
							             'description': '<br>&nbsp; <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6000242192026832193">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
							             'title': 'Noua fata a pensiunii Ferdinand'
						             },
						             'hu': {
							             'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6000242192026832193">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div><br>',
							             'title': 'A megujult arcunk'
						             }
					             },
					             'id': 810001
				             }, {
					             'category': 660001,
					             'weight': '0',
					             'created': '31-07-2014',
					             'modified': '31-07-2014',
					             'i18n': {
						             'ro': {
							             'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6042139461370736705">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
							             'title': 'Meniu'
						             },
						             'en': {
							             'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6042139461370736705">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
							             'title': 'Menu'
						             },
						             'hu': {
							             'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6042139461370736705">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
							             'title': 'Menü'
						             }
					             },
					             'id': 900001
				             }],
				'bookables': []
			}
		},
		'content': {
			'62022': {
				'category': 64022,
				'weight': '0',
				'created': '26-12-2012',
				'modified': '13-11-2013',
				'i18n': {
					'en': {
						'description': 'Although we do not have a restaurant at the Ferdinand pension, being in the center gives you the possibility to choose among various places with local or international cuisine.<br><br><b>Nearby restaurants:</b><br><span>•&nbsp; Bastion<br></span>•&nbsp; Rézkakas<br><span>•&nbsp; Sugáskert <br>\r\n\t\t  •&nbsp; </span><span>Parc<br>\r\n\t\t  •&nbsp; Tribel FF <br>\r\n\t\t  •&nbsp; Pivnița Sfântu Gheorghe<br></span>•&nbsp; Ganesa<br>•&nbsp; Restaurantul Kolcza<br><br><div data-picaslide-albumid="EatingOut" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
						'title': 'Eating out'
					},
					'ro': {
						'description': 'Cu toate că la Pensiunea Ferdinand se serveste numai micul dejun fiind în centrul orașului&nbsp;suntem înconjurați de restaurant și baruri.<br><b>Restaurante în apropiere:</b><br><span>•&nbsp; Bastion<br></span>•&nbsp; Rézkakas<br><span>•&nbsp; Restaurantul Sugáskert <br>\r\n\t\t  •&nbsp; </span><span>Restaurantul Parc<br>\r\n\t\t  •&nbsp; Tribel FF <br>\r\n\t\t  •&nbsp; Pivnița Sfântu Gheorghe<br></span>•&nbsp; Ganesa<br>•&nbsp; Restaurantul Kolcza<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="EatingOut">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br><br>',
						'title': 'Poftiți la masă!'
					},
					'hu': {
						'description': 'Annak ellenére, hogy a panziónak nincs vendéglője, könnyen finom falatokhoz jutnak vendégeink. Körülöttünk jónéhány vendéglő van ahol megtalálják a helyi konyha jellegzetességeit, de a nemzetközi finomságokat is.<br><span><strong>1 Km-en belüli étkezési lehetőségek:</strong> <br>\r\n\t\t  •&nbsp; Bastion<br></span>•&nbsp; Rézkakas<br><span>•&nbsp; Sugáskert Vendéglő <br>\r\n\t\t  •&nbsp; Park Vendéglő<br>\r\n\t\t  •&nbsp; Tribel FF <br>\r\n\t\t  •&nbsp; Szent György Pince<br></span><span>•&nbsp; Ganesa<br></span><span><span>•</span>&nbsp; Kolcza vendéglő<br>&nbsp;\r\n\t\t  </span><br><div data-picaslide-albumid="EatingOut" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>',
						'title': 'Vendéglők a közelben'
					}
				},
				'id': 62022
			},
			'62023': {
				'category': 64022,
				'weight': '2',
				'created': '26-12-2012',
				'modified': '21-08-2013',
				'i18n': {
					'ro': {
						'description': '<span>•&nbsp; <b>Muzeul Național Secuiesc</b> (clădire proiectată de Kós Károly) <a title="Link: http://www.sznm.ro" rel="nofollow" target="_blank" href="http://www.sznm.ro">http://www.sznm.ro/</a> <br>\r\n\t\t  •&nbsp; <b>Biserica fortificată reformată</b> (cu fortificație din sec. al XV-lea)<br>\r\n\t\t  •&nbsp; <b>Bazarul</b></span><b> </b>(astăzi Galeria de Arte<b> </b><span>”Gyárfás Jenő”)<br></span>•&nbsp; <b>Galeria de Arte Contemporane ”Magma”</b> <a rel="nofollow" target="_blank" href="http://www.magma.maybe.ro/">http://www.magma.maybe.ro/</a> <br><span>•&nbsp; <b>Centrul de sport și agrement</b> (piscină de înot, saune, squash, bowling, aerobic, grotă salină) <br>\r\n\t\t  •&nbsp; <b>Pârtii de schi </b>(10Km de oraș)</span><br><span>•&nbsp; <b>SUGAS Plaza</b> </span><br>',
						'title': 'De văzut - Timp liber'
					},
					'en': {
						'description': '<span>•&nbsp; <b>Sekler National Museum</b> (ethnographic and historical museum) <a title="Link: http://www.sznm.ro" rel="nofollow" target="_blank" href="http://www.sznm.ro">http://www.sznm.ro/</a> <br>\r\n\t\t  •&nbsp;<b> Fortified Reformed Church </b><br><b>• The Bazar</b></span><b> </b>(today<b> </b><span>Gyárfás Jenő Art Gallery)<br></span>•&nbsp;<b> MAGMA</b> - Gallery of Contemporary Arts <a title="Link: http://http://www.magma.maybe.ro/" rel="nofollow" target="_blank" href="http://www.magma.maybe.ro/">http://www.magma.maybe.ro/</a> <br><span>•&nbsp; <b>Sports center</b> (swimming pool, squash, bowling, aerobic, salt therapy)</span><span><br>•&nbsp; <b>Ski slopes </b>(6 miles from town)</span><br><span>•&nbsp; <b>SUGAS Plaza</b>&nbsp; </span><br>',
						'title': 'What to see'
					},
					'hu': {
						'description': '<span>•&nbsp; <b>Székely Nemzeti Múzeum</b> (Kós Károly egyik remeke) <a title="Link: http://www.sznm.ro" rel="nofollow" target="_blank" href="http://www.sznm.ro">http://www.sznm.ro/</a> <br>\r\n\t\t  •&nbsp; <b>Református erődtemplom</b> (XV. sz.-i erődítménnyel ellátott templom)<br><b>\r\n\t\t  </b>•<b>&nbsp; </b></span><b> A Bazár</b> (ma <span>Gyárfás Jenő Képtár) <a rel="nofollow" target="_blank" href="http://www.magma.maybe.ro/">http://www.magma.maybe.ro/</a> <br></span>•&nbsp; <b>Magma</b> kortársművészeti kiállítótér<br><span>•&nbsp; <b>Sport- és szabadidő központ</b> (fedett uszoda, szauna, fallabda, bowling, aerobic, sóbarlang) <br>\r\n\t\t  •&nbsp; <b>SUGAS</b> – bevásárlóközpont<br></span><span><span>•&nbsp; <b>Sípályák </b>(Sugásfürdőn, 10 km-re a várostól) </span></span><br>',
						'title': 'Látnivalók - Szabadidő'
					}
				},
				'id': 62023
			},
			'117001': {
				'category': 64022,
				'weight': '1',
				'created': '05-03-2013',
				'modified': '19-08-2013',
				'i18n': {
					'en': {
						'description': 'One of Transylvania\'s easternmost towns, Saint George boasts with several precious buildings of the 19th century and a nationwide known cultural life through its theaters, museums and the activity of cultural associations. <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">[<img alt="Insert picasa album" src="/static/img/picasa_s.png"> gallery comes here]</div>',
						'title': 'Our Town'
					},
					'ro': {
						'description': 'Sfântu Gheorghe este unul dintre cele mai estice oraşe al Transilvaniei. Fiind centrul judeţului Covasna intotdeauna a fost si centrul cultural al zonei mândrindu-se cu mai multe muzee, teatre şi asociaţii culturale foarte activi.&nbsp; <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">[<img alt="Insert picasa album" src="/static/img/picasa_s.png"> gallery comes here]</div></div>',
						'title': 'Orașul nostru'
					},
					'hu': {
						'description': '&nbsp;\r\n\r\n<p>A XIV. században alapított város\r\nolyan ékekkel büszkélkedhet mint több Kós Károly tervezte épület – köztük a Sékely\r\nNemzeti Múzeum – református vártemploma, vagy nyüzsgő kulturális élete melyet\r\ntöbb szinház és kiállítótér formal.</p>\r\n\r\n<div><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Szentgyorgy">[<img alt="Insert picasa album" src="/static/img/picasa_s.png"> gallery comes here]</div></div>',
						'title': 'Városunk'
					}
				},
				'id': 117001
			},
			'122002': {
				'category': 68001,
				'weight': '2',
				'created': '05-03-2013',
				'modified': '21-08-2013',
				'i18n': {
					'en': {
						'description': '&nbsp;Robert Zoltán POTH is the grandson of Ferdinand POTH after whoom the guesthouse is named. Robert is a talented skier who wins Brittish and other competitions in a row. See his results on <a title="Link: http://www.robertpoth.co.uk ." href="http://www.robertpoth.co.uk ." rel="nofollow" target="_blank">www.robertpoth.co.uk .</a> <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="Robert">[<img title="Image: /static/img/picasa_s.png" src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>',
						'title': 'Ferdinand\'s Grandson'
					},
					'ro': {
						'description': 'Nepotul celui după care am denumit pensiunea, Robert Zoltán POTH, este un&nbsp; talentat schior cu rezultate extraordinare în clasamentele britanice. Mai mult despre meritele lui puteți vedea pe <a href="http://www.robertpoth.co.uk" target="_blank" rel="nofollow">www.robertpoth.co.uk</a> .<br>&nbsp;<div data-picaslide-albumid="Robert" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div><br><br>',
						'title': 'Nepotul lui Ferdinand'
					},
					'hu': {
						'description': 'A névadó unokája, Poth Zoltán Robert, tehetséges síző aki egymásután \r\nnyeri a britt nemzeti és nemzetközi versenyeket. Bővebben az \r\neredményeiről a <a href="http://www.robertpoth.co.uk" target="_blank" rel="nofollow">www.robertpoth.co.uk</a> cimen.<br>&nbsp;<div data-picaslide-albumid="Robert" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div><br>',
						'title': 'A névadó unokája'
					}
				},
				'id': 122002
			},
			'173002': {
				'category': 68001,
				'weight': '0',
				'created': '16-06-2013',
				'modified': '05-02-2015',
				'i18n': {
					'en': {
						'description': 'Building a guesthouse came to us in 2004 when the family purchased a run down building in the center of Saint George. The preparation lasted 4 years until finally in the summer of 2007 we started off with 5 rooms. Later on, in 2009 and 2012 we managed to double the number of our rooms.<br>We belie that flexibility and constant development is mostly valued feature of our business. Tourists are GUESTS and they should be treated with respect.<br>At the Ferdinand guesthouse we also serve breakfast where local products and self made things make up the spine of the day\'s main meal.<br><br>',
						'title': 'As it all started'
					},
					'ro': {
						'description': 'Idea de a construi o pensiune ne-a venit în 2004 când familia a cumpărat o cladire veche din centrul orașului Sfântu Gheorghe. După 4 ani, în 2007, am început activitatea cu 5 camere. Dezvoltarea a fost continuă, astfel până 2012 am dublat numărul camerelor.<br>Credem că flexibilitatea și dezvoltarea continuă este esența unei companii. Turiștii sunt OASPEȚI și merită tratați ca atare.<br>La pensiune cazarea vine cu mic dejun. Majoritatea produselor sunt locale sau preparate de noi. <br>',
						'title': 'La început'
					},
					'hu': {
						'description': 'A Ferdinánd Panzió ötlete 2004-ben született amikor egy Sepsiszentgyörgy\r\n központjában levő, valamikor irodának használt, lerobbant ingatlan a \r\ncsalád tulajdonába került. <br>A szálláshely 2007-ben kezdte meg működését 5\r\n szobával. A szobák számát 2009-ben 8-ra sikerült emelni, majd 2011-ben \r\ntovábbi épületrészt vásároltunk meg. Ez utóbbi részt 2012 során \r\nkészítettük el és két galériás apartman lett belőle.<br>A vendéglátásban\r\n a rugalmasságot és az állandó fejlődést látjuk a megmaradás zálogának.<br>A szállással természetesen reggeli is jár. \r\nAz asztalra kerülő termékek egy része saját készítésű (dzsemek, \r\nzakuszka, vinetesaláta), mások a helyi piacról, őstermelőktől \r\nszármaznak. <br><br>',
						'title': 'Ahogy kezdődött'
					}
				},
				'id': 173002
			},
			'181001': {
				'category': 68001,
				'weight': '3',
				'created': '09-07-2013',
				'modified': '13-11-2013',
				'i18n': {
					'en': {
						'description': 'LOCAL is important to us. For breakfast you will have a choice of local dairy products, the cold-cuts are from local factories and jams are self made ones.<br><a href="https://plu">&nbsp;</a><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5901459360601829857">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br>',
						'title': 'Local products for breakfast'
					},
					'ro': {
						'description': 'Produsele locale sunt importante pentru noi. La mic dejun o să găsiți cașuri de la producători locali, mezeluri din fabrici locale și gemuri făcute de noi.<br>&nbsp;<div data-picaslide-albumid="5901459360601829857" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br><br>',
						'title': 'Produse locale la mic dejun'
					},
					'hu': {
						'description': 'Fontos nekünk a HELYI. A sajtok helyi termelőktől kerülnek az asztalra, a dzsemeket mi magunk készítjük és a felvágottak, egyeb tejtermékek is helyi gyarak termékei.<div data-picaslide-albumid="Termekek" data-picaslide-username="116008649935898699063" class="picaslide">[<img src="http://ferdinandmotel.appspot.com/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br>',
						'title': 'Helyi termékek az asztalon'
					}
				},
				'id': 181001
			},
			'187001': {
				'category': 68001,
				'weight': '4',
				'created': '09-07-2013',
				'modified': '13-11-2013',
				'i18n': {
					'en': {
						'description': 'Welcome to Seklerland, a land full of history, legends, wild nature and lavish gastronomy. A professionally guided tour can top your local experience. For a tailor made offer don\'t hesitate to contact us. <br><br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5899235359457599761">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
						'title': 'Guided tours'
					},
					'ro': {
						'description': 'Bun venit în lumea legendelor, apelor minerale și a naturii fără limite. Hoineareala devine mult mai interesantă în compania unei gizi care vă introduce în amănuntele acestei regiuni multiculturale. Pentu o ofertă personalizate nu ezitați să ne contactați.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5899235359457599761">[<img title="Image: /static/img/picasa_s.png" src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
						'title': 'Servicii de ghid'
					},
					'hu': {
						'description': 'Isten hozta önöket a legendák, borvizek és a határtalan természet földjén.&nbsp; A történelmi emlékhelyek, híres szülöttek emlékei akkor teljesedhetnek ki, ha megfelelő idegenvezető segíti a tájékozódást és mesél a "hely szelleméről". Személyreszabott ajánlatért forduljon hozzánk bizalommal!<br><br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="5899235359457599761">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
						'title': 'Idegenvezetés'
					}
				},
				'id': 187001
			},
			'198001': {
				'category': 104002,
				'weight': '0',
				'created': '16-07-2013',
				'modified': '05-02-2015',
				'i18n': {
					'ro': {
						'description': '<a rel="nofollow" target="_blank" href="https://www.tourist-informator.info/">https://www.tourist-informator.info/</a> <br><br>',
						'title': 'Turist-informator'
					},
					'en': {
						'description': '<a rel="nofollow" target="_blank" href="https://www.tourist-informator.info/">https://www.tourist-informator.info/</a> <br>',
						'title': 'Turist-informator'
					},
					'hu': {
						'description': '<a title="Link: https://www.tourist-informator.info/" rel="nofollow" target="_blank" href="https://www.tourist-informator.info/">https://www.tourist-informator.info/</a>',
						'title': 'Turist-informator'
					}
				},
				'id': 198001
			},
			'208003': {
				'category': 68001,
				'weight': '1',
				'created': '20-08-2013',
				'modified': '05-02-2015',
				'i18n': {
					'ro': {
						'description': 'A denumi pensiunea nu a fost cel mai ușor. Inițial clădirea în care se află structura de cazare era un hotel. Din aceste considerente ne-am gândit să-l numim pensiunea după vechiul proprietar ”Blaskó”. Până la urmă legăturile familiale au fost mai tari decât istoria și ne-am convenit pe numele bunucului, Póth Ferdinand, un spirit liber căruia plăcea călătoria.<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6112255888863136913">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
						'title': 'Numele pensiunii'
					},
					'en': {
						'description': 'Giving "the child" a name was not easy. The multicultural background of the geographical area didn\'t make it easier at all. As the building where the guesthouse is situated was once a hotel using the original owner\'s&nbsp; name, Blasko, seemed the right choice. At the end family ruled above history and the place was named after our Grandfather, Ferdinand POTH, who has been a free spirit and traveler.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6112255888863136913">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br><br>',
						'title': 'Our Name'
					},
					'hu': {
						'description': 'Elnevezni a szálláshelyet nem volt egyszerű. A név meg kellett feleljen a térseg multikulturális jelenjének, a reklámtudomány szabályainak és az egyéni elképzeléseinknek. Mivel az épület amiben a panzió működik eredetileg hotelnek épűlt a történelmi tulajdonos nevének (Blaskó) használata jó választásnak tűnt. Végül a "család" győzőtt a "történelem" felett és a vendégházat sokat utazó nagyapánkról, Póth Ferdinandról, neveztük el.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6112255888863136913">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>',
						'title': 'A Nevünkről'
					}
				},
				'id': 208003
			},
			'260002': {
				'category': 104002,
				'weight': '0',
				'created': '07-11-2013',
				'modified': '07-11-2013',
				'i18n': {
					'en': {
						'description': '<script type="text/javascript" src="http://www.infopensiuni.ro/cod/cod2.js"></script><a href="http://www.infopensiuni.ro/" target="_blank"><img title="Image: http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" src="http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" style="border: none;" alt="Cazare vile si pensiuni"></a><br><a title="Link: http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" href="http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" style="font-size: 11px; color: #000; text-decoration: none; font-family: Arial;">Cazare Sfantu Gheorghe (CV)</a>',
						'title': 'InfoPensiuni.ro'
					},
					'ro': {
						'description': '<script type="text/javascript" src="http://www.infopensiuni.ro/cod/cod2.js"></script><a href="http://www.infopensiuni.ro/" target="_blank"><img src="http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" style="border: none;" alt="Cazare vile si pensiuni"></a><br><a href="http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" style="font-size: 11px; color: #000; text-decoration: none; font-family: Arial;">Cazare Sfantu Gheorghe (CV)</a>',
						'title': 'InfoPensiuni.ro'
					},
					'hu': {
						'description': '<br><script type="text/javascript" src="http://www.infopensiuni.ro/cod/cod2.js"></script><a href="http://www.infopensiuni.ro/" target="_blank"><img title="Image: http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" src="http://static.infoturism.ro/interface/cod_parteneri/cod_link_parteneri_infopensiuni.gif" style="border: none;" alt="Cazare vile si pensiuni"></a><br><a href="http://www.infopensiuni.ro/cazare-sfantu-gheorghe-cv/" style="font-size: 11px; color: #000; text-decoration: none; font-family: Arial;">Cazare Sfantu Gheorghe (CV)</a>',
						'title': 'InfoPensiuni.ro'
					}
				},
				'id': 260002
			},
			'810001': {
				'category': 660001,
				'weight': '0',
				'created': '09-04-2014',
				'modified': '10-04-2014',
				'i18n': {
					'en': {
						'description': '&nbsp;<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6000242192026832193">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
						'title': 'Our new face'
					},
					'ro': {
						'description': '<br>&nbsp; <br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6000242192026832193">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
						'title': 'Noua fata a pensiunii Ferdinand'
					},
					'hu': {
						'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6000242192026832193">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div><br>',
						'title': 'A megujult arcunk'
					}
				},
				'id': 810001
			},
			'900001': {
				'category': 660001,
				'weight': '0',
				'created': '31-07-2014',
				'modified': '31-07-2014',
				'i18n': {
					'ro': {
						'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6042139461370736705">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
						'title': 'Meniu'
					},
					'en': {
						'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6042139461370736705">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
						'title': 'Menu'
					},
					'hu': {
						'description': '&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6042139461370736705">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
						'title': 'Menü'
					}
				},
				'id': 900001
			},
			'7870001': {
				'category': 68001,
				'weight': '2',
				'created': '22-12-2014',
				'modified': '22-12-2014',
				'i18n': {
					'en': {
						'description': '&nbsp;Old watermill reconstruction in progress...<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6094146983228991025">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;',
						'title': 'Preserving value'
					},
					'ro': {
						'description': 'Proiectul nostru de reabilitare a unei vechi mori de apă.<br>&nbsp;<div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6094146983228991025">[<img src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp; <br>',
						'title': 'Proiect etnocultural'
					},
					'hu': {
						'description': '&nbsp;Egy régi vízimalom ujjáélésztésén fáradozunk.<br><div class="picaslide" data-picaslide-username="116008649935898699063" data-picaslide-albumid="6094146983228991025">[<img title="Image: /static/img/picasa_s.png" src="/static/img/picasa_s.png" alt="Insert picasa album"> gallery comes here]</div>&nbsp;<br>&nbsp;',
						'title': 'Értékmentés'
					}
				},
				'id': 7870001
			}
		},
		'booking': {},
		'bookable': {
			'57035': {
				'category': 74005,
				'places': '4',
				'weight': '0',
				'created': '26-12-2012',
				'modified': '30-04-2014',
				'i18n': {
					'ro': {
						'description': 'Cele două <b>apartamente</b> se află într-o clădire construită în anii 1800. Din cauza înălţimii încăperilor am avut posibilitatea să construim un semietaj unde am plasat dormitorul. Dedesupt aveţi un living cu o canapea extensibilă dotat cu saltea cu arcuri si televizor LED de mare dimensiuni. Tot aici gasiţi şi o minibucătărie pentru a vă ajuta la nevoie. Ca dotare standard  accesul la internet este prin Wi-Fi. <br>Pentru a vă dărui mai mult comfort baia are vană și rozeta de duș cu dimensiuni mari. Ca o altă comoditate și un bideu va stă la dispoziție.<br><br><strong>DOTĂRILE APARTAMENTELOR:</strong><br>\r\n\t\t  Acces internet, TV cablu, Minibar, Uscător de păr, Saltele ortopedice, Canapea extensibilă, Chicinetă <span>(cuptor cu microunde, cattle, vase, ustenzile), </span>Aer condiționat (nu în fiecare apartament), Televizor plat de mare dimensiuni<br>',
						'title': 'Dormi cu stil'
					},
					'en': {
						'description': 'Our two <b>apartments</b> are situated in a building from the 19th century. Due to their inner space the bedroom is situated on a balcony just above the living room. The later is fitted with a comfortable sofa-bed, large TV and a kitchenette for the maximum comfort. As a basic amenity free Wi-Fi is also available. The bathroom is also not standard for a 3star place. Here you can enjoy a bath, a light summer rain shower and a bidet is also at your disposal.<br><br><strong>IN ROOM AMENITIES:</strong><br>\r\n\t\t  Free WI - FI Internet Access, Cable TV, Minibar, Hairdryer, Super-orthopaedic spring-mattresses, Sofabed, Kitchenette <span>(microwave oven,cattle, dishes and tableware), </span>Air conditioning (not in every apartment), Large flat screen TV<br>',
						'title': 'Sleep with style'
					},
					'hu': {
						'description': 'Két <b>apartmanunk</b> egy XIX. századi házbanhelyezkedik el melye több mit 4 méteres belmagassága lehetővé tette, hogy galérán alakítsuk ki a hálórészt. A standard franciaágy mellett a nappaliban egy kihúzható kanapé is található mely, rugós matracával, pillanatok alatt, kitűnő ággyá varázsolható. Az apartmanok konyhasarokkal is el vannak látva, hogy a legtöbbet nyújtsanak a vendégeknek. A szélessávú internet mellett egy nagyméretü TV is a szórakoztatast szolgálja. A kényelemre nem csak a szobában figyeltünk. A fürdő káddal és nagyméretü zuhanyrózsával és bidével van felszerelve. <br><br><strong><br>APARTMANJAINK FELSZERELÉSEI:</strong><span><br>szuperortopédikus ágybetétek, ingyenes Wi-Fi csatlakozás, </span>kábel TV,&nbsp;<span></span><span>nagyméretű LED TV, </span>minibár,&nbsp;<span></span>konyhasarok (mikróhullámú sütő, vízmelegítő, edények), <span>hajszáritó, </span>pótágy, <span>légkondiciónálás (nem minden szobában)</span><br>',
						'title': 'Aludjon stílusosan'
					}
				},
				'album_url': 'https://picasaweb.google.com/116008649935898699063/ApartmanPensiuneaFerdinandPanzio',
				'prices': {
					'values': [210, 230, 250, 270],
					'special': [{
						            'end': '04-05-2014',
						            'start': '01-05-2014',
						            'repeat': 'no',
						            'values': [300, 300, 330, 360]
					            }]
				},
				'id': 57035,
				'quantity': '2'
			},
			'73005': {
				'category': 74005,
				'places': '2',
				'weight': '0',
				'created': '26-12-2012',
				'modified': '27-02-2014',
				'i18n': {
					'en': {
						'description': 'Our 7 <b>twins</b> are furbished to suit several needs. In 2013 five of our rooms have been fitted with air conditioning to raise the comfort through the hot summer days. Shortly all our rooms will have large flat screen TVs. All our rooms are non-smoking.<br><br><strong>IN ROOM AMENITIES:</strong><br>\r\n\t\t  Free Wi-Fi Internet Access, Cable TV, Minibar, Hairdryer, Super-orthopaedic spring-mattresses, Extra bed, Air conditioning (not in every room), Large flat screen TV<br>',
						'title': 'Rest in two'
					},
					'ro': {
						'description': 'Cele șapte<b> camere duble</b> diferă pentru a satisface cerințele diferitelor clineți. În 2013 patru dintre camerele noastre au fost dotate cu aer condiționat pentru a vă ajuta în scurta dar caldă vară. În curând toate camerele vor primi și televizoare mari.<br><br><strong>DOTĂRILE CAMERELOR:</strong><br>&nbsp;Acces internet (Wi-Fi), TV cablu, Minibar, Uscător de păr, Saltele super-ortopedice, Pat suplimentar, Aer condiționat (nu în toate camerele), Televizoare LED cu ecran mare.<br>',
						'title': 'Relaxare pentru doi'
					},
					'hu': {
						'description': 'A hét <b>kétágyas</b> <b>szobánk</b> felszereléseikben ugyan hasonlóak, de egyedi megoldásaik több igényt elégítenek ki. 2013-ban négy szobát légkondicionálóval is elláttunk, hogy a rövid, de olykor meleg nyáron hűsülést biztosítson. Hamarosan minden szobában nagy méretű LCD képernyős televizió is lesz.<br><strong><br><br>SZOBÁINK FELSZERELÉSEI:</strong><br>\r\n\t\t  internet hozzáférés (Wi-Fi), kábel TV, minibár, hajszárító, szuper-otopédikus ágybetétek, pótágy lehetőség, légkondicionálás<strong> </strong>(nem minden szobában), nagy méretű LCD televizió<br>',
						'title': 'Két személyes kényelem'
					}
				},
				'album_url': 'https://picasaweb.google.com/116008649935898699063/DoubleTwinPensiuneaFerdinandPanzio',
				'prices': {
					'values': [170, 190],
					'special': [{
						            'end': '04-05-2014',
						            'start': '01-05-2014',
						            'repeat': 'no',
						            'values': [240, 250]
					            }]
				},
				'id': 73005,
				'quantity': '7'
			},
			'172001': {
				'category': 74005,
				'places': '1',
				'weight': '3',
				'created': '15-06-2013',
				'modified': '27-02-2014',
				'i18n': {
					'en': {
						'description': 'This room is simple but with all the comfort one would need for a short stay. <br><br><strong>IN ROOM AMENITIES:</strong><br>\r\n\t\t  Free Wi-Fi Internet Access, Cable TV, Minibar, Hairdryer, \r\nSuper-orthopaedic spring-mattresses, Extra bed, Flat screen TV<br><br>',
						'title': 'Solo but happy'
					},
					'ro': {
						'description': 'Această cameră e micuță, dar cu tot ce vă trebuie pentru o ședere plăcută.<strong><br><br>DOTĂRILE CAMERELOR:</strong><br>&nbsp;Acces internet (Wi-Fi), TV \r\ncablu, Minibar, Uscător de păr, Saltele super-ortopedice, Televizor LED<br>',
						'title': 'Singur dar fericit'
					},
					'hu': {
						'description': 'Ez a szobánk kicsi, de minden megvan benne<strong>,</strong> ami egy kényelmes tartózkodásnak része.<strong><br><br>SZOBÁINK FELSZERELÉSEI:</strong><br>\r\n\t\t  <strong>i</strong>nternet hozzáférés (Wi-Fi), kábel TV, minibár, hajszárító, \r\nszuper-otopédikus ágybetétek, LED képernyős televízió <br>',
						'title': 'Egyedül de jókedvűen'
					}
				},
				'album_url': 'https://picasaweb.google.com/116008649935898699063/SGL',
				'prices': {
					'values': [150],
					'special': [{
						            'end': '04-05-2014',
						            'start': '01-05-2014',
						            'repeat': 'no',
						            'values': [230]
					            }]
				},
				'id': 172001,
				'quantity': '1'
			}
		}
	}
};
App.component('migrations.data').expose({
	all: data
});
