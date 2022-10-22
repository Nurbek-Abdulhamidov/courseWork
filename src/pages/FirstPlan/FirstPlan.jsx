import classes from "./FirstPlan.module.scss";
import { MdOutlineDoubleArrow } from "react-icons/md";
import firstPlanImg from "../../assets/images/business.png";
import yukImg from "../../assets/images/yuk.png";
import SaveImg from "../../assets/images/saveImg.png";
import SaveImg2 from "../../assets/images/saveYuk.png";
import SaveImg3 from "../../assets/images/saveYuk2.png";
import secondPlanImg from "../../assets/images/logistikImg.jfif";

export const FirstPlan = () => {
  return (
    <div className={classes.firstplan_wrapper}>
      <h1 className="title">Omborlarda amalga oshiriladigan operatsiyalar</h1>

      <div className={classes.plan_container}>
        <div className={classes.left_plan_div}>
          <p>
            <b>
              Omborlar bir-biridan farq qilishiga qaramay, deyarli bir xil
              logistik funksiyalami bajaradi:
            </b>
            <ul>
              <li>moddiy zaxiralarni joylashtirish va saqlash;</li>
              <li>moddiy oqimlarni qayta ishlash;</li>
              <li>logistik servis va xizmat ko‘rsatishni ta’minlash</li>
            </ul>
            <b>
              Har qanday ombor, kamida, uch xil moddiy oqimlarga ishlov beradi
            </b>
            <ol>
              <li>kiruvchi</li>
              <li>chiquvchi</li>
              <li>ichki</li>
            </ol>
          </p>
          <img className={classes.enterImg} src={firstPlanImg} alt="Img bor" />
        </div>
        <div className={classes.left_plan_div}>
          <img className={classes.enterImg} src={secondPlanImg} alt="Img bor" />
          <p>
            Kirayotgan moddiy oqimlar transportdan tushiriladi, miqdori va
            sifati tekshiriladi. Chiquvchi oqim esa, albatta yuklanadi. Ichki
            oqimlar korxona ichida bir joydan boshqasiga ko‘chiriladi. Moddiy
            oqimlarni o ‘zgartirish ularga ishlov berish orqali yangi
            ko‘rinishga keltirishdir, masalan, qoplash yoki qadoqlash va hokazo.
            Endi har xil omborlar bajarishi mumkin bo‘lgan vazifalarni ko‘rib
            chiqaylik. . Korxonaning tayyor mahsulot omborida ular to plamsni va
            taxlanishi, saqlanishi, navlarga ajratilishi /oki qo‘shimcha ishlov
            berilishi, markirovka qilinishi, ortishga tayyorlamshi va ortilishi
            mumkin. . . u , Iste’molchi korxonalaming xomashyo omborlari
            yuklarni qabul qiladi, navlarga ajratadi, saqlaydi va ishlab
            chiqarish uchastkalariga yuborishga tayyorlaydi.
          </p>
        </div>
        <div className={classes.left_plan_div}>
          <div>
            <p>
              Ulgurji vositachi firmalarning omborlari yuqorida sanab o‘tilgan
              vazifalardan tashqari quyidagi vazifalarni ham bajaradi;
            </p>
            <ul>
              <li>tovarlarning bir joyda to‘planishini taminlash</li>
              <li>mahsulotlarni komlektlash va tanlash;</li>
              <li>
                kichik partiyalarda tovarlarni iste’molchi korxonalarga
                yetkazish va hokazo
              </li>
            </ul>
            <p>
              Omborlarning logistik funksiyalari logistik operatsiyalami
              bajarish davrida namoyon bo‘ladi. Omborlar juda ко p turlarga
              ajratilganligi sababli, logistik funksiyalari farqlanishiga
              qaramay, ba’zi o‘xshashliklari ham mavjud. Har qanday omborlar
              quyidagi tartibda ishlaydi:
            </p>
            <ol>
              <li>transportdan tushirish;</li>
              <li>tovarni qabul qilib olish;</li>
              <li>joylashtirish va saqlash (taxlash);</li>
              <li>saqlash joyidan tovarni tanlab olish;</li>
              <li>tovarlarni butlash va qadoqlash;</li>
              <li> yuklash va boshqalar.</li>
            </ol>
            <p>
              Yuklami ortish-tushirish operatsiyalari yuk tavsiflari, transport
              vositasining va ortish-tushirish mexanizmining turiga bog‘liq
              bo‘ladi (31- rasm).
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={yukImg} alt="" />
            </div>
            <h1 className="subTitle">
              Omborga qabul qilingan yuk saqlash zonasiga tashib keltiriladi.
              Tarali donabay yuklar stellajlarga yoki shtabellarga taxlanishi
              mumkin. Yuklarni omborlarda saqlashning ba’zi usullari 32 va 33 -
              rasmlarda ko‘rsatilgan.
            </h1>
            <div style={{ textAlign: "center" }}>
              <img src={SaveImg} alt="" />
              <img src={SaveImg2} alt="" />
              <img src={SaveImg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstPlan;
