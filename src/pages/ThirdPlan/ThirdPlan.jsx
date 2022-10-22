import classes from "./ThirdPlan.module.scss";
import card_img from "../../assets/images/cargo1.jfif";
import card_img2 from "../../assets/images/cargo2.jfif";
import card_img3 from "../../assets/images/cargo3.jfif";
import card_img4 from "../../assets/images/work4.jfif";
import card_img5 from "../../assets/images/formula.png";
import ProductImg from "../../assets/images/product.png";

const ThirdPlan = () => {
  return (
    <div className={classes.thirdPlan_container}>
      <h1 className={classes.ThirdPlan_heading}>
        Transport va ortish-tushirish mashinalari ishini birgalikda tashkil
        etish
      </h1>
      <h4 className="subTitle">
        Omborlarda ortish-tushirish operatsiyalarini samarali tashkil etish
        ya’ni ortish-tushirish mashinalari bilan transport ishini
        muvofiqlashtirish omborlar logistikasining asosiy vazifalaridan biri
        hisoblanadi. Agar ortish-tushirish mashinalarining ish unumdorligi
        yuqori bo‘lib unga sarflanadigan vaqt omborga trasport vositalarini
        yetib kelish intervaliga qaraganda kichik bo‘lsa, ortish-tushirish
        mashinalari ortiqcha turib qoladi. Agar omborga transport vositalirini
        yetib kelish intervali kichik bo‘lsa, yuk ortish yoki tushirish joyida
        transport vositalari ortiqcha turib qoladilar. Ortishtushirish
        mashinalari bilan transport vositalarini ishini optimal tashkil etish
        masalalari bilan logistikada «Operatsiyalarni izlash» fanning «Yalpi
        xizmat ko‘rsatish» boMimi shug‘ullanadi. Bu masalani hal etish uchun
        transport vositalarini omborga yetib kelish intervalning qonuniyati
        tajribada aniqlanadi
      </h4>
      <marquee behavior="" direction="">
        <div className={classes.thirdPlan_container_div}>
          <img className={classes.card_images} src={card_img} alt="" />
          <img className={classes.card_images} src={card_img2} alt="" />
          <img className={classes.card_images} src={card_img3} alt="" />
          <img className={classes.card_images} src={card_img} alt="" />
          <img className={classes.card_images} src={card_img4} alt="" />
          <img className={classes.card_images} src={card_img2} alt="" />
          <img className={classes.card_images} src={card_img3} alt="" />
        </div>
      </marquee>
      <div style={{ textAlign: "center" }}>
        <img className={classes.card_images} src={card_img5} alt="" />
      </div>
      <div className={classes.worksOfEconom}>
       
        <h2>
          Халқаро стандартлаштириш ташкилоти таърифига кўра, сифат бу –
          маҳсулотнинг унга таклиф этилаётган ёки шартлашилган эҳтиёжларни
          қондириш қобилиятини берадиган маҳсулот хусусиятлари ва тавсифномалари
          йиғиндиси. Сифат қуйидаги тавсифномаларни ўз ичига олиши мумкин:
        </h2>
        <ol>
          <li className={classes.card_main_text}>
            Товарнинг белгиланган вазифаларга мувофиқ асосий эҳтиёжни қондириш
            қобилиятини белгилаб берадиган функционал тавсифномалари: автомобиль
            тезлиги, чироқ ёруғлиги.
          </li>
          <li className={classes.card_main_text}>
            Товарнинг ишончлилиги, бу бузилмасдан ишлаш, узоққа чидаш,
            таъмирлашга яроқлилик ва сақланишниўз ичига олади.
          </li>
          <li className={classes.card_main_text}>
            Товарни харид қилиш ва ундан фойдаланиш харажатларни ҳисобга олган
            ҳолда товар тежамкорлиги. Ўз эҳтиёжини қондириш учун харидор товарни
            харид қилиши етарли эмас. Агар бу техник жиҳатдан мураккаб @TDIU_ARM
            198 маҳсулот бўлса, харидорнинг эксплуатация бўйича харажатлар
            сарфлашига тўғри келади. Шундай қилиб, харидорлар харажатлари икки
            қисмдан иборат: харид харажатлари (товар нархи) ва истеъмол билан
            боғлиқ харажатлар (истеъмол нархи). Истеъмол нархи одатда сотиш
            нархидан юқори бўлади, шу сабабли бозорда минимал нарх бўйича таклиф
            этилаётган маҳсулот эмас, балки истеъмолчида бутун хизмат кўрсатиш
            муддатида истеъмол нархи минимал бўлган товар энг рақобатбардош
            бўлади
          </li>
          <li className={classes.card_main_text}>
            Инсон танаси тузилиши ва унинг ҳаракатлари билан боғлиқ антропологик
            ва эргономик хусусиятлар.
          </li>
          <li className={classes.card_main_text}>
            Товарнинг мавжуд бўлган маҳсулотлар билан бирга бўла олиши.
          </li>
          <li className={classes.card_main_text}>Экологиклик</li>
          <li className={classes.card_main_text}>
            Меъёр ва стандартларга мувофиқлик.
          </li>
          <li className={classes.card_main_text}>
            Объектив равишда мавжуд бўлмаган ва ўлчаб бўлмайдиган, балки
            инсонлар томонидан сотилаётган товарга субъектив равишда бериладиган
            рамзий хусусиятлар: эстетиклик, услуб, эмоционал образ, модага
            мослик, нуфузлилик.
          </li>
          <li className={classes.card_main_text}>
            Асллик. Ушбу мезон харидорнинг алданмаслик эҳтиёжига жавоб беради.
            Товарларни қалбакилаштиришнинг кенг қамровда бўлиши
            истеъмолчиларнинг товарлар асллиги борасидаги ҳушёрлигини оширди.
            Асллик сифат кўрсаткичини тўлдириб турадиган ва аслликни текшириш
            кўзда тутилган мустақил мезон сифатида ифодаланган стандартлар сони
            ортмоқда.
          </li>
          <li className={classes.card_main_text}>
            Истеъмол янгилиги. Мезон хилма-хилликка эҳтиёжни акс эттиради.
            Истеъмолчилар асосан хизматлар соҳасида ва товарлар ишлаб чиқариш ва
            ассортиментида инновацияларни ижобий баҳолайди. Бундан мустақил
            мезон зарурлиги келиб чиқади. Айрим товарлар (дарсликлар, даврий
            нашрлар, луғатлар) учун ушбу мезон алоҳида аҳамиятга эга
          </li>
          <li className={classes.card_main_text}>
            Ижтимоий аниқ манзиллилик мезон сифатида истеъмолчиларнинг
            индивидуал сўровларини ва ижтимоий гуруҳлар эҳтиёжларини ҳисобга
            олиш имконини беради.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ThirdPlan;
