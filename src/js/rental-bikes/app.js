import Vue from 'vue';
import VueRouter from 'vue-router';
import Bikes from './components/Bikes.vue';

Vue.use(VueRouter)

const routes = [{
  path: '/:catId',
  name: 'Bikes',
  component: Bikes,
  props: true,
}];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/',
  props: true,
});

new Vue({
  components: {
    Bikes,
  },
  data: {
    categories: {
      city: {
        desc: 'Rowery miejskie są niezwykle praktyczne i funkcjonalne. Dzięki odpowiedniej konstrukcji można się nimi poruszać bez obaw o stan odzieży. Oznacza to, że tego typu jednoślad można spokojnie prowadzić w eleganckim garniturze, modnych spodniach czy zwiewnej sukience, nie obawiając się o zabrudzenia czy wkręcenie odzieży w łańcuch.',
        bikes: [{
          name: 'CROSSWAY 15-D LADY',
          desc: 'Miejski charakter CITYWAY i CLASSICWAY podkreślają koszyk, bagażnik i stopka, a poruszanie się w ruchu ulicznym ułatwiają pedały wykonane z antypoślizgowej mieszanki gumy.',
          img: require('./../../images/bikes-city/meridacityway728whitewoman.jpg'),
        },
        {
          name: 'FREEWAY 9200 MAN /V-BRAKE',
          desc: 'Zarówno podczas długich wypraw, jak i codziennych dojazdów do pracy można polegać na bogatym wyposażeniu roweru gwarantującym wygodną jazdę. Zapewniają ją m.in. przedni amortyzator, amortyzowana sztyca, ergonomiczna kierownica z regulowanym wspornikiem, a także szerokie opony czy wygodne siodełko.',
          img: require('./../../images/bikes-city/2020-freeway-9200-man-black.jpg'),
        }],
      },
      mountain: {
        desc: 'Rowery MTB przeznaczone są do jazdy po szczególnie trudnym terenie. To zatem idealne rozwiązanie dla wszystkich tych, którzy mocnych wrażeń szukają na kamienistych ścieżkach i wyjątkowo stromych wzniesieniach. Rower MTB, nazywany także rowerem górskim, z pewnością nie zawiedzie pasjonatów wyzwań – wzmacniana rama oraz zaopatrzone w szerokie opony koła, zapewnią świetną przyczepność i umożliwią jazdę nawet po najbardziej nierównej powierzchni.',
        bikes: [{
          name: 'NINETY-SIX 9.XT',
          desc: 'Szybki rower górski z pełnym zawieszeniem, któremu odpowiada zarówno cross country, jak i maratony MTB. Ma 100-mm w pełni aktywne tylne zawieszenie, które nie buja i jest gotowe na wyścigowy ogień. Ta wszechstronna lekka maszyna świetnie sprawdza się także na ścieżkach.',
          img: require('./../../images/bikes-mountain/NINETY-SIX_XT_blkslv_MY2020.jpg'),
        },
        {
          name: 'ONE-TWENTY RC 9. 300',
          desc: 'ONE-TWENTY RC ma bardzo niski przekrok, który pozwala łatwo manewrować rowerem w trudnym terenie. Nieco bardziej stromy kąt podsiodłowy i kąt główki ramy (w porównaniu z klasycznym ONE-TWENTY) przekłada się na większą efektywność i charakter bardziej sprzyjający trasom maratonów. Niewielki skok tylnego zawieszenia sprawia, że rower świetnie radzi sobie na podjazdach.',
          img: require('./../../images/bikes-mountain/ONE-TWENTY_RC_9_300_grngrn_MY2020.jpg'),
        },
        {
          name: 'BIG.NINE 9000',
          desc: 'Karbonowe i aluminiowe modele BIG. NINE z ramą Lite mają 422-mm zasięg, 73,5° kąt rury podsiodłowej, 70° kąt główki ramy i 80-mm mostek (BIG.NINE – M). Takie wartości składają się na nowoczesną geometrię XC. Agresywna zwinność łączy się z siłą spokoju, w sam raz na dzisiejsze wymagające trasy.',
          img: require('./../../images/bikes-mountain/BIG_NINE_9000_UDgld_MY2020.jpg'),
        }],
      },
      road: {
        desc: 'Rowery szosowe mają specjalne przeznaczenie, stworzone są do osiągania największych prędkości, przy zachowaniu ekstremalnej wydajności jazdy. Doskonale wyważona aerodynamika i wytrzymałość, pozwoli na szybką jazdę i łatwe pedałowanie pod górę. Poznasz je po charakterystycznych, cienkich oponach.',
        bikes: [{
          name: 'SCULTURA DISC 5000',
          desc: 'SCULTURA z hamulcami szczękowymi i tarczowymi jest standardowo wyposażona w opony 25 mm, które zapewniają świetną trakcję, komfort i odpowiednie przeniesienie sił hamowania na drogę. Jeszcze większy komfort i pewniejsze prowadzenie można uzyskać dzięki oponom 28 mm. Jest na nie gotowa każda SCULTURA DISC.',
          img: require('./../../images/bikes-road/SCULTURA_DISC_5000_redblk_MY2020.jpg'),
        },
        {
          name: 'REACTO DISC 6000',
          desc: 'Komfort REACTO wykracza daleko poza wartości znane z kategorii aero. Wygodę w najnowszej wersji roweru poprawiono dzięki przeprojektowaniu górnych rur tylnego widelca i nowej sztycy S-Flex o smuklejszym przekroju i powiększonym okienku z pełną wkładką elastomerową. Efekt: komfort odczuwany na siodełku jest aż o 24% wyższy niż w poprzedniej wersji REACTO.',
          img: require('./../../images/bikes-road/REACTO_DISC_6000_blkslv_MY2020.jpg'),
        },
        {
          name: 'WARP 5000',
          desc: 'Aerodynamiczna karbonowa rama triathlonowa z profilami rur NACA Fastback i wewnętrznie prowadzonymi przewodami. Geometria ramy została zoptymalizowana pod kątem zawodów Ironman 70.3 i 226-km wyścigów. Ma karbonowe haki i zintegrowany zacisk sztycy, główkę ramy 1 1/8" z obu stron i hamulce w systemie direct mount dla aerodynamicznego zysku. Rama jest przystosowana do Di2.',
          img: require('./../../images/bikes-road/WARP_TRI_5000_blkblk_MY2019.jpg'),
        }],
      },
    },
  },
  el: '#main-bikes-rental-app',
  router,
});
