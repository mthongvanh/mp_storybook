'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "74c6f425c9511c8a8e84150730037c22",
"index.html": "7b97712ef35994d725c98f5de23ee4d4",
"/": "7b97712ef35994d725c98f5de23ee4d4",
"main.dart.js": "ca8d0ee5677d956386da42af42274237",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5ccc93b9abf247e179b6dcf549b0f0f1",
".git/config": "4f8ea221e009db68c8318e016fe3067a",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/87b01fff964ff4077ccea2a70472f5ff39445e": "dd02d23afdd613faa7e0f0ccf0452cc1",
".git/objects/59/cdaaac2d215e18413c41ad9c3628eee61f5442": "c84b9a1bee5bf079f668c4b850cb3b93",
".git/objects/0c/76908999a5fbc9a055fed2e3dc52ee9b29cf86": "a2d50b14f3051f935d9e218a88f80998",
".git/objects/0c/2fa5008d6cb2d7ce714621b62386f7ed1795ea": "babc31c78780bc9b7347b87703df1a9b",
".git/objects/3e/5d9ffb7cab13469c9465ae65dcae7c3bfc5ef9": "5de5bc3a31ca6513d44d010ad62c7276",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/57/c054a10aa8a96a86df7b2cf2d70680c2dc8001": "0633d67137ea719c4e1572e45c8df9c8",
".git/objects/03/2a19c5b13a97f0b72ff1fb33ba6697146df478": "2730bc98faf4f75383255d74ed3f1eeb",
".git/objects/03/dd76fb1a1768cc22b9b20896c9ecd9030b5836": "683f07753e9e8ba3360ccfdd5e8b2805",
".git/objects/03/ee63ff21c931a60f69211f8d13e5187d819799": "ea44fffff4cd90c5f1c9eb8fc3c2ab0c",
".git/objects/04/b14b769222448982efe3f735003f417074eaa4": "0407b2147597a21d05107a1c8c829958",
".git/objects/6a/c3976e7227d5d83eafb65a64ca3c7e6efc49f3": "94b1c1ce38d36539491d5abea9aee777",
".git/objects/32/a824357f7f94a36ca5dd2bd834ff54243e1bdb": "04205864b7ad51f41517b2ee4b8ba985",
".git/objects/56/1fd359715b687f3773b8e9493ea12e9d313d79": "49b088331fd6b73fd5e1e93c66681df1",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/51/dd189d02c968965cb6552ef2d0091eedf27ab1": "644371652486cf3df843b2b1b6e23b67",
".git/objects/58/d70228c66f7dceb92feea9fddf17c9fb25f5f3": "da4d8589ca8da40726d980641b595bb3",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/5a/ba1da869de10d225154e217d8fe6bf544233d3": "4dcaf31f63f34d48524acc7fb04d740d",
".git/objects/05/cb5ed19199dd50d7e47808bae558b8764c201e": "b5ab77a99ef5603bddfe4b7a664aeadf",
".git/objects/02/99326e06e1abb18de5e95423318e66e5fa4760": "92b52022fcc150b35fb48d6f2bfba36d",
".git/objects/a4/e412f413a484868b0a206cbca753b13b2b067d": "20bdb3dfd242803db2142fc6e62e8a48",
".git/objects/b5/68a406eb8036d134fababafb26952ae4273e06": "8babdeccb977d1025ac54b9b97d63d76",
".git/objects/ac/dc3834a6622a1bcbdf5cbc9343715ab1dffabf": "7876b5fc5eb4f46c77ef1b9f976dd1c6",
".git/objects/ac/560424c6d07677ca0ae3e36faa120ff083d7aa": "d5cf40867e7b80211940a25eccae3ae7",
".git/objects/d7/f400fc6a0a6ff6cee3356375322c155d298a77": "2e5fa5afef1e04baf88282b4cf30c672",
".git/objects/d7/60dc8c81d363f5d652e13b11a4750167166b4a": "7a50454e1854f9a066b79ade84c2c8e2",
".git/objects/df/678a1332c43c7735baeafb2ff924c08ecfaa7d": "b566577c2b89693d6f09218a3cd7747b",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/a2/1211af323ab84773cae36c441804e2b4333736": "80e375e15cebb1617a6f680c2375b45a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/152c39c01c8152ddd92c666c2955f54c32dccd": "edd02c4bd731170613a7f7b0229f0a61",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/8a8f092e611db5b0171017422f48a31dbe5de2": "3be554668be162b80029ee623562ea69",
".git/objects/f4/db165c0216c2972ec8907ba33758cc62f9518f": "7fe2312f21cd2fdb3c1c8f59a937c83d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/ca393ec1f66d1759140f492cfc8eb4b751f428": "d0054ad6f0ff5a30aaa7c05a6be22693",
".git/objects/fd/44c05059d74ef6eff977ac9ebe0bcb60bce23c": "7ca1526f5f4a0fe3070811456aab00c6",
".git/objects/fd/320b5f2f356ecac218f4d47f07f893b2f54283": "c7d019f03f0c18d1f1c8c29fa725540f",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/f5/b869f45dca20a3663ed58f052c99123a769aff": "bfff84917318b2b8df10b5568188c6b9",
".git/objects/e4/d0490ad4938d49efb1c5bbc098c1a85bfc2e23": "0a639cefa6329247f84ffca57fef0db8",
".git/objects/e4/4debd0790c5f731822e0434c56d76576a8fdf7": "ed0a0ad9eba196fde45fce48fb4d30dc",
".git/objects/fb/c2526be3ffe58bb5d755971f5f96fe744e06d0": "85a4e30592ed8be2d913340fe71279ff",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/fdf5c128c3954c2ee313ef6e968fb9c5d85916": "8bbbae5455892ba6cfccab80f7505f58",
".git/objects/20/2b03d8782d92fa6803612150ae270b86a694e9": "0aa2b416abf4060b0d546fd040292286",
".git/objects/20/c924b6804f6c7d03edb800d1fe382be74b02cb": "1786d6442e491f925663d1df33490e4a",
".git/objects/4b/12893cd2e9fae8c16ba94114b3e08d463a65cc": "4d1b95f130d18d23fab24cb5dbc62b6c",
".git/objects/11/79b2d55592f130618f8d6718f7c84572db830a": "cd97577a673998f6a6355091c02fc090",
".git/objects/11/4388b1a6d28bb7bd3ad82d957f1fe465f19892": "8279ebdb0fcea7118e59e88529e194fc",
".git/objects/7d/ed813b4b49c042c79346460961745c94332562": "de2e4ccbd6d38782ba0e6a1f2621a01f",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/7c/00e57b677fbc3979b91522ca35016d29ddd5f7": "65678b5bd266e4850fff08e11057ed32",
".git/objects/7c/10286833ae0022880cf9dbdceac9267d89e14f": "9227a62af815f8585866355693b3efa8",
".git/objects/16/fed413705352d60f5dbe310929eb91428c8a72": "e951ef34d196bfec59379972b9d3e75d",
".git/objects/1f/ce28c81fdda21909f7a7528e62488a36ca73d3": "d7b13cdb8ea0189449bdd125272fac43",
".git/objects/73/9b7e6d5ed8603759b3e19db32676bc1a5ee0df": "10241c60de15d6a66d1cfafdb96f2655",
".git/objects/87/1368cbf5415fff17f7f04e42b27957854aed4c": "f5a89bc2300f607a1ab7983ada015e3a",
".git/objects/74/468159b5b03221f7210443ca549e5414f391ca": "3ef3fbe8524a744557b773167266071f",
".git/objects/74/e114b27e61e1dbb3481fe5e9962b2d6dda0ce8": "e16750ad0ddd5f7be6114590433168e3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/377b33d1b56c5a62df513e62a475c7b1683e1f": "59f1d251db9fa1a560ba1da7aceb042d",
".git/objects/4c/0fd3fa1f70d8dacfcce41efceee066e2e708a2": "6031d93add9c4bcb28781df70f2e0f02",
".git/objects/4c/7dc81595bcd1e6c8cb6294a2c1393063c30356": "281fc86f02cce6598659296ae60e0914",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/f23d81f3ed4d0612e20665db7f0c80eb9343be": "d78aa00ed59f502a8e9abcff14d65a4c",
".git/objects/00/b96d1f7a4115b2db5a94bffae805b166221091": "033e55ac651c29dbee4d837fc36271ba",
".git/objects/6e/612e8eec015be7fa01ed3d14c5d7c6cf350da8": "264eb7699dbecea6acd3fbb427111b8a",
".git/objects/9a/43a3ad848a904b91bb12465e0992e0fccb4d91": "37b581afb69f22f5de68cedb90858504",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/31/fd5e51bea11a539fa1ebc4731aa3336bb64879": "ded50770ff80faf55b1025f700e87ed3",
".git/objects/65/fdc2f876322bc36a5244ad36f8a40c20528eb3": "80bfce36f293199a88ae8548d784bba9",
".git/objects/62/f37fdc03b7f9647b9c22acea1fb9e00b70a565": "354069f008647ed0bd3cf9fadaea2433",
".git/objects/3a/e09aa3c7192e1aedb523b72bd301fb4f55829f": "870ba9d8af76829efd0c69ba6c636e3a",
".git/objects/54/ab88fb5c041abc853b030f164c52f29142099c": "b2c1bf97dd0a661179465a2579e276cb",
".git/objects/53/6cc182056a8cce1c5a38d013d220a556455386": "7ba41f192bc2d6d62569ebf61ba601cc",
".git/objects/3f/3bf8284f2253083ee4a627b9f1e8fac7292c22": "a2032199dd166cc4bb82f39d7263b0cd",
".git/objects/3f/9feeb5f2b2b71b81f4cedc8406771eb2741445": "f5f3d034058f7361565d1383a80f0986",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/37/c458144cb56d48e09f35607efc42c2b8e112c5": "664fb305c6b7b11458f798b9c70ab342",
".git/objects/37/bc913dcbbd21ce186fc1a088cbd8e0fa84c5bd": "41b6a27997620085575173ac063570c1",
".git/objects/01/fc0eea80ede9a4c4d88b8e203251af8a59c16c": "f4b4b6d994ba3ff2015d3ad18400ac7e",
".git/objects/01/59bf744da93089dc74439a27becd88f69f2088": "a6a7eeaa21c97e1091fa566d080be718",
".git/objects/39/5274747fecf79ced99508d3c7ec31dc5b3043c": "18fbcb510178c27d613a5d4d54057514",
".git/objects/39/6bc764bff8d87b9a61bd824f84deb0d9f949dc": "fbb3fc4ab8d54f3e9725f6c51c35663e",
".git/objects/55/b5f6d6ada2df3b2dac017cfc50082783b9e3c1": "54afc81b97b7a22998fa83bb683129ee",
".git/objects/63/b2b5819c762d280361498345f3b96a60cabd87": "a31a4ff108c37fb8c1b88474a74601ca",
".git/objects/64/e172031ea369a89ba65024b8d5690d6fbfcf9f": "e46eeb0e4c7027eac3db4b4c4bcc8065",
".git/objects/d3/72030919e1eb19f7e812de589feb4170875306": "4b813782044c04bc6ee18bee6c73121c",
".git/objects/dc/79a6c3ec96136f7c638c07e1f392382d95975c": "b925d619cf6dbb09dbd4fb767f9587bc",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/b6/ec7736c7cdb4852f48089d6412c75874d665c9": "4c260d63c9653dd4bfa35b25edd7f51d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/feeb0ed09cdaa76aaea4adfa37fcdad9748b13": "aa5a4b2c503f671ee3d62fa72c576fa9",
".git/objects/de/d626d48f7ebdba2d549e3661101290b57203dd": "f37f5ba37ee6bf984aec6cb87397b7d5",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/078f7e22a2def7029e364ca52799d0985ec564": "59d542c755f7cc00461a5e491395044e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/b4b753f9e12eff762aba682c5c84fa6d7c7d82": "2c48f901f709e73fc09ea43d43d285c4",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f7/1f721e81f7868cf41aacc1b3770d194c8952c5": "e5b98b0ae29f8dcf837615b55e520224",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/95b9f27dc84fb082ad07f5e0f4c004a023611e": "09f3495f455640646722e06a0c3bde3b",
".git/objects/cb/e38394c15fd971f3be3449200da6accd2252dc": "4410e29cd9dd83494531a4cbb6791592",
".git/objects/e0/49a60794efc6b1557a9a26e6b8901791a9d02e": "fe736022c8e0c2a70400b8f0594e49e1",
".git/objects/79/55e2ed09b7a196854359f0d6a650a1d16dce3d": "f4ef9a18639708ae25bb15bcf6c4a8a1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/41/f6bed4366d3c410b7ad4c55e9e445c7591ff8d": "49b7a7814bcb2a0e35bb5084bdc1fd87",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/77/cb15ed6d6d781f77a33cf852bdf4e4a051ad3e": "4d92197e9a20eae9a16808730289a8f7",
".git/objects/48/d61dd120f0fb2ce9861b974f590f67a4350f72": "650c11d92b62bc024fdf62cbaffb885c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/12/8d1a775d0f710ad28f3ad90f7fa4747cca066d": "6edfb0e230b629f7ada0b5435ffc3138",
".git/objects/85/e4cacd113f134d6e99bc62b0a3690031f63ee9": "2ab9ca145b0644d9478f5a1472196d75",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/a12899f74049f6fef1cf9ef17e40d98fb929f4": "887888024d1768fc6358ee12b39be673",
".git/objects/49/669866ea9d68f8cf378c09fe89e1a361390a5e": "c9e47309515906b9be83d97391b46213",
".git/objects/47/e2f1bfb4279cc1ea7834e58f1ad0c0ad7bad3d": "c6630c2860132d654c76e84d042f78f8",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/78/5bae084bdb454a7fe74a5fc6028781a1a98737": "35f715eaa32d5dd0f3f5e7bd822f8224",
".git/objects/78/c06c55b001ec45f12f3e88e425345469f9814f": "e911727b824bd18893793a30e494f555",
".git/objects/7f/e32c7c436100cd85e34613c84bd31cf3a2f86e": "4c7473bfc55d890b358e326343bca696",
".git/objects/7f/b53c68aa772c47d80fd55a3e494b17487d9bba": "dff60149ad256fe0a7ebdc98ef2515cb",
".git/objects/7a/24637cc1e5149210e0d13c5d1f6455d462ea07": "92b79deeef719a9a3c669b8bafacd278",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f5120044dab70d11b8a934590b15a444",
".git/logs/refs/heads/main": "f5120044dab70d11b8a934590b15a444",
".git/logs/refs/remotes/origin/main": "e428cb74b51b90499be638f50b13db9e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a238aa3a796101e848c2f57b7306e974",
".git/refs/remotes/origin/main": "a238aa3a796101e848c2f57b7306e974",
".git/index": "32b75bc6880e8047983fc2dc8ff7b056",
".git/COMMIT_EDITMSG": "5e0b024403a22a4d6c31ef4255a0153a",
"assets/images/avatar.png": "43accfafc3c9871cc2cdede09114bc9c",
"assets/AssetManifest.json": "5c66187a830d0f7df430ec6a6a7e6fb9",
"assets/NOTICES": "3a62d814a732c32ac9e3c3dab79f0383",
"assets/FontManifest.json": "dcdfc46904eb0fbc93ec479579ef1e16",
"assets/packages/uni_icons/lib/src/fonts/fa-solid-900.ttf": "e7f19ca67a615cf1b46937d0fb06f8df",
"assets/packages/uni_icons/lib/src/fonts/fa-regular-400.ttf": "6bf63c80836c0b844942bb35544e28c8",
"assets/packages/uni_icons/lib/src/fonts/fa-light-300.ttf": "bd2b394b0ece2133a059b46f87617b1b",
"assets/packages/uni_icons/lib/src/fonts/fa-brands-400.ttf": "70e65a0c310df9eafd22e37477b34fa8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/speakers/assets/default_config.json": "c12fc02a16b258f71aaf7ed05fbfd5c3",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBoldItalic.ttf": "3d69caac1feaa544d89721dffa4dae9b",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBold.ttf": "bb41f596e9c909d1279f79b06c11c3eb",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLightItalic.ttf": "18b10873671ef699a9c6b6a562c47c72",
"assets/packages/widgetbook/google_fonts/Nunito-Light.ttf": "038291099699a91e5486d90f6865865b",
"assets/packages/widgetbook/google_fonts/Nunito-Regular.ttf": "1c030dd4e715ec504fe4925864f023fe",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBold.ttf": "06578957e8dca70fbe9573fbce76c0a0",
"assets/packages/widgetbook/google_fonts/Nunito-Bold.ttf": "1387652ed98293a3e2b6639d21d2dd40",
"assets/packages/widgetbook/google_fonts/Nunito-BoldItalic.ttf": "13420730c456db9463829a7a9a8d0c3a",
"assets/packages/widgetbook/google_fonts/Nunito-Black.ttf": "85808a77c229143ee72bbb7784907da8",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLight.ttf": "9894a78faa3fc60eaa8177413c67fc9d",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBoldItalic.ttf": "8e1046cce01ec078ff8a0a03e5e061ed",
"assets/packages/widgetbook/google_fonts/Nunito-BlackItalic.ttf": "788f29842adade8caaf17be2a317e1da",
"assets/packages/widgetbook/google_fonts/OFL.txt": "ee247edc304c64bb2135b9b6ec9a203f",
"assets/packages/widgetbook/google_fonts/Nunito-Italic.ttf": "b8e5eda1dd4207b4f7488718bf1b13f9",
"assets/packages/widgetbook/google_fonts/Nunito-LightItalic.ttf": "2668f7df2cd1d2c95ca64435d9783284",
"assets/packages/meetri_security/assets/fltAuthorizationKey.pem": "08238230f6da6f3a609256a4d901f12d",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/meetri_setup/assets/mpav-banner.png": "e89fbd53ce0e91c2b710f94e93f284e0",
"assets/packages/meetri_setup/assets/login_bg.jpg": "898d9f24fe5d68e634d8485ab648e741",
"assets/packages/meetri_setup/assets/mp_logo.png": "4be7ea25e15071a7f86705deba5c0aea",
"assets/packages/meetri_setup/assets/ic_back_circle.png": "f3e2240d2b297cf0e2177fcf8f477ebd",
"assets/packages/meetri_setup/assets/mp+av.png": "8c766e9baab3e81289ea397b06b8843c",
"assets/packages/meetri_setup/assets/ic_home_circle.png": "7261269fb5a63da4ad8e14dbb835c39f",
"assets/packages/meetri_setup/assets/login_backdrop.png": "b4896cbb344e7ce5d02c41cfe7d5a952",
"assets/packages/meetri_setup/assets/default_app_icon.png": "cf49aabfdb79055d549dc504397047a1",
"assets/packages/meetri_setup/assets/bg.jpg": "55c3a31bb0a1065b612516cf69100f6b",
"assets/packages/meetri_user_service/assets/default_config.json": "bca51236adbcadda48c0b8f0f6a7dabb",
"assets/packages/dashboard/assets/default_config.json": "6578e2e5949ac4855b4271ad25fdb88d",
"assets/packages/meetri_users/assets/default_config.json": "bca51236adbcadda48c0b8f0f6a7dabb",
"assets/packages/navigation_module/assets/default_config.json": "4339a68c09dac86d945be56133c6cb06",
"assets/packages/meetri_core/test_assets/default_config.json": "bca51236adbcadda48c0b8f0f6a7dabb",
"assets/packages/meetri_theme/assets/default_config.json": "c1d1b6e895ca9b1b6cc8fd6f26745e80",
"assets/packages/meetri_login/assets/login_bg.jpg": "898d9f24fe5d68e634d8485ab648e741",
"assets/packages/meetri_login/assets/mp_logo.png": "4be7ea25e15071a7f86705deba5c0aea",
"assets/packages/meetri_login/assets/ic_back_circle.png": "f3e2240d2b297cf0e2177fcf8f477ebd",
"assets/packages/meetri_login/assets/mp+av.png": "c808a3a87ef8d7bd92c227ac22f70d6c",
"assets/packages/meetri_login/assets/default_config.json": "88f8362b84de6f379b1e82ef498e1c80",
"assets/packages/meetri_login/assets/ic_home_circle.png": "7261269fb5a63da4ad8e14dbb835c39f",
"assets/packages/meetri_login/assets/login_backdrop.png": "b4896cbb344e7ce5d02c41cfe7d5a952",
"assets/packages/meetri_login/assets/default_app_icon.png": "cf49aabfdb79055d549dc504397047a1",
"assets/packages/meetri_login/assets/bg.jpg": "898d9f24fe5d68e634d8485ab648e741",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
