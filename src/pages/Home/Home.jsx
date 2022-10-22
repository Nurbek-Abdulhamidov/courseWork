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
        kafedrasi <span className={classes.subject_name}>"Logistika"</span>{" "}
        fanidan
      </h2>
      <h3 className={classes.theme_name}>
        "Omborlar logistikasi va ularga qo'yiladigan talablar" mavzusidagi
      </h3>
      <h1 className={classes.course_work}>KURS ISHI </h1>
      <div className={classes.names_div}>
        <div className={classes.teacher_name}>
          <span>Ilmiy raxbar : </span>Tuxtaboyev J.
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0gMqpCE-U9O5OAMJJwGqjfC4KS5-Q9lv3g&usqp=CAU"
            alt=""
            height="100px"
            width="100px"
          />
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
