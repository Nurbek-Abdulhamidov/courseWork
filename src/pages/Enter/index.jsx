import React from "react";
import EnerImg from "../../assets/images/enterImg.jpg";
import img2 from "../../assets/images/kirish.png";
import classes from "./index.module.scss";

const Entering = () => {
  return (
    <div className={classes.container}>
      <div className="title">
        <marquee>КИРИШ</marquee>
      </div>
      <div className="subTitle">
        0 ‘zbekiston Respublikasi mustaqillikka erishganidan so‘ng
        ijtimoiy-iqtisodiy va siyosiy o‘zgarishlar hayotga izchil joriy etila
        boshladi. Respublikaning bozor iqtisodiyotiga o‘tib borishi, xususiy
        mulkchilikni, avtomobil sanoatini vujudga kelishi, chet ellar bilan teng
        huquqli iqtisodiy aloqalarning yo‘lga qo‘yilishi transport sohasida
        yangi va dolzarb masalalami yuzaga keltirdi. Bugungi kunda xo‘jalik
        yurituvchi subyektlarning har xilligi va teng huquqliligi, ular
        o‘rtasidagi raqobat, tadbirkorlik tashabukorligi, o‘zini o‘zi boshqarish
        va moliyalashtirish kabi bozor tamoyillari, o‘z navbatida, tashishning
        yangi texnologiyalarini ishlab chiqishni va hayotga joriy etish
        masalasini vujudga Jceltirdi. Bunday texnologiyalar tashish jarayonini
        yaxlit holda, ya’ni «ishlab chiqaruvchi - tashib beruvchi - iste’molchi»
        .zanjirini bir butun holda ko‘rish, mahsulotlar (moddiy oqimlar,
        yo‘lovchilar)
        <img className={classes.enterImg} src={EnerImg} alt="" />
        funksiyalar va operatsiyalar, logistikaning metodologik apparati,
        logistik axborot tizimlari, logistik tizimlarni boshqarish va logistik
        markazlar haqida tushunchalar berilgan. Muallifiar o‘quv qo‘llanmani
        tayyorlashda va chop etishga tavsiya berishda o‘zlarining tanqidiy
        mulohazalari va ko‘rsatmalari bilan ishtirok etgan TAYI o‘qituvchilari
        i.f.d., prof. Sh.A.Butayev, t.f.n., dot. A.A.Nazarov, i.f.n., dot.
        X.B.Baxodirov, i.f.n., dots. N.S. Sarvirova, katta o‘qituvchi
        N.Arifjonovalar va internet ma’lumotlarini olishda katta yordam bergan
        Sh.R.Odilovlarga o‘z minnatdorchiligini bildiradilar hamda mazkur
        qo‘lIanmani takomillashtirish borasida bildiriladigan barcha takliflar
        uchun oldindan tashakkur bildiradilar
        <img className={classes.enterImg2} src={img2} alt="" />
        Logistika tushunchasi juda qadim iy tarixga ega bo‘lib, birinchi m arta
        harbiy fan sifatida vujudga kelgan. IX asrda Vizantiyada bu tushunchaga
        qo‘shinni barcha kerakli narsalar bilan bilan o‘z vaqtida aniq
        ta’minlash jangning muvaffaqiyatini belgilovchi omil deb qaralgan.
        Vizantiya imperiyasida «logist» mansabi joriy etilgan bo‘lib ular
        oziq-ovqat taqsimoti bilan shug‘ullanganlar. Logistika atamasi grekcha
        «Хоуютхкц» so‘zidan kelib chiqqan bo‘lib Vizantiya imperatori Lv VI ning
        davrida «hisob san'ati» degan ma’noni anglatgan (865-912yy). Ispan
        huquqshunosi va iqtisodchisi Polo de Ondegardoning 1572-yilda xabar
        berishicha ink Imperiyasi chinovniklari tomonidan ink saroyi uchun zarur
        bo‘lgan oziq-ovqat miqdorining hisobi olib borilgan. Bunda ularni
        qayerdan tashib keltirilishi, yetkazib kelish vaqti va tashish
        masofalarining hisoblari olib borilgan. XIX asrda fransuz olimi A.G.
        Jomini logistikani armiya va front orqasini boshqarish. tashishni
        rejalashtirish va tashkil etish bo‘yicha fan deb talqin etadi.
        1850-yilda Sankt-Peterburgda chop etilgan «Harbiy ensiklopedik
        leksion»da logistika deb uzoqda va dushman yaqinida qo‘shinni
        ko‘chirishni boshqarish, qo‘shinni orqadan ta’minlashni tashkil etish
        san'ati deb tushuncha berilgan
        <br />
      </div>
    </div>
  );
};

export default Entering;
