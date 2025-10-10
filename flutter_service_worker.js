'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "261dcf2be00219830b66d7829bf037dd",
".git/config": "9ecea60a4b57429b750d6227664db99c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b77e0d6a02a934ce558cef853d999ced",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e06541a6798ab083183b66a428c7a49",
".git/logs/refs/heads/main": "be83c17a1703d245f7c8c5adab5c71d2",
".git/logs/refs/remotes/origin/main": "a8a6fd316aad3592a9d79a30256b5ba9",
".git/objects/02/5fe6c01de0b357be18032628efe10ea784df12": "6fa0a2013c0cabb5cf22b49e84f4d663",
".git/objects/03/141b7aaecf1d289c0ba8c0e4000a28ee75fcb2": "321e418c5e8afa6c42ee206afa91d54a",
".git/objects/06/803b2c5123f644322e7f525b5e4270cd4e8ac9": "ac99516e7bba80550e33c01ad3e28640",
".git/objects/07/83effe8e33935d2d26c2235042e6825ba7c0e1": "b973b38857c17b3c5a476dc339e1bc58",
".git/objects/08/03eaa5100c5072d3c583324fdec0effbda1270": "7de173267db7a0aa25f24d2a33bda6a3",
".git/objects/0b/742e1ece1c566bd9d167eb05429dcf3e8201ca": "7151584de4674a5caa526a3e0b77f125",
".git/objects/0b/bba013d54980137f847d1d46569f3e4637c2ac": "5bf02041b1d7fd1f039db9abafed6cc4",
".git/objects/0e/faa50c72d9fc2fa34234b6376596375de8a48f": "c7f393e31a159952a01fbba222bb0b24",
".git/objects/0f/a23f167bf73a41f5f7217d88e4009b1557fba1": "6f73176df69c0246ed60a439900a8174",
".git/objects/18/eeac0c990fd84fca919e5dfbf928f0b6cee488": "d0e09bff158344b293b854ce917a986a",
".git/objects/19/c3713b190083faa7c6d5b4ee26c2f992f72b7c": "793ecdbb64ea9220a1194a4074ca9eba",
".git/objects/1a/67b5f986f6f8ea6dc7f55da37167b3db04ca3e": "edd80b625087f57f0aa3a0a3dd479c40",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/7c9c97230eed0424cf2fc4e52a109794f35545": "2888c403edd603f7e13814c8a1773e71",
".git/objects/20/677eef1ac14c1ba681911136c9d63493a3340c": "24ad6017ab746b9cbb6eacd7a459e1c2",
".git/objects/38/7ffbd9bec158b3b54c7e01316b539ff30eaff7": "95a259ca33583136962823b868f93d01",
".git/objects/3f/f5bc755515f20c6f90a8246c57b003429d801e": "d4fb2239bfb7eec8f6dcac46c914a019",
".git/objects/41/bde5049f13d67a210792bbdba9e9af5439675f": "9bc7fe99de4ff9618800907ae766fe29",
".git/objects/43/903c90262fc0337bd9b30cfe1c807edfe824b8": "3588933640c906371bc9df73d9aeed0a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/51/4ccf654877f1d9bf20e6faa6d8ed1c20d95403": "bfb6d1be8314db87d7f6834bfc8b8904",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/dc6785358ef4761d66c74e4f73425b9ef72db3": "e67cb9d1bc61905f6dad8108a9f5bb19",
".git/objects/54/a720e83571ee972043d33fcb367692b45afc70": "a0dc1e26cc4cbb0b8f2e6bc436d775f5",
".git/objects/56/25b962e4c6487bbca95ccd135d2993a480ed96": "cc6b36bcb4f13982ee195cc536bf326d",
".git/objects/5e/2b3030c4ea27e17979b1f2e2b21bd3186c0e75": "e958c583f4bbf022cfdc26b423209a7b",
".git/objects/67/4f313b53782118711e3020e372c004508f3d62": "c0a40a552ae4e7dfbece1989381bd3f1",
".git/objects/6a/d38ed5ceb2dfdf980fd29de0d7bcd094809bd7": "ae57c18ac417fbdd651956f1def62442",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/4acd341421b60a13fcdd2bb216c66a96497069": "55b97abbd6f017a3829c5a247dbcdaa7",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/4f427012763591fc60c3ba7c91742ec3f392ae": "0298a477d73bea2db3f1d760627db45f",
".git/objects/72/917945a5edf5706127e4d0415215bc123035c3": "5009dbba211d92521a27e2b82727df19",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/0135d8012afc7626b62386d02cda5799559787": "b04b83445b90f7ce4cc8009f482e5721",
".git/objects/77/82832ca9a431935094b10633a2c6168358fa80": "f2bbe971634677dd402091a221b7e1df",
".git/objects/78/8719ccddf968053d35e6cafb6b60e25018c361": "5a30041bf577ed1bbf18b5a7a55f0ba9",
".git/objects/7a/2e15f77f4e98e6302bcd12bcad159b57d7429f": "b52140f2307d9ef2aaf20950b59dde5c",
".git/objects/7f/659c0a549fc1cac620bc988e900278cc6c2bb5": "8455ca584c7ad642994b9c03501e5b49",
".git/objects/85/543626995e4e93163b6ce461226d90c03563d0": "6f15dceea6b684f105e0405547d54433",
".git/objects/86/0675b7de7892bd1cddb21ba882b9d7208ad960": "22f4915599f5c3e8279ad18bacecab59",
".git/objects/86/8ab1d4b5f940e72e25f28bee4bd491bbb9c57f": "791c6de896d53f2243cb2362a5656543",
".git/objects/87/506790a46dc3ea5fff49247dd56b25e8b96c69": "67d52f3d863a1b5a634b325b81ae66dd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2bef1d18362f30231d1ea6557003081b7e18c7": "2373cb7b945e8893b461eb6683d1e7e1",
".git/objects/8b/5cb6eeddeaa884100a935f070b8fe392a4b4a7": "8c4601754f8451cb3de5c98b435a4b52",
".git/objects/8d/565fd85a96449c6c30d985779eb02a0b78baff": "795a71de63170cb0740259fd98bbe94a",
".git/objects/8e/0df675cedcdbebc0eeecd5dbe1770630c02d0c": "89787d557bee4e53cb55882c62823f6f",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/527c22b123eba869aa65870839199c58545de0": "a2a58592059270d6d0651d300871ccb2",
".git/objects/94/943bb59cd1cacbe448713eb38cedc6503d7188": "fed03b6bfdeb3165375ef8dbc80554fe",
".git/objects/96/1c7b324839354ccdbcf9a6c576b2c6ef9e22b9": "2606204806678497d59c82778b334b7e",
".git/objects/97/e183e5669e386bbda115d10bb13c638acb77a2": "a5b967b73b50eb04ad04c34095ec1c1e",
".git/objects/99/66e3c3a6d33b59df46cb4cbf7eab7db9099039": "e99d1acaee876db0163ab2bcf9bfcaae",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/0c535583c9556c7f986617639fb6279ee98e9a": "9b9d06b30ee44dd5bca0ca0e5b1f7a71",
".git/objects/a0/1ea8d9bd63aa8844bf814874897fb38d6f05bb": "d0195045c03d10658c365f2c3444914c",
".git/objects/a6/9833e5345e137441b5f3bf21921767e54caf0e": "fa087d8d21f3d2b8b89ad2ca19a87695",
".git/objects/a9/f5e6a4d2756d028a14844bf5d9f12b897dc2f5": "32bbd82552498cf8a5a331edfacaeaba",
".git/objects/b0/bbb0fdad8b337e63a3d3d8a4df3cb6838b7ca9": "0afa483f5499c7d5e5135a3adecf85e7",
".git/objects/b1/43ed7d70fb053c56f1da6485df4122a598f963": "2309a6690ea6bbfc5e288f3a13f52a3f",
".git/objects/b1/ec2a977e71a7157f53c6afaa9a906676e0e879": "d75e0356af08ee49088f66f29a67a07d",
".git/objects/b5/03f0a25e15c246026fa0b0d4087ab073bc111c": "20ebb7d39c9ebdc97cb4ed1a14a942fb",
".git/objects/b5/ab60008770920829a972653725b21ae102c81c": "a0e0e2959d0e1a9142d8a25b64d5d360",
".git/objects/b5/c6be7d41d832447c4805257b4a4adb52326336": "e9f65104677d661ca84271ee5e7a7146",
".git/objects/b5/f0ab9ee4a8d7df7baa19d5c27ef45117f2a621": "bf117e2553e36b5018d142d67f400f42",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a5f47fefd6919c6f3fac4ffbf58e00b3dffdc0": "2d41c1b60fcd70dd967ee57459a8b2fe",
".git/objects/b8/1a1286e172a91e49f21b4cb304a79b854ec464": "e30a0e000ba81df0ce6b254c9927a82f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/f0492dbfecf5a14173c3df2cd48807ac250142": "37316b9674337325b4597fd8daccacda",
".git/objects/bf/bad36e218f2d87bd880b586359e56809877627": "4ed0401cc7900fcffc8de61438cef084",
".git/objects/c3/8f9e58aaa791ffd95ab8594df02bd0bb470f10": "4742d6d29aa9545ac123c12d14e4038f",
".git/objects/c4/bc062c9fb33ce66e7f31baa07fcea27e1eea58": "e9869e6efb251ab293f025edf985da52",
".git/objects/c7/5ac745b46f302ec94c1f81e3817574a332cc40": "a9087362b7a658b25cf561506b00a6e5",
".git/objects/c7/a46ffb7809cd97203056575c447979571f894d": "c3c25edd9019cc70f8cf975966a68fb1",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/09123c88e05c8cb9b1fdf8844f7b437a68cfc8": "3613b967400daa5baf115aba677ad559",
".git/objects/cc/f1f1fea7adc69393a36fe632c4d819b301c510": "3c66ad8a2288307e1790c0987a4279c1",
".git/objects/ce/20983fc42253aa852c3168c0cc1de530a38425": "a9bb957b690355b6afe7bf637c53b301",
".git/objects/d2/bba86bae6fb679fc430d1975787df4dee09e4f": "f14ac1531e97188ba34b494cfc098537",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/9e91811fe3049abee567d401325367d41ea968": "48c362c41f774d423a642ed0d9586600",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b18696300f723f6ca2d94ad4ccb167ee3beb2d": "8b44ce6871ae3b6de4fe4129a65f1898",
".git/objects/f0/3dcc347348470bb798a49e81e8611bdf3894e6": "f2b9f277f41ee42f5095e0b1ff9d1249",
".git/objects/f0/9dc43ac195053318e3b46b8b6ba4ee125a2c7e": "9c55861315a023220071378ce7903359",
".git/objects/f0/be526c83e2b0840874886fcf38b6e1100000e9": "9d8dd8380cbe9a6bd03b1941cfc201fc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/58f77fa681af5fda6c1ec620f3895e895b68a7": "0a7fb25b7cb591ac0bd03ddfdc3dcfed",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/6e4a82882abd32aea6c4ea08ac1def7e17c644": "2b98ff4da9c7e676f7572625c6ebcdf6",
".git/objects/fc/d818ae956a30b7f510b6c911027055fd29983d": "61f3315f41d69d2789ee999eab69ea83",
".git/objects/fd/2651d44b8d429b3fa14eab6a8c8be79e7f391c": "d0445c7721177f9e8dc1c965bf7aab10",
".git/objects/fd/27617c726e04495349d46d37a1e3f0f748eabd": "b88002eb593adc9eb16073f3d0809b0c",
".git/refs/heads/main": "9344648d97075dbaf95e2bc28849d032",
".git/refs/remotes/origin/main": "9344648d97075dbaf95e2bc28849d032",
"assets/AssetManifest.bin": "2d4a65c7557643b43255c4f1e3275572",
"assets/AssetManifest.bin.json": "bf601d35fd99ef3cc85584fc4871a465",
"assets/AssetManifest.json": "8f529d5b3e43ba3bfefe8015be46cb0f",
"assets/assets/images/app_icon.png": "9b4df44b4c4e995d88c5760f22249fbd",
"assets/assets/images/app_icon.svg": "2e89e81d35bc77cf9a430dd93569f5d5",
"assets/assets/images/splash_screen.png": "edc7af9316456dcd50d546e75630df63",
"assets/assets/images/splash_screen.svg": "b227e5d41126a30a05f3184f56d62468",
"assets/assets/tournaments/CBKTownhall.json": "3b00f13afa794e6e9690e844bbb8cc0e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "67806521d3c7b286cfdf578ca2ee9f95",
"assets/NOTICES": "d3fe4afa312ab08dc47ec3180be3ac50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ef0985b12f031135a864c0b707490d57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4ce1779900c56750d177b58956d1270f",
"/": "4ce1779900c56750d177b58956d1270f",
"main.dart.js": "1c11698ca0ea8b0302fc9553ef7d0bfa",
"manifest.json": "c3fac5ffb8f846ab8d4ff0a4cfa0b034",
"splash/img/dark-1x.png": "7b7ce0b2782ed6b224f16a6f1a3ccf19",
"splash/img/dark-2x.png": "543b36f340f98445e7ec142507688b9f",
"splash/img/dark-3x.png": "b30a35409d73f2898a86fc2ed523cfe1",
"splash/img/dark-4x.png": "edc7af9316456dcd50d546e75630df63",
"splash/img/light-1x.png": "7b7ce0b2782ed6b224f16a6f1a3ccf19",
"splash/img/light-2x.png": "543b36f340f98445e7ec142507688b9f",
"splash/img/light-3x.png": "b30a35409d73f2898a86fc2ed523cfe1",
"splash/img/light-4x.png": "edc7af9316456dcd50d546e75630df63",
"version.json": "fbeca34749670470f0c536c79b10c85b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
