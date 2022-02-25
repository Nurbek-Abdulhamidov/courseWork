import classes from "./ThirdPlan.module.scss";
import card_img from "../../assets/images/workerImg.jpg";
import card_img2 from "../../assets/images/work2.jfif";
import card_img3 from "../../assets/images/work3.jfif";
import card_img4 from "../../assets/images/work4.jfif";

const ThirdPlan = () => {
  return (
    <div className={classes.thirdPlan_container}>
      <h1 className={classes.ThirdPlan_heading}>
        Iqtisodiy tahlilning vazifalari
      </h1>
      <h4 className={classes.ThirdPlan_heading_sml}>
        Bozor iqtisodiyoti sharoitida korxonalami boshqarishda iqtisodiy
        tahlilning roli keskin oshmoqda, chunki boshqaruv tizimida oldingi
        ma’muriy-buyruqbozlik tizimidan voz kechilib, yangi, erkin iqtisodiy
        mexanizmlar orqali boshqarish tizimi shakllanmoqda. Rejali iqtisodiyotda
        tahlil asosan reja ko'rsatkichlarini asoslashga, uning bajarilishini
        ta’minlashga qaratilgan bo'Isa, bozor iqtisodiyotida esa har bir
        xo'jalik subyekti, mulk shaklidan qat’i nazar o‘z faoliyatini yuqoridan
        berilgan buyruqni bajarishga qaratmasdan, balki mustaqil ravishda
        o'zining iqtisodiy qudratini takomillashtirish maqsadida erkin
        boshqarishga qaratadi. Bu esa, o‘z navbatida, iqtisodiy tahlilning
        rolini yanada oshiradi. Iqtisodiy tahlil orqali har bir subyektda mavjud
        bo'lgan ichki va tashqi imkoniyatlar aniqlanadi, ulami amaliyotga
        safarbar qilish chora-tadbirlari ishlab chiqiladi. Har bir fanning
        vazifasi iqtisodiy shart-sharoitga qarab belgilanib boriladi, lekin u
        oidiga qo‘yilgan vazifalami to'liq va keng hal etish uchun qator
        uslublami qo'llaydi.
      </h4>
      <div className={classes.thirdPlan_container_div}>
        <img className={classes.card_images} src={card_img} alt="" />
        <img className={classes.card_images} src={card_img2} alt="" />
        <img className={classes.card_images} src={card_img3} alt="" />
        <img className={classes.card_images} src={card_img4} alt="" />
      </div>
      <div className={classes.worksOfEconom}>
        <h4>
          Har bir fanning vazifasi iqtisodiy shart-sharoitga qarab belgilanib
          boriladi, lekin u oidiga qo‘yilgan vazifalarni to'liq va keng hal
          etish uchun qator uslublarni qo'llaydi.
          <br /> <br />
        </h4>
        <h1 className={classes.ThirdPlan_heading}>
          Iqtisodiy tahlilning eng muhim vazifalari quyidagilardan iborat:{" "}
          <br />
        </h1>
        <ol>
          <li className={classes.card_main_text}>
            Biznes-rejaning qanchalik realligi (mavjudligi) va ilmiy jihatdan
            asoslanganligiga baho berish;
          </li>
          <li className={classes.card_main_text}>
            Xalq xo'jaligini rivojlantirishning joriy va istiqbol rejalarini
            tuzish uchun iqtisodiy ko'rsatkichlar bazasini aniqlash;
          </li>
          <li className={classes.card_main_text}>
            {" "}
            Biznes-rejasining bajarilishiga obyektiv baho berish hamda uni
            bajarishda korxonalarga bog‘liq va bogMiq bo'lmagan omillar va
            sabablami bir-biridan ajratib aniqlash;
          </li>
          <li className={classes.card_main_text}>
            Ichki xo'jalik zaxiralarini aniqlash (bu o'rinda tahlilning
            samarasi, birinchidan, aniqlangan zaxiralami butun nazariy jihatdan
            asoslangan zaxiralarga nisbati va ikkinchidan, amalga oshirilgan
            zaxiralaming aniqlangan zaxiralarga nisbati bilan belgilanadi);
          </li>
          <li className={classes.card_main_text}>
            Korxonalarning xo'jalik faoliyatida kutiladigan natijalami oldindan
            aniqlash;
          </li>
          <li className={classes.card_main_text}>
            Tahlil materiallariga asosan ishlab chiqarishda aniqlangan
            kamchiliklarni tuzatishga qaratilgan tadbirlami ishlab chiqish
          </li>
        </ol>
        <h3>
          Ko‘rinib turibdiki, iqtisodiy tahlilning vazifasi bozor munosabatlari
          shakllanayotgan bugungi sharoitda ham, kelajakda ham korxonalar
          xo‘jalik faoliyatini uzluksiz yaxshilab borishi uchun iqtisodiy dastak
          sifatida muhim ahamiyatga ega bo‘ladi.
        </h3>
      </div>
    </div>
  );
};

export default ThirdPlan;
