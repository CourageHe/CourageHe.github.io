/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/08/16/c2f37b230581/index.html","668ec569ed4af5c52c3b06d7eeb21a75"],["/2020/09/14/993996b2e602/index.html","d692d592b3288a3dc36f23056eebd464"],["/2020/09/14/ed31eabc1ddf/index.html","8517958bf4983268b58550c8923200bc"],["/2020/10/15/4a9e23212be1/index.html","a533d0aaa1c9594ab9930e6b90fa88f9"],["/2020/10/18/7a13413b21cc/index.html","a0c684cf0c8788d7922b2b7dbb41d499"],["/2021/01/07/75eb06482a73/index.html","a644736652211bb2a9fe3039230f7829"],["/2021/01/07/818b6f02a79d/index.html","210a55038916c958ee22d77decc35fb1"],["/2021/01/17/dd7e0bbf808e/index.html","1d617a82e0816d6de05ef81f71d1e9a4"],["/2021/01/18/e4bb3bf545c5/index.html","84746945bb1e62d28d9294fae9e0319f"],["/2021/01/26/ec8237ba0fb1/index.html","fabca944c1e6ef7d02db824aebaf249e"],["/2021/01/26/f6d039b5ce46/index.html","89cfe947d58b77f7988d631337e26c9d"],["/2021/02/12/6ea85d902251/index.html","937d267474be5f27f709f17b4fce9521"],["/2021/03/04/e831abc0a85c/index.html","be46bfc93af1ef0c004fbf13e6d465d9"],["/2021/04/10/5a457db9baf9/index.html","5c3167c5c2a7046159fa07d745f6a04d"],["/2022/07/20/8875b2568660/index.html","5b462f05d2c8df5f5d86c505eba0997c"],["/2022/08/10/1ba2419402b9/index.html","5150c9709f2150f64ae99603532ac6af"],["/2022/09/17/dec78c70fd80/index.html","c3e19dbd8d175e561569d3e429373d86"],["/2023/02/14/4a9fb325b43f/index.html","d043c368cf48cf4c4079334028428550"],["/about/index.html","55d4c4d64706e26dec4d5955ab97538c"],["/archives/2020/08/index.html","91d6f6944c054fce333a3bf9e64be5a3"],["/archives/2020/09/index.html","031a98bacc9b0ed3f7fdb3fa974132c6"],["/archives/2020/10/index.html","c0421b10e189482bb1a467cea3aedd73"],["/archives/2020/index.html","8e474a891937403fbdff6c7afac10f50"],["/archives/2021/01/index.html","7f89fbf1f2b4f27dfa06de7cfa43a552"],["/archives/2021/02/index.html","0baf01b8ccb00585b17e144dd87dd902"],["/archives/2021/03/index.html","f8598bf808cb80bf23790a54d0802076"],["/archives/2021/04/index.html","6ae9bbae4cd93fb68d9f43f1dc9d7757"],["/archives/2021/index.html","b2aa7b208a5aec9c7e5eee6c92b68896"],["/archives/2022/07/index.html","77a18289246f1661affcae29fa1e37e5"],["/archives/2022/08/index.html","bc75aab9856a68a5d8b6f93b190a80f2"],["/archives/2022/09/index.html","7bdc580112dc9b89e143258a1750e1d7"],["/archives/2022/index.html","ec1012f1a7ffb1a5af6d46e910f87d82"],["/archives/2023/02/index.html","40f4ed292f453bc66728b98abfa05891"],["/archives/2023/index.html","66ac2a6364942a0f9ea8710578029a0a"],["/archives/index.html","f03dba2a1ecaa1a541add15efacad8e8"],["/archives/page/2/index.html","076d27a01b898f25cc8eb9977eed55a7"],["/atom.xml","65eff60a39eb926ffc84ea1bfa8dbf88"],["/categories/Algorithm/index.html","634ad6f374065861f49bb58e569c64af"],["/categories/Git/index.html","ef0a4ac10a0ffc0ada693c0d9bd0b226"],["/categories/Hexo/index.html","d3f77dcb71c27a85e68e5d48b2c7031c"],["/categories/Linux/index.html","8937a951c483e6a38381710a1680fc2e"],["/categories/Nginx/index.html","e37edf426d40e40d3b2bdc110dedd61c"],["/categories/index.html","5aa646182dedb19e59fba7ffd9d1468b"],["/categories/个人有感/index.html","4859c15a1ee67156cda77011f72eff43"],["/categories/学海无涯/index.html","c76f3eddc3bb494cca4fe9bbcbd77f29"],["/categories/实用工具/index.html","165a79065285b6395ead0cbd83025c62"],["/css/main.css","538642456d67a642056810056a771beb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","84f9d24d0e8ae80883bf4891de5fb2ea"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/data/2020-0820200807170300.jpg","b40168f71f24df2467bf4b5f2e72f6c7"],["/images/data/2020-0820200807170317.jpg","b40168f71f24df2467bf4b5f2e72f6c7"],["/images/data/2020-08TIM截图20200807003531.jpg","b40168f71f24df2467bf4b5f2e72f6c7"],["/images/data/2020-08批注 2020-08-07 151217.png","b577d5e19956212c0a25d13fb192536d"],["/images/data/2020-08批注 2020-08-07 1512171.png","b577d5e19956212c0a25d13fb192536d"],["/images/data/20200807171301.png","c762b66bb68c9608ba138b07e53953b5"],["/images/data/20200807171342.png","bbeba756f72d8e04098cc5b2c59ce73a"],["/images/data/20200807171409.png","e17538b9654dc92fcc725595a04e4757"],["/images/data/20200808003323.png","dcfd0b659bb9fad5b9e93126a0726685"],["/images/data/20200809140127.png","337fb2ee811457458fb5a40b2ed1f05a"],["/images/data/20200809140156.png","97f537a05703cfd1b3b6f9b8074a8c7e"],["/images/data/20200809140219.png","9ffc955d7b55eb23d4c2fbf67ce9e015"],["/images/data/20200809140238.png","95425379f1c9cebb486ae6fee0365d1d"],["/images/data/20200809140315.png","58a2392948861dcade4d73463ea017bf"],["/images/data/20200809140327.png","3f91747a2219c6d46a4d8ac9029c0664"],["/images/data/20200809140356.png","58be71e9442f472082200ae2d93e1095"],["/images/data/20200809140415.png","55805cce52438f89cc28b1bd861a6fe7"],["/images/data/20200809140446.png","96b4a349601dfe91660b9a7b354e43f3"],["/images/data/20200809140511.png","cbc37a2c0ef8515d6bebd940d3c4fb29"],["/images/data/20200809140523.png","a80711f42d4e05d7792ef941e0921f50"],["/images/data/20200809235121.png","9c98724a499265eb48347beff8f75c7c"],["/images/data/20200810164736.jpg","9d3e9bfd1a75a8590eb3a57ec8c0b84f"],["/images/data/20200815172435.png","730b05d30b62e451d74429bbdd331660"],["/images/data/20200815173444.png","789bebd33a6624eb419d3f067af2c921"],["/images/data/20200815173502.png","789bebd33a6624eb419d3f067af2c921"],["/images/data/20200815173845.png","789bebd33a6624eb419d3f067af2c921"],["/images/data/20200815173909.png","789bebd33a6624eb419d3f067af2c921"],["/images/data/20200815174201.png","789bebd33a6624eb419d3f067af2c921"],["/images/data/20200815184900.png","e57fe211c928019dcb23479229b6f0e3"],["/images/data/20200816115230.png","6c60612e38765a1950167af4cc96d2a9"],["/images/data/20200816125332.png","8bdf9db62bef1de3df7fa9087470a43e"],["/images/data/20200816125753.png","9e515acbcfb5f4ee7776322e17741797"],["/images/data/20200816131455.png","c0be5e5d1f98653f4ca7d886502288d0"],["/images/data/20200816132129.png","34eeeef78fef36a6b15524ac2ac78a2e"],["/images/data/20200816132510.png","6445b8181516418291a793068f4f887e"],["/images/data/20200816132954.png","90702fc63d06f6450dcd059a6fd75254"],["/images/data/20200816135351.png","15d67902c431713a0542a5e4a478df63"],["/images/data/20200816135523.png","0d185cb7188ed0920b084ecf5b586dfa"],["/images/data/20200816135750.png","f1756841126672ef2769a6c31101b35e"],["/images/data/20200816140650.png","eaf2f6a67d675d3fdef0cd290ce3427f"],["/images/data/20200816142559.png","f386d917d7f32e330db1860a8229d4f7"],["/images/data/20200816142944.png","d89fc66dd37da0c02cca63d8fe5d3221"],["/images/data/20200816143618.png","80e4d96c23c6fb5d6ef5475f32b15237"],["/images/data/20200816143624.png","80e4d96c23c6fb5d6ef5475f32b15237"],["/images/data/20200816143638.png","80e4d96c23c6fb5d6ef5475f32b15237"],["/images/data/20200816144238.jpeg","6e57b42246036e11a3d2dd3f848ccf39"],["/images/data/20200816145537.png","9e515acbcfb5f4ee7776322e17741797"],["/images/data/20200816163424.png","c51f127bd46005f623eda5c539263dfb"],["/images/data/20200816173654.png","ae0f29ebe949da57cfa6863f776a0920"],["/images/data/20200816173830.png","19ac5572d3567077a8e42f362454092b"],["/images/data/20200816173847.png","7ca422ed6c5c129a5543d683ae01a857"],["/images/data/20200816174028.png","871c74b52c3a9dd836092703a0cd4653"],["/images/data/20200816174036.png","420abbf0a71c90a150a106844f5eadf1"],["/images/data/20200816174635.png","c482f20eb71d3da364939ed65a56b986"],["/images/data/20200816174636.png","154a3a7482e18f6b3268ff8f22ea1bd7"],["/images/data/20200816174637.png","db979fa5156ab09c0046a2ae0d9abcc2"],["/images/data/20200816174641.png","ce5be0ad34b0578c706aacdf396f3172"],["/images/data/20200816174643.png","547bb8cb5e2c6250e6f97d5210395738"],["/images/data/20200816174644.png","c624ceff890afcbfb76e99355b6eb362"],["/images/data/20200816174645.png","6da1104d578562415dce5e795b855a9f"],["/images/data/20200816174719.png","e5699041d15ef9db52fef93e45f9e0cd"],["/images/data/20200816174738.png","a52f84a0d686b5761c0762e66c6aa3bf"],["/images/data/20200816174741.png","c482f20eb71d3da364939ed65a56b986"],["/images/data/20200816174748.png","154a3a7482e18f6b3268ff8f22ea1bd7"],["/images/data/20200816174753.png","8c885d7fc90158a769c3935aa650536c"],["/images/data/20200816174755.png","db979fa5156ab09c0046a2ae0d9abcc2"],["/images/data/20200816174758.png","f62bfcb81876e6bb63b6f0c4b910dc2e"],["/images/data/20200816174801.png","ce5be0ad34b0578c706aacdf396f3172"],["/images/data/20200816174803.png","1d22f889bd348005d60e2f052c5f9571"],["/images/data/20200816174807.png","3ebf60c818cba74b7d5ae70b146117fe"],["/images/data/20200816174810.png","c624ceff890afcbfb76e99355b6eb362"],["/images/data/20200816174814.png","27d2db1a35fd10d2e41ea2876023b7d5"],["/images/data/20200816174816.png","6da1104d578562415dce5e795b855a9f"],["/images/data/20200816174818.png","9a63e51ae37bed8509b9e4784d01bb5f"],["/images/data/20200816174825.png","615d24b6a97e8b15630439f768ee0f89"],["/images/data/20200816174836.png","9a63e51ae37bed8509b9e4784d01bb5f"],["/images/data/20200816174840.png","6da1104d578562415dce5e795b855a9f"],["/images/data/20200816174850.png","27d2db1a35fd10d2e41ea2876023b7d5"],["/images/data/20200816174855.png","c624ceff890afcbfb76e99355b6eb362"],["/images/data/20200816174904.png","547bb8cb5e2c6250e6f97d5210395738"],["/images/data/20200816174909.png","1d22f889bd348005d60e2f052c5f9571"],["/images/data/20200816174913.png","ce5be0ad34b0578c706aacdf396f3172"],["/images/data/20200816174919.png","f62bfcb81876e6bb63b6f0c4b910dc2e"],["/images/data/20200816174922.png","db979fa5156ab09c0046a2ae0d9abcc2"],["/images/data/20200816174926.png","8c885d7fc90158a769c3935aa650536c"],["/images/data/20200816175620.png","1e9b4a5ae9420773d19aa728d5fce155"],["/images/data/20200816175627.png","eb3c7e648bdb07d5cbd4d759f50879a1"],["/images/data/20200816175630.png","481aca3b12a465ebe739155b7cd7dc82"],["/images/data/20200816180342.png","7b891140bd0ad82595e9ec117b061ef3"],["/images/data/20200816181149.png","f93c66190c4bdfeb78fb7101d2bfcd85"],["/images/data/20200816181155.png","ade233f35306af1d02e6a23fdbd9b424"],["/images/data/20200816181232.png","eedf9babf823ee55aac4a67984cd86e2"],["/images/data/20200816184341.png","ae0f29ebe949da57cfa6863f776a0920"],["/images/data/20200816184858.png","ae0f29ebe949da57cfa6863f776a0920"],["/images/data/20200816185954.png","ae0f29ebe949da57cfa6863f776a0920"],["/images/data/20200816190053.png","ae0f29ebe949da57cfa6863f776a0920"],["/images/data/20200816190150.jpg","4272be916a4687a2228720753bdb9afe"],["/images/data/20200816195720.png","730b05d30b62e451d74429bbdd331660"],["/images/data/20200816195845.png","730b05d30b62e451d74429bbdd331660"],["/images/data/20200816195942.png","730b05d30b62e451d74429bbdd331660"],["/images/data/20200816200021.png","e57fe211c928019dcb23479229b6f0e3"],["/images/data/20200816224441.jpg","77b1ac2a527b2ccc16cdff6e3b8fe265"],["/images/data/20200816224944.jpg","4272be916a4687a2228720753bdb9afe"],["/images/data/20200817225649.png","fd56640b73dc1a87afc85be967ff64c4"],["/images/data/20200821005734.png","0fdad6c03e3d167c38bd3dccf3ae0672"],["/images/data/20200821234746.png","15cfa51af81edc8129e15acb315dfd82"],["/images/data/20200822182926.png","197e97a7bc73edcd25aef173b1db9e45"],["/images/data/20200823120359.png","84aa47ba3b6f4df6df02316863b2fd70"],["/images/data/20200823121719.png","197e97a7bc73edcd25aef173b1db9e45"],["/images/data/20200824001843.png","0c8e9b66ba65bd0dc87dff7e4ed9d1dc"],["/images/data/20200825125817.jpg","246b1196d69e0c30c254d4399c4d0b50"],["/images/data/20200831000158.png","44f2635b1d77f7b3dba00d58b89df56b"],["/images/data/20200831000248.png","d49d5b970649a07b81ce8433e23bf62c"],["/images/data/20200831000525.png","44f2635b1d77f7b3dba00d58b89df56b"],["/images/data/20200904120135.png","09be1e507aee480ae886eb554ad31989"],["/images/data/20200904144208.png","6bf37071888ea2db524ba5b0d6dfbdb5"],["/images/data/20200906211336.png","076049ea9e94a1d162baa5ce57141f72"],["/images/data/20200906211401.png","f5cabcf70fa73166788ad296a269b3d2"],["/images/data/20200906211551.png","a075e97960f5e492320708d93bbc145d"],["/images/data/20200906211647.png","518fb9ce8654cdfa4552145f76a8dd03"],["/images/data/20200906212229.png","949fee887c58c6572f7f15aadfb12307"],["/images/data/20200906212248.png","659394ee72813814855d6d800a8ff87b"],["/images/data/20200906212713.png","638e79c990cd257f299e3827ae91d38b"],["/images/data/20200906223304.png","06238ac3be79fcabc4d375310b7b4316"],["/images/data/20200906223606.png","8058b9f035905c82539a78f747be91b4"],["/images/data/20200907002751.png","53264c748b365ad16c0480ff98ddf9a2"],["/images/data/20200907003035.png","52f7dd5be5c61e0541868d8f5168c317"],["/images/data/20200915151434.png","423ffd4dd90094fe414b5f7fdd8f7799"],["/images/data/20200915151647.png","b5cf00d61056f99880733a79b6ecbd95"],["/images/data/20200915151826.png","167f84951a9c05f6055af81b30d03283"],["/images/data/20200915152704.png","c90290ac4b7856334aab3ce4d7f28427"],["/images/data/20200915211347.png","48ed897daddc6795fe3bf2bddb5a6e3e"],["/images/data/20200920161425.png","a02da8b7dd9032cac8fde596ac980b56"],["/images/data/20200920161510.png","882247c5a6a2a33c58343e39226999e0"],["/images/data/20200920165531.png","2b12c5b7c19ed28479126f1cf12f09aa"],["/images/data/20200920165602.png","32751fe02192f7731f3533e58c108d03"],["/images/data/20200920165620.png","cdcfd36301815e332c13b1a6b7ac33ef"],["/images/data/20200920170540.png","ddf085e59c666946a0b9f76bdf32f710"],["/images/data/20200920172332.png","87f79b61144a99000c32eeae25f8cbcd"],["/images/data/20200920180212.png","54697d20262f246f6ae62274699679a9"],["/images/data/20200923233544.jpeg","f2b891023b3b0ebdc7c1be03ddbce007"],["/images/data/20200923233555.jpeg","f2b891023b3b0ebdc7c1be03ddbce007"],["/images/data/20200925011753.png","e70fc433e94fddd55d75845c6f88f3b1"],["/images/data/20200925012137.png","5a171bb3ed0c967959cbe62e2a475b3d"],["/images/data/20200925012332.png","9fccdfae6ce1419585e4e7a8b19f06fb"],["/images/data/20200925013315.png","9342965e3bc47b0e93e58cbf87c00d5c"],["/images/data/20200925013349.png","fd7f57c69de6db54f9960c6a10bdb204"],["/images/data/20200927004354.png","4d1872c525b78f8d469e5bcd2884772f"],["/images/data/20200927010001.png","dee5b085e8b104d52e31b08833322e66"],["/images/data/20200927011443.png","ccbac42f458c4b46c5348a7f068913b7"],["/images/data/20200928011647.png","22e239becd6c8378e01c4250e5115338"],["/images/data/20200929223634.png","c82938dade8e1a298f24bee82308ca00"],["/images/data/20200930003916.png","febfb651038c9d557125a67b8b5d79aa"],["/images/data/20200930151543.png","952e7b77e31fefc7117d8b8c1ce308ee"],["/images/data/20200930151711.png","3b5c278b4a4d60fb287af4539312f8e1"],["/images/data/20200930154529.png","052690f5214000bfa86760083c9e29f3"],["/images/data/20200930155643.jpg","0388ee03ac832bd5a0a27930d19a7e88"],["/images/data/20201002220455.png","8b842076d4223a54800e352d3a9c6e1b"],["/images/data/20201002221749.png","37358af14aefe64d0a632ee3ec1dcffd"],["/images/data/20201003005355.png","63cd107b81e63902fbe58a1eef74beee"],["/images/data/20201003005418.png","780656f45a2f64cb7256fe2e75d7c294"],["/images/data/20201006165322.png","d6258a241d4090d5af537e2a67a5d69e"],["/images/data/20201006221742.png","dd08f5e2150edc4ede12004fbe2e3335"],["/images/data/20201015233110.jpeg","ef7906d41ab689a55b8c6a1890bda093"],["/images/data/20201015233300.jpeg","bf1b117a5cba0e0e8b451ecd865908af"],["/images/data/20201015233327.jpeg","421123b5e769b58b967194e2621557d2"],["/images/data/20201016000129.jpeg","999c17ebe29640e068f60f10926fbad3"],["/images/data/20201016000244.png","4f883fb0edf9b8876c945a1e7ba702d3"],["/images/data/20201016000757.gif","d9130967c64f2b79f3526244bd0b9766"],["/images/data/20201016000823.gif","9880d75c8d57964e3e91fb7d216bc7cd"],["/images/data/20201026222553.png","e9379ba72837970cd6cd614750036a81"],["/images/data/20201029220642.png","57ba26b77fbdd543e5fb9770628023bd"],["/images/data/20201029220747.png","862ebc4f68ca10f19331456453536116"],["/images/data/20201029221556.png","fc8f0c399b9ec966c33cafda4a00557e"],["/images/data/20201029221614.png","6cf2778bb0f6fd01309ab10d693bb787"],["/images/data/20201029223647.png","235240a3cb6ec950923d7d0c94ec5162"],["/images/data/20201228105358.png","6581d42ff61aa77b2bbdac886f7f955a"],["/images/data/20201229110310.png","f61acb532393c5792f10ff28059a66a9"],["/images/data/20201229112559.png","a86d5ac4802e7182e7cb3c279eefad87"],["/images/data/20201229112748.png","82475ada9d3a6cb0d14a0b3d22a2c83b"],["/images/data/20210103141951.jpg","9d3e9bfd1a75a8590eb3a57ec8c0b84f"],["/images/data/20210103143813.png","b3169c3782c8268e90eb62417e3a2d57"],["/images/data/20210103214524.png","390dd551a23611521ed7f44bde0f9ef5"],["/images/data/20210103215423.png","dae76520b43e0d911f6ca202a058952c"],["/images/data/20210103215456.png","dae76520b43e0d911f6ca202a058952c"],["/images/data/20210103215501.png","dae76520b43e0d911f6ca202a058952c"],["/images/data/20210103221932.png","a69c3bc739300424762f946bbe5ac326"],["/images/data/20210107001504.png","235dd050017e64ad91b6536b7c054345"],["/images/data/20210107001625.png","02bde47d1db1aafc67acd9b8655cb9d1"],["/images/data/20210107001741.png","9707445a453752b003012b0ed6aba749"],["/images/data/20210107001916.png","85f47f2eb345394724a7cf2bf642049b"],["/images/data/20210117180604.png","1bb5276fb8780ca77efa5375cb01d5aa"],["/images/data/20210117180715.png","00df5e82a345123c807d3b92f0311eaf"],["/images/data/20210117191329.png","1457d8d32a96ee5c67c3cb9e6d02981f"],["/images/data/20210117200211.png","331c9b68036c8db33f3883457ea907f3"],["/images/data/20210117200502.png","73f4363db1a909f4c8748e2a6d6f9f6d"],["/images/data/20210117222137.png","9c42940c9837643e015f842b6208cfa5"],["/images/data/20210118004401-16583185810044.png","cc40d12bf8b08c7c0cb211d6a42add14"],["/images/data/20210118004401.png","cc40d12bf8b08c7c0cb211d6a42add14"],["/images/data/20210118004537.png","eb4a85c8efd971bff89c45198a65c195"],["/images/data/20210118004801.png","56a9c785c12146289f1e962d73786ea0"],["/images/data/20210119091327.png","1c7e68eb2c72051de17c093468d3f85b"],["/images/data/20210119092552.png","1c7e68eb2c72051de17c093468d3f85b"],["/images/data/20210119092646.png","1c7e68eb2c72051de17c093468d3f85b"],["/images/data/20210119093734.png","b082550236a5ecaccf518e90d8de6f0a"],["/images/data/20210119093753.png","ebc31348815ea0361fe6b2588dd9b7e0"],["/images/data/20210119094906.png","b082550236a5ecaccf518e90d8de6f0a"],["/images/data/20210119123959.png","ebc31348815ea0361fe6b2588dd9b7e0"],["/images/data/20210119124032.png","b082550236a5ecaccf518e90d8de6f0a"],["/images/data/20210119124035.png","b082550236a5ecaccf518e90d8de6f0a"],["/images/data/20210119220704.png","ebc31348815ea0361fe6b2588dd9b7e0"],["/images/data/20210119220705.png","ebc31348815ea0361fe6b2588dd9b7e0"],["/images/data/20210126002329.png","f6aa3e7ca37ecd00eaf9ad10b97a1e73"],["/images/data/20210126002339.png","e3cd5c8ee2ac840732a2958d4b52d50d"],["/images/data/20210126002358.png","faa3abde3d1cc1e6d9d9fa874073b995"],["/images/data/20210126002415.png","271ca168916694457749b6392fb765cf"],["/images/data/20210126002427.png","fd5375371ab3d4fda444ba26ba7b1641"],["/images/data/20210127002558.png","5c79bbe8a77320ecb0d663041b8b4f87"],["/images/data/20210127002655.png","2aebee5709996d151f357311a789def9"],["/images/data/20210127220417.png","6b76340068a639b44d685d6dd0a72a0c"],["/images/data/20210127220536.png","3c39fb9a3ddaaf11a82b034fb6fc262f"],["/images/data/20210127220827.png","7d93c08502e0bc6928a1bf4d47e619d7"],["/images/data/20210127223809.png","8afc3348cfe1091823e3368a6b17a951"],["/images/data/20210127224008.png","6276557ceb0e35f4669a250bf5b3800f"],["/images/data/20210127224135.png","a2fd40c82553796703d21693084a82f5"],["/images/data/20210127224203.png","6276557ceb0e35f4669a250bf5b3800f"],["/images/data/20210127224236.png","7dc3865302069760621b32c98e12ba03"],["/images/data/20210201152224.png","271ca168916694457749b6392fb765cf"],["/images/data/20210201152233.png","faa3abde3d1cc1e6d9d9fa874073b995"],["/images/data/20210201152236.png","faa3abde3d1cc1e6d9d9fa874073b995"],["/images/data/20210207204443.png","eb132da02b9a4193119dfb7c851662ca"],["/images/data/20210207214316.png","d4e7a2523823b329f4408fe4dd11d8f5"],["/images/data/20210207214339.png","a75955fea6087af9a61e888eac2e5e17"],["/images/data/20210207214401.png","60c16f5608c26299f4e53553be8f71c2"],["/images/data/20210207220941.png","3a04d5d230537b9c4cad73deeca2282b"],["/images/data/20210207224353.png","ce73b08129d4d48fa7549b01d2ef33cb"],["/images/data/20210207224552.png","acc166a477cd5958b2cfaf29e3eecec5"],["/images/data/20210210213410.png","eecc8e5c23b82c7872b0179a92aeabfc"],["/images/data/20210212234204.png","01bf8e406889c8ca21b8c706a0527e27"],["/images/data/20210212234205.png","9b7458d90008396ce74c76d4e98d7aae"],["/images/data/20210212234756.png","6031d2356872257558b5c4a2b89d9c24"],["/images/data/20210212234853.png","8713faf905e5c947973228a1b9ca5151"],["/images/data/20210212235023.png","8713faf905e5c947973228a1b9ca5151"],["/images/data/20210212235105.png","8713faf905e5c947973228a1b9ca5151"],["/images/data/20210213010621.png","fb0946e46c9b5db98f0ab5f1d1b145f2"],["/images/data/20210213010904.png","44c9dfacbeae44153f32d7c0788a6799"],["/images/data/20210213011312.png","64e8f669a03787e0f452dba0d2e60d34"],["/images/data/20210213011521.png","ff4d0914886ab72568b670fd18325663"],["/images/data/20210213011613.png","504525f276f77e32a3b65343fd534df9"],["/images/data/20210220185457.jpg","a9ed7b1b0a4d660b244791013b0454be"],["/images/data/20210220185648.jpg","00c955c9a89cbdff6311c33c76572363"],["/images/data/20210220185755.jpg","6fc4edf3217ca8e05c6820318780fb33"],["/images/data/20210220185836.jpg","a301642a72743522fd6c0c14a447bd97"],["/images/data/20210220185923.jpg","eddb0aa1780ac087f53824724eb0d69c"],["/images/data/20210220191314.jpg","de701d8f9fcfa6af8ad1e964bc5f94ee"],["/images/data/20210220191524.png","e8e243ea4b71b977b3dae9314fa39612"],["/images/data/20210220192057.png","5bea60a5a4adb319d33937508d61bcf2"],["/images/data/20210220192316.png","ad8dfbbdd0a1b15d03f37127cb328396"],["/images/data/20210220192407.png","5c8c7541242d7195f0958b39f17ffdf2"],["/images/data/20210220192617.jpg","6fc4edf3217ca8e05c6820318780fb33"],["/images/data/20210220192708.jpg","a301642a72743522fd6c0c14a447bd97"],["/images/data/20210220192835.png","a301642a72743522fd6c0c14a447bd97"],["/images/data/20210220193112.jpg","07acee1a12e70cab1e8e20c296cd6afd"],["/images/data/20210220193348.jpg","514474e27388d97825edb225010134f1"],["/images/data/20210302141900.jpg","21a5f710fa9afdb6f87483c4eb0ad24b"],["/images/data/20210304210635.png","9b4082fe5e380a8aab57a439b77d2f62"],["/images/data/20210304211839.png","468e58426108ee555bf0c47c0a617414"],["/images/data/20210304212057.png","9fb4cff193a948fb8f703240d8d43b90"],["/images/data/20210304212745.png","6d8c0a8fbf59800604e31b9c72ab05bd"],["/images/data/20210304212758.png","c055a47271516922889614d35e5730f2"],["/images/data/20210304212817.png","c3531b81592c7b068ec705e3b881c74e"],["/images/data/20210304212830.png","1a0fdd5828e7dc822ae46483d41d8cfd"],["/images/data/20210304212842.png","4bb0d8fbf88994f99d0a389c89ff4adc"],["/images/data/20210304212902.png","548b8be84440a77f3de5134a782326a5"],["/images/data/20210304212914.png","71665b502b33903f19d084f7e9b249ec"],["/images/data/20210304212929.png","e41e511bac2070cd660ce408d382004b"],["/images/data/20210307165221.jpg","697e7c4cb9065c99e0e8349576463119"],["/images/data/20210307165335.jpg","64943a9e23135c2a9f6211ed2e517ce9"],["/images/data/20210307165821.jpg","809b55c843b9cd8f214c37e87e3bc1d7"],["/images/data/20210307170830.jpg","1e520f0e7b673390a47ef16cd89d593b"],["/images/data/20210308092900.png","c004ff934bb18697a653ea156d8deecb"],["/images/data/20210309155816.jpg","2f2308508b4a076e422f4649fe1b70b6"],["/images/data/20210309160212.jpg","e08c86e24de6e13fd4ab3896855ca680"],["/images/data/20210309160234.jpg","de94c6bf5a864a4f355374ca66a7022d"],["/images/data/20210309160545.jpg","8a710a6a46cc45e396dff40b7b412eed"],["/images/data/20210314214359.png","4b0d753b46c660376b2bc5c8e7c0ed3c"],["/images/data/20210314221508.png","fd1a4d9532c22170647ec80475d37cf7"],["/images/data/20210410215919.png","5fd6e47c93fc8671917675ad55d586c9"],["/images/data/20210410220449.png","391c1b68327c145a56cc6683ed3a2e78"],["/images/data/20210416202705.png","9ea0978e4582948cabbcae3650402394"],["/images/data/20210416202939.png","a299168ce9633cc9a73f0fc05f1597ce"],["/images/data/20210530211039.png","eb02c48e6ece9fff220fe1152ba69bc8"],["/images/data/20210616130848.js","33b27bb0a01330714930dc04c281c972"],["/images/data/20210908134522.png","ef5199875ef35bb581d6bf1beabf37c9"],["/images/data/20210908134833.png","63863a45ec3a51cfb640fe578ff05e31"],["/images/data/20210908135501.png","3249eb2a35c746e18b88cc17631c7733"],["/images/data/20210922215609.png","913dcb4964dd3dd7aea62018a2b432c3"],["/images/data/20210922215621.png","6e62a0055f0f2580e27b489eaae8e5bc"],["/images/data/20211028152635.png","b6c51af6b4969ca9c2f8d384f2913208"],["/images/data/20211126170744.png","85942995f6a7bd222a5cdc8758e33dcc"],["/images/data/20211206102402.png","cae5c7f44d27360ca28ec2870678ca79"],["/images/data/20220223140813.png","2ee83062746ad9ef2e7a1e06fc699be1"],["/images/data/20220409194017.png","1ec76f19e2bb988053273ebfabbe5592"],["/images/data/20220409201055.png","1cd163cdb3d63141ba92d1a89c7d98a7"],["/images/data/20220409210604.png","1e826dc7c17bc1e4bcb70824c8a7183a"],["/images/data/20220410103221.png","e5d6471f501f1299cbfc8c6c1c3f4669"],["/images/data/20220410105408.png","27686c8ece975113ea32a0d9b57dc338"],["/images/data/20220410110112.png","ca39e4cf2545b7c34b464cc9912a609e"],["/images/data/20220410110526.png","e562445b51b00afab61401eac627b8ba"],["/images/data/20220410110619.png","0a95b6384e279d2573d140522fce2ba4"],["/images/data/20220410111213.png","d17a0194c38f80884f344fa3b236a93d"],["/images/data/20220410165432.png","30aa3e8e510c3e2e7584a939891ecf9b"],["/images/data/20220410170804.png","ebc3729b908aa8f81386dc7c8fffa62d"],["/images/data/20220412103826.png","cbdcb62753a9b0285ced7c4911dc4800"],["/images/data/20220418092319.png","49fa98684903284bf6fbee8ffab391a6"],["/images/data/20220418092328.png","6757db0fc1ea01220feed95ca67356bc"],["/images/data/20220418092332.png","cb72e922941efd02ddec3c99d73c62cf"],["/images/data/20220418092341.png","4ffbfdb3f80af5cb5c6065c08904d4ce"],["/images/data/20220418092350.png","c82246479fbfaee9adb776a951d00787"],["/images/data/20220418092352.png","e9592c68acb65b1442ad4659cdf9b4d4"],["/images/data/20220418092356.png","241e0db5075bc26415a4334c409db2cf"],["/images/data/20220418092401.png","3f7abce4aefe5c573b77308fb568a04a"],["/images/data/20220418092404.png","bf1b313b5ba6f5869ef3abd9e2121120"],["/images/data/typora-icon.png","9b7458d90008396ce74c76d4e98d7aae"],["/images/data/typora-icon2.png","01bf8e406889c8ca21b8c706a0527e27"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","aa74a97346ac406b8d08d1c42acaad29"],["/index.html","44548ab69fc492e89a30c14b13de541c"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/click-love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/pace/README.html","1456bc1b894041d91362c15959159fcc"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/reading_progress/README.html","ec08b32c35c5b5cf462b4aa1adf77d92"],["/lib/reading_progress/package.json","3943941852572359ec7f864dd4ae041b"],["/lib/reading_progress/reading_progress.js","4532bad6f74d2abbad00ae166ced99a5"],["/lib/reading_progress/reading_progress.min.js","abbebb6c477b3a170cb6aea8fc2915e9"],["/lib/reading_progress/renovate.json","5c5f74b1cd42f27009cb399153ad5a08"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","3ac0b2c8aa61ddb4a310d50367d69b1f"],["/page/2/index.html","0f1055e82f04456fa2ffda67e99424ae"],["/search.xml","20ecc7cf1c5ad4b0a2d3c1b9f1dece93"],["/sw.js","35d7d54ff66dc569d82dc8274ff2e9d0"],["/tags/Git/index.html","b0bafb59c88125288429cb2afc73dce2"],["/tags/Hexo/index.html","daafffcefe8b556dad7f5f9551fe3e61"],["/tags/JAVA/index.html","e3430d1eb6d22c6154640b7e582fd874"],["/tags/LeetCode/index.html","be7e0746ccd9408f747415458a6b39ae"],["/tags/Linux/index.html","faedccba2fa33fcbf89993bbe23c7547"],["/tags/Nginx/index.html","ff7c9a23c14bebca4bd6b6e10c4fa7f8"],["/tags/Windows/index.html","a26ccf1e5529a798d85ba8bdd11fa8ee"],["/tags/index.html","fb19f92babb341fa4684bbadf2223fe1"],["/tags/剑指-Offer/index.html","36c16f028fe1204a35d213d86d3bdcea"],["/tags/每日一题/index.html","75b8bfe0754cc6a49e7c234cfa03ba59"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.example.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.another-example.org"});




