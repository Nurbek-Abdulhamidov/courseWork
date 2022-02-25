import predmetImg from "../../assets/images/img2.webp";
import secondPredmetBottomImg from "../../assets/images/business.png";
import classes from "./SecondPlane.module.scss";
import card_img from "../../assets/images/workerImg.jpg";
import card_img2 from "../../assets/images/work2.jfif";
import card_img3 from "../../assets/images/work3.jfif";
import card_img4 from "../../assets/images/work4.jfif";

const SecondPlan = () => {
  return (
    <div className={classes.secondPage_container}>
      <h1>Iqtisodiy tahlilning predmeti</h1>
      <div className={classes.secondPlan_div}>
        <h5 className={classes.secondPlan_paragraph}>
          Har qanday fanning vujudga kelishi uchun hayotiy zarurat tug'ilishi
          lozim. Shu tufayli fanning shakllanishi biror kishi yoki vazirlikning
          ijod mahsuli bo‘lib qolmasdan, balki obyektiv jarayonga tayanadi.
          Xo'jalik faoliyatini iqtisodiy tahlil qilish fani ko‘p asrlik tarixga
          ega bo'lgan buxgalteriya hisobi va statistika kabi fanlar asosida
          vujudga kelgan, buning uchun esa obyektiv shart-sharoitlar yaratilgan.
          Korxonalami to‘g‘ri, oqilona boshqarish, uning moliyaviy holatini
          yaxshilash, raqobatbardoshlik quwatini oshirish xo'jalik faoliyatini
          chuqurroq o'rganishni talab etdi. Bu esa buxgalteriya balansi va
          boshqa hisobotlarda ifodalangan ba‘zi ko‘rsatkichlarga izoh berishni
          talab qildi. Bular esa, o‘z navbatida, hozirgi tahlil fanining vujudga
          kelishi uchun obyektiv asos bo'lgan
        </h5>
        <img src={predmetImg} alt="" />
      </div>
      <div className={classes.images_div}>
        <p className={classes.secondPlan_paragraph}>
          Fanning predmeti deganda, shu fanda nima o‘rgatilishi tushuniladi. Har
          qanday mustaqil fan o‘z predmetiga ega. Iqtisodiy tahlil fanining
          predmetiga keng ma‘noda qaraydigan bo'lsak, u iqtisodiy fan sifatida
          tahlil qilinayotgan obyekt (korxona, birlashma, kompaniya,
          aksiyadorlik jamiyati, konsem, korporatsiya kabilar) xo‘jalik
          faoliyatining barcha sohalarini (iqtisodiy, ijtimoiy, texnik,
          texnologik va h.k.) o‘z ichiga oladi. Lekin har bir iqtisodiy fan
          o‘ziga xos xususiyatga, o‘zi o‘rganadigan predmetga ega. Bu faqat shu
          fanga xos bo'lib, imkoni boricha boshqa fanlarda takrorlanmasligi
          lozim. Bu talab shu fanning mustaqil fan sifatida faoliyat ko'rsatishi
          uchun asosiy shartlardan biri hisoblanadi. Xo‘jalik faoliyati tahlili
          (kelgusi matnlarda faqat iqtisodiy tahlil yoki tahlil ham deb
          yuritiladi) fanning predmeti tom ma'noda tahlil qilinayotgan
          obyektning xo‘ja!ik faoliyatidir. Ammo buxgalteriya hisobi,
          statistika, moliya va kredit, audit, marketing, menejment kabi
          ianlaming ham predmeti keng ma'noda xo'jalik faoliyatidir. Bu fanlar
          ham xo'jalik faoliyatida sodir bo'layotgan ijtimoiy-iqtisodiy
          jarayonlaming u yoki bu jihatini o'rgatadi. Demak, har bir fanning,
          shu jumladan xo'jalik faoliyati tahlili fanining o'ziga xos va mos
          jihatini, unga tegishli predmetni aniqlab olishi lozim. <br /> <br />
          Tahlil fani xo'jalik faoliyatida sodir bo'layotgan barcha
          ijtimoiyiqtisodiy jarayonlarni o'z ichiga oladi. Ammo bu
          jarayonlarning sodir bo'lish paytini emas, balki uning natijasini
          o'rganadi. Obyektda sodir 19 bo'Iadigan iqtisodiy jarayonlar uning
          biznes rejasida ko'zda tutilgan maMumotga asoslansa, jarayonning sodir
          bo'lishini qonuniy jihatdan hujjatlashtirish biian buxgalteriya
          hisobi, statistika kabi faniar shug'ullanadi. Shu jarayonlaming
          natijasi ma‘lum davrlarda (oy, chorak, yil) jamlanib boriiadi va turli
          hisobotlarda o‘z aksini topadi. Tahlil esa aynan ana shu tuzilgan
          hisobotlarga, jamlangan hujjatlarga asoslanadi.
        </p>
        <img src={secondPredmetBottomImg} alt="" />
        <h3 className={classes.main_bordered_text}>
          Shunday qilib, iqtisodiy tahlil fanining predmeti, xo‘jalik
          faoliyatida <span className={classes.bold_text}>obyektiv</span>{" "}
          (tashqi) va <span className={classes.bold_text}>subyektiv</span>{" "}
          (ichki) omillar ta’sirida sodir bo'lgan, bo'layotgan va bo'Iadigan
          ijtimoiy-iqtisodiy jarayonlarni ma’lumotlar manbaida ifodalangan
          ko'rsatkichlar tizimi orqali uning holatiga baho berish va yaxshilash
          yo'llarini ishlab chiqishni o'rganishdan iboratdir.
        </h3>
        <h3 className={classes.main_bordered_text}>
          Tahlilning predmetida{" "}
          <span className={classes.bold_text}>obyektiv</span> (tashqi) va{" "}
          <span className={classes.bold_text}>
            <span className={classes.bold_text}>subyektiv</span>{" "}
          </span>{" "}
          (ichki) omillar alohida o‘rin tutadi, chunki iqtisodiy jarayonlar
          o‘z-o‘zidan sodir bo'lmaydi. Ular ma'Ium ichki va tashqi omillar
          ta'siri ostida ro‘y beradi. Shu omillar ta’sirini boshqa faniar
          o'rgatmaydi. Bu faqat tahlil fanida o'rganiladi va uning predmetining
          asosini tashkil etadi. Shuningdek, xo'jalik faoliyati natijasiga
          to‘g‘ri baho bermasdan, unga ta’sir qilgan ijobiy va salbiy omillami
          o'rganmasdan turib ko'zda tutilgan maqsadga erishib bo'lmaydi. Shu
          tufayli tahlil fani predmetining markazida obyektiv va subyektiv
          omillami o'rganish lozimligi qayd qilinishi bejiz emas.
        </h3>
        <p className={classes.secondPlan_paragraph}>
          Tahlilning predmetini o'rganishda faqat sodir bo'layotgan
          ijtimoiyiqtisodiy jarayonlar biian cheklanib qolish mutlaqo yetarli
          bo'lmas edi. Tahlildan maqsad mavjud natijaga odilona baho berish
          biian birgalikda yo‘l qo'yilgan kamchiliklarni kelgusida bartaraf
          etish va shu orqali tahlil qilinayotgan obyektning iqtisodiy va
          moliyaviy ahvolini yaxshilashdan iborat. Bu esa sodir bo'lgan va
          bo‘layotgan jarayonlarga to‘g‘ri baho berib, bo'Iadigan jarayon
          andozasini ham chizib berishni taqozo etadi. Shu tufayli tahlilning
          predmeti o'tgan, bo'layotgan va bo'Iadigan ijtimoiy-iqtisodiy
          jarayonlami o'z ichiga qamrab oladi. Barcha ijtimoiyiqtisodiy
          jarayonlar natijasi ko'rsatkichlarda ifodalanadi. Ko'rsatkichlar esa
          asosan ma'lumotlar manbaida (rejalarda, me'yorlarda, hisobotlarda va
          h.k.) o'z aksini topadi. Obyektda iqtisodiy jarayonlar yakka-yakka
          bo'lib emas, balki bir-biriga dialektik bog'liq ravishda birdaniga
          sodir bo'ladi. Uning har bir jihati alohida ko'rsatkichlarda
          ifodalanadi. Shu tufayli xo'jalik faoliyatini o'rganishda bitta
          ko'rsatkich emas, balki ko'rsatkichlar tizimidan foydalaniladi. Bu
          esa, o'z navbatida, tahlil predmetini o'rganishda ma'lumotlar manbaida
          ifodalangan ko'rsatkichlar sistemasiga asoslanish zaruriyatini
          keltirib chiqaradi.
        </p>
        <div className={classes.thirdPlan_container_div}>
          <img className={classes.card_images} src={card_img} alt="" />
          <img className={classes.card_images} src={card_img2} alt="" />
          <img className={classes.card_images} src={card_img3} alt="" />
          <img className={classes.card_images} src={card_img4} alt="" />
        </div>
        <p>
          Juda ko‘p iqtisodiy fanlar tnavjud. Lekin ulaming ichida tahlil fani
          xo‘jalik faoliyatining natijasiga odilona baho bera oladi. Undagi
          ijobiy va salbiy o'zgarishlarga omillar ta‘sirini aniqlaydi. Shularga
          asosan xo'jalik faoliyatini yaxshilash yoMlarini ishlab chiqadi. Bu
          xususiyatlar faqat tahlilga xos bo'lganligi uchun ham uning predmetida
          natijaga to‘g‘ri baho berish va yaxshilash yoMlamni ishlab chiqish
          tegishli o'ringa ega. Shunday qilib, tahlil fani mustaqil fan bo‘iib,
          o'ziga xos xususiyatlarga, betakror predmetiga ega. Tahlilda
          o‘rganiladigan iqtisodiy jarayonlar va ulaming muhim jihatlari aynan
          shu tarzda boshqa fanlarda o‘rganilmaydi va takrorlanmaydi. Shu
          tufayli har bir mustaqil fan singari tahlil fanining ham o‘ziga xos
          predmeti shakllandi, tarkib topdi, nazariy jihatdan boyib,
          yildan-yilga aniqliklar kiritilib, takomillashib bormoqda. Har qanday
          fanning obyekti boMishi lozim. Ammo shu fannnng nazariyasiga
          bag'ishlangan eng so‘nggi adabiyotlarda ham bu masala yetarlicha
          yoritilmagan. Shu tufayli fanning predmeti bilan obyektini ko‘p
          hollarda bir xil tushunchalar deb qaraladi. Bu esa, o‘z navbatida,
          nazariy jihatdan asossiz, chalkash xulosalarga olib keladi. Har qanday
          fanning obyekti uning predmeti qayerlarda amalga oshishini ko‘rsatadi.
          Tahlil fanining predmeti hozirgi bozor munosabatlari shakllanayotgan
          sharoitda ko‘p mulkchilikka asoslangan barcha yuridik va jismoniy
          shaxslaming xo'jalik faoliyatida mujassam. Shu tufayli iqtisodiy
          tahlil fanining obyektiga davlat, jamoat tashkilotlari,
          korporatsiyalar, trestlar, birjalar, korxonalar, tashkilotlar,
          birlashmalar va boshqa xo‘jalik yurituvchi subyektlar kiradi. Bu
          obyektlar iqtisodiy asosi jihatidan davlat, jamoa, kooperativ,
          aksiyadorlik, xususiy, xorijiy va aralash kabi mulk shaklida faoliyat
          ko'rsatadigan obyektlarga bo'linadi. 0 ‘zbekiston Respublikasi o‘ziga
          xos va mos iqtisodiy taraqqiyot yo'lini tanladi. Bu mustaqil yo‘l
          bilan hamma sohada, xususan milliy hisoblar tizimida ham jahon
          andozalariga bosqichma-bosqich o‘tish ko‘zda tutilgan. Bu esa, mulk
          shaklidan qat’i nazar, tahlilning bir xil metodologik usulini
          yoritishni taqozo etadi. Obyekt (makon) va davr (zamon)ning qanday
          bo‘lishidan qat’i nazar ushbu fan predmetining mohiyati o'zgarmasligi,
          obyekt esa tahlilning qaysi makonda o‘tkazilishiga qarab o'zgarib
          turishi mumkin. Shu jihatdan uning predmeti obyektidan mazmun va
          mohiyati jihatidan tubdan farq qiladi.
        </p>
      </div>
    </div>
  );
};

export default SecondPlan;
