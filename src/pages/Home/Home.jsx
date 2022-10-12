import classes from "../Home/Home.module.scss";

export const Home = () => {
  return (
    <div className={classes.home_wrapper}>
      <h2 className={classes.main_heading}>
        O'zbekiston Respublikasi Oliy va O'rta Maxsus Ta'lim Vazirligi Toshkent
        Davlat Iqtisodiyot Unversiteti Sirtqi ta'lim bo'limi
        <span className={classes.grade_name}>
          “Menejment va Marketing”
        </span>{" "}
        kafedrasi{" "}
        <span className={classes.subject_name}>“Marketingni boshqarish”</span>{" "}
        fanidan
      </h2>
      <h3 className={classes.theme_name}>
        "Marketingni boshqarish jarayonida tovar siyosati" mavzusidagi
      </h3>
      <h1 className={classes.course_work}>KURS ISHI </h1>
      <div className={classes.names_div}>
        <div className={classes.teacher_name}>
          <span>Ilmiy raxbar : </span>Rahmonov Norim .
        </div>
        <div className={classes.teacher_name}>
          <span>Bajardi : </span>Sirtqi ta'lim bo'limi "Marketing (tarmoqlar va
          xizmatlar)" ta'lim yo'nalishi MMR-51 gurux talabasi Abdulhamidov
          Nurbek.
        </div>
      </div>
    </div>
  );
};
export default Home;
