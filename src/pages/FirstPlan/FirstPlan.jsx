import classes from "./FirstPlan.module.scss";
import firstPlanImg from "../../assets/images/business.png";
import secondPlanImg from "../../assets/images/rightClinicImg.png";

export const FirstPlan = () => {
  return (
    <div className={classes.firstplan_wrapper}>
      <h1 className={classes.firstplan_heading}>
        Iqtisodiy tahlilning mazmuni
      </h1>
      <div className={classes.plan_container}>
        <div className={classes.left_plan_div}>
          <p>
            Iqtisodiy tahlil o‘z mazmuni jihatidan turlichadir. Tahlilning ikki
            xil yo'nalishi mavjud: moliya - iqtisodiy va texnik - iqtisodiy.
            Moliyaiqtisodiy tahlilda biznes-rejaning bajarilishiga ta’sir
            ko‘rsatuvchi (texnika, texnologiya, ishlab chiqarishni tashkil
            etish) kabi omillar o'rganilmaydi. Texnik-iqtisodiy tahlilda esa
            texnika va texnologiya hamda ishlab chiqarishni tashkil etishga oid
            barcha masalalar har tomonlama va chuqur o‘rganilib, uning ishlab
            chiqarish samaradorligini oshirishga ko‘rsatgan ta’siri ham
            aniqlanadi. <br /> <br />
            Shuning uchun texnik-iqtisodiy tahlil korxonalardagi mavjud barcha
            zaxiralarni to'la va har tomonlama aniqlashga imkon beradi.
          </p>
        </div>
        <div className={classes.right_planImg_div}>
          <img
            className={classes.firstPlanImg}
            src={firstPlanImg}
            alt="Img bor"
          />
        </div>
      </div>
      <div className={classes.plan_container}>
        <div className={classes.right_planImg_div}>
          <img
            className={classes.firstPlanImg}
            src={secondPlanImg}
            alt="Img bor"
          />
        </div>
        <div className={classes.left_plan_div}>
          <p>
            Tahlil korxona va uning bo'linmalari faoliyatining hamma tomonlarini
            o‘z ichiga olgan umumiy hamda ishning qandaydir biror tomoni yoki
            korxonaning bir necha bo‘g‘inlarini o‘z ichiga olgan tanlanma
            (tematik) boMadi. Shuningdek, yirik masalalarga bag'ishlangan,
            korxonaning kundalik ishini o'rganish va ichki imkoniyatlarini
            topishga qaratilgan tezkor tahlil boMadi. <br /> <br />
            Tekshiriladigan obyekt va boshqaruv bo‘g‘inlariga qarab tahlil
            qilish quyidagilarga boMinadi: ishchi o‘rin, sex ichida, sex,
            korxona va tarmoqlar bo‘yicha hamda tarmoqlararo. Tahlilda
            zaxiralarni aniqlash ko'lami quyidagilardan iborat: ichki korxona va
            korxonalararo, tarmoq va tarmoqlararo zaxiralar.
          </p>
        </div>
      </div>
      <div className={classes.plan_container}>
        <div>
          <h3 className={classes.firstplan_heading}>
            Qabul qilinadigan qarorlarning xarakteriga qarab, tahlil
            quyidagilarga bolinadi:
          </h3>
          <ul className={classes.list_items}>
            <li className={classes.list_item}>Dastlabki</li>
            <li className={classes.list_item}>Tezkor</li>
            <li className={classes.list_item}>Yakuniy</li>
            <li className={classes.list_item}>Istiqbolli</li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          {" "}
          Bulardan, nazariy va amaliy jihatdan eng takomillashtirilgani -
          yakuniy tahlil hisoblanadi (korxonalarning yillik hisobotiga asosan).
          <br /> <br />
          Tahlil o’tkazish muddatlari (har kuni, bir oyda va bir yilda) yoki
          zarur bo'lishiga qarab ahyon-ahyonda olib borilishi mumkin.
        </p>
      </div>
      <div>
        <h4 className={classes.firstplan_heading}>
          Iqtisodiy tahlil o'tkazishning 3 bosqichi mavjud:
        </h4>
        <ol className={classes.item_cards}>
          <li className={classes.item_card}>
            {" "}
            Korxona faoliyatining umumiy iqtisodiy natijalarini ko'rib
            chiqishdan boshlanadi, chunki u ishning samaradorligini aniqlash,
            o'tgan davrlarga nisbatan o‘zgarishlami, shuningdek, bir korxona
            ishini boshqasi 23 bilan taqqoslash hamda korxona faoliyatining
            boshqa tomonlarini bilish imkonini beradi;
          </li>
          <li className={classes.item_card}>
            {" "}
            Biznes-rejaning bajarilish darajasiga ta’sir etuvchi eng muhim
            omillami tekshirish natijasida ichki xo'jalik zaxiralarini aniqlash;
          </li>
          <li className={classes.item_card}>
            {" "}
            Tahliliy tekshirishlar natijalarini umumlashtirish va shu asosda
            butun zaxiralarni o‘z ichiga olgan yig‘ma zaxiralarni hisoblash
            (to‘plam zaxiralar).
          </li>
        </ol>
      </div>
      <div>
        <h3 className={classes.firstplan_heading}>
          Korxonalaming xo'jalik faoliyatini iqtisodiy tahlil qilish uchun asos
          qilib olingan quyidagi tamoyillar mavjud:
        </h3>
        <ol className={classes.last_cards}>
          <li className={classes.last_card}>
            Obyektning hoiatini dastlabki iqtisodiy nazariya jihatidan tahlil
            qilishning zarurligi, o‘rganiladigan hodisalarning mohiyati va
            bir-biriga o‘zaro bogliqligi.
          </li>
          <li className={classes.last_card}>
            Tahlilning kompleks xarakterga ega ekanligi hamda o‘zaro birbiriga
            uzviy ravishda bog‘liq tahliliy ko'rsatkichlar tizimining
            qoMlanishi.
          </li>
          <li className={classes.last_card}>
            Iqtisodiy ma’lumotlami tahliliy jihatdan qayta ishlash jarayonida
            o‘rganiladigan hodisalami guruhlashtirish va ularga ta’sir
            ko'rsatuvchi omillami miqdor va sifat belgilariga qarab turkumlash.
          </li>
          <li className={classes.last_card}>
            Korxonalar faoliyatini tahlil qilishda taqqoslash usuiining ichki
            xo‘jalik zaxiralarini aniqlashdagi ahamiyati
          </li>
          <li className={classes.last_card}>
            Tahlil natijalari asosida ilg'or tajribalami keng yoyish va ommani
            korxonalarni boshqarishgayana ham kengjalb etish.
          </li>
          <li className={classes.last_card}>
            Korxonalarni boshqarishda hisob va hisobotning hal qiluvchi roli,
            ulaming iqtisodiy tahlilda asosiy axborot manbai ekanligi.
          </li>
        </ol>
      </div>
    </div>
  );
};
export default FirstPlan;
