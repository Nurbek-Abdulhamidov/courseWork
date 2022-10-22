import predmetImg from "../../assets/images/img2.webp";
import secondPredmetBottomImg from "../../assets/images/business.png";
import classes from "./SecondPlane.module.scss";
import card_img from "../../assets/images/vazifa.png";
import secondPlanImg2 from "../../assets/images/omborvazifasi.png";
import card_img2 from "../../assets/images/work2.jfif";
import card_img3 from "../../assets/images/work3.jfif";
import card_img4 from "../../assets/images/work4.jfif";
import ScreenImg from "../../assets/images/ombor.png";
import hisotryImg from "../../assets/images/History.png";
import SystemImg from "../../assets/images/system.png";

const SecondPlan = () => {
  return (
    <div className={classes.secondPage_container}>
      <h1 className="title">Omborlarning turlari...</h1>
      <div className={classes.secondPlan_div}>
        <h5 className={classes.secondPlan_paragraph}>
          Omborlar transport logistik tizimlarning asosiy elementlaridan biri
          hisoblanadi. Yetkazib berish zanjirlarida moddiy oqimlarni boshqarish
          samaradorligi ombor xo‘jaligining qanday ishlashiga bogMiqdir. Ombor
          xo‘jaligi mahsulot sifatining saqlanishi. ishlab chiqarish va
          transportning bir maromda ishlashini, korxona maydonidan samarali
          foydalanishni, transport vositalarining ortiqcha turib qolishini
          kamaytirish imkonini beradi
          <img src={predmetImg} className={classes.textImg} alt="" />
          Ishlab chiqarish jarayoni moddiy oqimlarning bir korxonadan boshqasiga
          transportirovka qilinishi, tayyor mahsulotlarni iste’molchiga
          yetkazilishi bilan bog‘liq. Bu ishlar logistik zanjirning ba’zi
          joylarida moddiy zaxiralarni yigsilishiga olib keladi. Demak, bu
          zaxiralarni saqlash uchun maxsus joy, ya’ni omborlar kerak bo‘ladi.
          Ombor deganda, har xil moddiy resurslarni qabul qilish va saqlashga
          moMjallangan, ularni iste’mol qilishga tayyorlash va iste’mol qilish
          uchun jo ‘natishga moslashtirilgan maxsus binolar, ishootlar va har
          xil qurilmalar tushuniladi. Oborlar yuk oqimining har xil
          uchastkalarida boshlanish joyida, o‘rtasida yoki oxirida tashkil
          etilishi mumkin. Omborlarga ehtiyoj moddiy oqimlar oqishining hamma
          darvlarida mavjud bolmadi.
        </h5>
      </div>
      <div className={classes.images_div}>
        <p className="subTitle">
          Moddiy boylik manbalarini ishlab chiqaruvchidan iste’molchiga
          transportirovka qilish ikki usulda bajarilishi mumkin: - tranzit
          usulida; - omborlardan foydalanish usulida. Ishlab chiqarish jarayoni
          uzluksizligini tranzit usuli bilan yetkazish eng tejamli usul
          hisoblanadi, chunki u qo‘shimcha xarajatlarning kamayishiga olib
          keladi. Lekin bu usuldan foydalanishning o‘z shartlari bor.
          Iste’molchi korxona bitta ta’minlovchi korxonaning aniq vaqt davomida
          katta miqdorda yuboradigan moddiy boylik manbalaridan foydalansa.
          tranzit usulidan foydalanish mumkin. Boshqacha qilib aytganda,
          ta’minlashning tranzit usuli bilan tashkil qilinish imkoniyati moddiy
          boylik manbalarini iste’mol qilish miqdoriga va belgilangan tranzit
          me’yorlariga bog‘liq.
          <img src={ScreenImg} alt="" />
        </p>
        <img src={secondPredmetBottomImg} alt="" />

        <p className="subTitle">
          Tranzit me’yori deganda, bir buyurtma asosida ta’minlovchi korxonaga
          yuboriladigan moddiy boylik manbalarining eng kam qo‘yilgan miqdori
          tushuniladi. Ishlab chiqarish jaravonining uzluksizligini omborlardan
          foydalaniladigan usul bilan ta’minlashda mahsulotlar harakati
          boshqacha tashkil etiladi. Bu usul orqali materiallar korxona va
          tashkilot omborlariga yetib borishdan avval, ta’minlash-o‘tkazish
          tashkilotlarining ombor va bazalaridan iste’molchilarga yetkaziladi.
          Omborlar orqali ta’minlash usuli turli xil moddiy boylik manbalarini
          kam miqdorda iste’mol qiladigan korxonalarda qo‘llanadi. Ombor orqali
          ta’minlashning ijobiy tomoni yana shundaki, bunda ta’min!ash-o‘tkazish
          bazadagi zaxiralardan samarali foydalanish, shuningdek, qisqa vaqt
          davomida birdaniga keng doiradagi iste’molchilar ehtiyojini qondirishi
          mumkin, iste’molchilarni har tomonlama ta’minlash imkoniyati
          yaratiladi. Ishlab chiqarish korxonasining omborlari, yordam chi
          sexlari va transportlari korxona ishlab chiqarish tuzilm asining eng
          muhim haiqalaridan hisoblanadi.
        </p>
        <h1 className="title">
          Korxona omborlarining asosiy vazifalari quyidagilardan iborat:
        </h1>
        <img className={classes.card_images} src={card_img} alt="" />

        <div className={classes.thirdPlan_container_div}>
          <p className="subTitle">
            Omborlar ko‘pgina belgilariga qarab turlarga ajratiladi. Omborlar
            yuk oqimining har xil uchastkalarida boshlanish joyida, o ‘rtasida
            yoki oxirida tashkil etilishi mumkin. Omborlarga ehtiyoj moddiy
            oqimlar oqishining hamma darvlarida mavjud bo‘ladi.
          </p>
        </div>
      </div>
      <h4 className="subTitle" style={{ textAlign: "left" }}>
        Moddiy boylik manbalarini ishlab chiqaruvchidan iste’molchiga
        transportirovka qilish ikki usulda bajarilishi mumkin:
      </h4>
      <ul>
        <li className="subTitle" style={{ textAlign: "left" }}>
          tranzit usulida;
        </li>
        <li className="subTitle" style={{ textAlign: "left" }}>
          omborlardan foydalanish usulida.
        </li>
      </ul>
      <p className="subTitle">
        Ishlab chiqarish jarayoni uzluksizligini tranzit usuli bilan yetkazish
        eng tejamli usul hisoblanadi, chunki u qo‘shimcha xarajatlaming
        kamayishiga olib keladi. Lekin bu usuldan foydalanishning o ‘z shartlari
        bor. Iste’molchi korxona bitta ta’minlovchi korxonaning aniq vaqt
        davomida katta miqdorda yuboradigan moddiy boylik manbalaridan
        foydalansa, tranzit usulidan foydalanish mumkin. Boshqacha qilib
        aytganda, ta’minlashning tranzit usuli bilan tashkil qilinish imkoniyati
        moddiy boylik manbalarini iste’mol qilish miqdoriga va belgilangan
        tranzit me’yorlariga bog‘liq. Tranzit m e’yori deganda, bir buyurtma
        asosida ta’minlovchi korxonaga yuboriladigan moddiy boylik manbalarining
        eng kam qo‘yilgan miqdori tushuniladi. Ishlab chiqarish jarayonining
        uzluksizligini omborlardan foydalaniladigan usul bilan ta’minlashda
        mahsulotlar harakati boshqacha tashkil etiladi. Bu usul orqali
        materiallar korxona va tashkilot omborlariga yetib borishdan avval,
        ta’minlash-o‘tkazish tashkilotlarining ombor va bazalaridan
        iste’molchilarga yetkaziladi. Omborlar orqali ta’minlash usuli turli xil
        moddiy boylik manbalarini kam miqdorda iste’mol qiladigan korxonalarda
        qo‘llanadi. Ombor orqali ta’minlashning ijobiy tomoni yana shundaki,
        bunda ta’minlash-o‘tkazish bazadagi zaxiralardan samarali foydalanish,
        shuningdek, qisqa vaqt davomida birdaniga keng doiradagi iste’molchilar
        ehtiyojini qondirishi mumkin, iste’molchilami har tomoniama ta’minlash
        imkoniyati yaratiladi. Ishlab chiqarish korxonasining omborlari,
        yordamchi sexlari va transportlari korxona ishlab chiqarish
        tuzilmasining eng muhim halqalaridan hisoblanadi.
      </p>
      <h2 className="title" style={{ textAlign: "left" }}>
        Korxona omborlarining asosiy vazifalari quyidagilardan iborat
      </h2>
      <ol style={{ textAlign: "left" }}>
        <li className="subTitle">
          Kerakli yoqilg‘i, xomashyo, material, mahsulot va boshqa manbalar
          zaxiralarini to‘plash va iste’molchilarni uzluksiz ta’minlash.
        </li>
        <li className="subTitle">Moddiy boylik manbalarini saqlash.</li>
        <li className="subTitle">
          Ortish-tushirish ishlari, omboming ichki ishlarini eng oz mehnat va
          moliya xarajatlari bilan oqilona tashkil etish
        </li>
        <li className="subTitle">
          Ombor maydonlaridan oqilona foydalanish va omboming asbob-uskunalarini
          samarali ishlatish
        </li>
        <li className="subTitle">
          Moddiy boylik manbalarini ishlab chiqarishda iste'mol qilishga
          tayyorlash.
        </li>
        <li className="subTitle">
          {" "}
          Markazlashtirilgan usulda material va mahsulotlarni kerakli joylarga
          yetkazib berish.
        </li>
        <li className="subTitle">
          Materiallardan tejamli foydalanishni nazorat qilish.
        </li>
        <li className="subTitle">
          Ishlab chiqarish jarayonida ishlatilmasdan qolgan, ortiqcha moddiy
          boyliklar manbalari zaxiralarini o bz vaqtida aniqlash va ulardan
          foydalanishni tashkil etish.
        </li>
      </ol>
      <img src={secondPlanImg2} alt="" />
    </div>
  );
};

export default SecondPlan;
